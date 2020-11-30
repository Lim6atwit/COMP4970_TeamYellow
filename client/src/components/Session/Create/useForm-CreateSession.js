import { useState, useEffect } from 'react';
import axios from 'axios';
import UI_Facade from '../../../UI_Facade';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    timeslot: '',
    session: '',
    room: '',
  });
  const [options, setOptions]=useState({
    timeslots:[],
    speakers:[],
    rooms:[]
  })
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
      axios.all([
        axios.get('http://localhost:5000/api/timeslots/'), 
        axios.get('http://localhost:5000/api/speakers/'),
        axios.get('http://localhost:5000/api/rooms/')
      ])
      .then(axios.spread((timeslots, speakers,rooms) => {
        
        // console.log(timeslots.data);
        // console.log(speakers.data);
        // console.log(rooms.data);
        setOptions({
          timeslots:timeslots.data,
          speakers:speakers.data,
          rooms:rooms.data,
        })
      }));

      if (Object.keys(errors).length === 0 && isSubmitting) {
        /*
        axios.post('http://localhost:5000/api/sessions', values)
          .then(res => console.log(res.data));
          */
        console.log(values);
        addSession(values);
        callback();
      }
        
    },
    [errors]
  );
  // console.log(values)
  return { handleChange, handleSubmit, values, errors, options };
};

function addSession(session) {
  const toDB = new UI_Facade();
  toDB.addSession(session);
}

export default useForm;
