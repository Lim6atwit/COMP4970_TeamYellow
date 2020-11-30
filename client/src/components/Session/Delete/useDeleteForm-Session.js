import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const useForm = (callback) => {
  
  const [values, setValues] = useState({
    name: '',
    timeslot: '',
    speaker: '',
    room: '',
  });
  
  const [options, setOptions]=useState({
    timeslots:[],
    speakers:[],
    rooms:[]
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  
  const handleSubmit = e => {
    e.preventDefault();

    setIsSubmitting(true);
  };

  useEffect(
    () => {
      let isMounted = true;
      // Update select session value
      if(isMounted){
            axios.get('http://localhost:5000/api/sessions/'+id)
                .then(response => {
                    setValues({
                    name: response.data.name,
                    timeslot: response.data.timeslot,
                    speaker: response.data.speaker,
                    room: response.data.room,
                    })
                })
                .catch(function (error) {
                console.log(error);
                })
            // Get options for Time lsot, Speaker, Room
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
        }

      if (isSubmitting) {
        axios.delete('http://localhost:5000/api/sessions/'+id)
            .then(response => { console.log(response.data)});
        callback();
      }
      return () => isMounted = false;
    }
  );
  
  return { handleSubmit, values, options};
};

export default useForm;
