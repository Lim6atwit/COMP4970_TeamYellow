import { useState, useEffect } from 'react';
import axios from 'axios';
import UI_Facade from '../../../UI_Facade';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    capacity: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values)
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        /*
          axios.post('http://localhost:5000/api/rooms', values)
          .then(res => console.log(res.data));
        */
        console.log(values);
        addRoom(values);
        callback();
      }
    },
    [errors]
  );
  
  return { handleChange, handleSubmit, values, errors };
};

function addRoom(room) {
  const toDB = new UI_Facade();
  toDB.addRoom(room);
}

export default useForm;
