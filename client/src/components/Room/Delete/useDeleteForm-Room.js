import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const useDeleteForm = (callback) => {
  
  const [values, setValues] = useState({
    name: '',
    capacity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(
    () => {
        let isMounted = true;
        if(isMounted){
        axios.get('http://localhost:5000/api/rooms/'+id)
            .then(response => {
                setValues({
                name: response.data.name,
                capacity: response.data.capacity
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        }

       if (isSubmitting) {
            axios.delete('http://localhost:5000/api/rooms/'+id)
                .then(res => { console.log(res.data)});
            callback();
        }

        return () => isMounted = false;
    }
  );
  
  return { handleSubmit, values };
};

export default useDeleteForm;
