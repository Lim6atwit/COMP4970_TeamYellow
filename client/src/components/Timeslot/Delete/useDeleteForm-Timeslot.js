import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const useDeleteForm = (callback) => {
  
    const [values, setValues] = useState({
        name: '',
        start: '',
        end: ''
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
        axios.get('http://localhost:5000/api/timeslots/'+id)
            .then(response => {
                setValues({
                    name: response.data.name,
                    start: response.data.start,
                    end: response.data.end,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        }

       if (isSubmitting) {
            axios.delete('http://localhost:5000/api/timeslots/'+id)
                .then(response => { console.log(response.data)});
            callback();
        }

        return () => isMounted = false;
    }
  );
  
  return { handleSubmit, values };
};

export default useDeleteForm;
