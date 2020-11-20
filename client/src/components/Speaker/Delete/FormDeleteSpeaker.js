import React, { useState } from 'react'
import '../Form/Form.css';
import FormDelete from './FormDelete';
import DeleteSucess from './DeleteSuccess';

const FormDeleteSpeaker = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {/* <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div> */}
        {!isSubmitted ? (
          <FormDelete submitForm={submitForm} />
        ) : (
          <DeleteSucess/>
        )}
      </div>
    </>
  );
};

export default FormDeleteSpeaker;
