import React from 'react';
import useForm from './useDeleteForm-Speaker';
import '../Form/Form.css';

const FormDelete = ({ submitForm }) => {
  const { handleSubmit, values } = useForm(
    submitForm
  );

  return (
    <>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Are you sure you want to delete this speaker?
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Speaker Name</label>
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder="Enter the valid email"
            value={values.email}
            readOnly="readOnly"
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input '
            type='tel'
            name='phone'
            placeholder="Enter the valid phone number"
            maxLength="10"
            value={values.phone}
            readOnly="readOnly"
          />
        </div>
        <div className='form-inputs '>
          <label className='form-label'>Day Phone</label>
          <input
            className='form-input'
            type='tel'
            name='dayphone'
            placeholder="Enter the day phone number (optional)"
            maxLength="10"
            value={values.dayphone}
            readOnly="readOnly"
          />
        </div>
        <button className='form-input-btn' type='submit'>
          Delete
        </button>
        <a href="/speaker" className='form-input-btnn'>
          Cancel
        </a>
      </form>
    </>
  );
};

export default FormDelete;
