import React from 'react';
import useForm from './useDeleteForm-Session';
import '../Form/Form.css';

const FormSession = ({ submitForm }) => {
  const { handleSubmit, values, options } = useForm(
    submitForm,
  );

  return (
    <>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Update Session
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Session Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder="Enter the full name"
            value={values.name}
            readOnly="readOnly"
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Time slot</label>
          <select
            className='form-input'
            name='timeslot'
            value={values.timeslot} disabled>
            {options.timeslots && options.timeslots.map(function(timeslot) 
            { return <option 
                    key={timeslot.id} 
                    value={timeslot.name}>
                  {timeslot.name} ({timeslot.start} - {timeslot.end})
                  
                </option>;
            })
            }
          </select>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Speaker</label>
          <select
            className='form-input'
            name='speaker'
            value={values.speaker} disabled>
            {options.speakers && options.speakers.map(function(speaker) 
            { return <option 
                    key={speaker.id} 
                    value={speaker.name}>
                  {speaker.name}
                </option>;
            })
            }
          </select>  
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Room</label>
          <select
            className='form-input'
            name='room'
            value={values.room} disabled>
            {options.rooms && options.rooms.map(function(room) 
            { return <option 
                    key={room.id} 
                    value={room.name}>
                  {room.name} (Seats: {room.capacity})
                </option>;
            })
            }
          </select>
        </div>
        <button className='form-input-btn' type='submit'>
          Delete
        </button>
        <a href="/session" className='form-input-btnn'>
          Cancel
        </a>
      </form>
    </>
  );
};

export default FormSession;
