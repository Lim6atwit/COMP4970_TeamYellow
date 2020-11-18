import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <>
      <div className="form">
      <h1 className="h1" > Session added successfully</h1>
      {/* <img className='img-success ' src={process.env.PUBLIC_URL+'img/success.svg'} alt='success-image' /> */}
      <a href='/session' className="btn btn-info btn-lg m-2"> View all Session</a>
      </div>
      
      {/* <img className='form-img-2' src='img/img-3.svg' alt='success-image' /> */}
    </> 
  );
};

export default FormSuccess;
