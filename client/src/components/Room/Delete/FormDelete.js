import React from 'react';
import useForm from './useDeleteForm-Room';
import '../Form/Form.css';

const FormDelete = ({ submitForm }) => {
  const { handleSubmit, values } = useForm(
    submitForm
  );

  return (
    <>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Are you sure you want to delete this room?
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Room Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder="Enter the room name"
            value={values.name}
            readOnly="readOnly"
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Capacity</label>
          <input
            className='form-input'
            type='number'
            name='capacity'
            placeholder="How many seats in this room?"
            min="0"
            value={values.capacity}
            readOnly="readOnly"
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Delete
        </button>
        <a href="/room" className='form-input-btnn'>
          Cancel
        </a>
      </form>
    </>
  );
};

export default FormDelete;
