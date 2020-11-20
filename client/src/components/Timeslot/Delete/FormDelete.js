import React from 'react';
import useForm from './useDeleteForm-Timeslot';
import '../Form/Form.css';

const FormDelete = ({ submitForm }) => {
  const { handleSubmit, values } = useForm(
    submitForm,
  );

  return (
    <>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Are you sure you want to delete this timeslot?
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Timeslot Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder="Enter the time slot name"
            value={values.name}
            readOnly="readOnly"
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Start Time</label>
          <input
            className='form-input'
            type='time'
            name='start'
            min="09:00" 
            max="18:00"
            value={values.start}
            readOnly="readOnly"
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>End Time</label>
          <input
            className='form-input '
            type='time'
            name='end'
            min="09:00" 
            max="18:00"
            value={values.end}
            readOnly="readOnly"
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Delete
        </button>
        <a href="/timeslot" className='form-input-btnn'>
          Cancel
        </a>
      </form>
    </>
  );
};

export default FormDelete;
