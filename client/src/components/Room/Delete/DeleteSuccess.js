import React from 'react';
import '../Form/Form.css';

const DeleteSuccess = () => {
  return (
    <>
      <div className="form">
      <h1 className="h1" > Room has been deleted</h1>
      {/* <img className='img-success ' src={process.env.PUBLIC_URL+'img/success.svg'} alt='success-image' /> */}
      <a href='/room' className="btn btn-info btn-lg m-2"> View all Rooms</a>
      </div>
      
      {/* <img className='form-img-2' src='img/img-3.svg' alt='success-image' /> */}
    </> 
  );
};

export default DeleteSuccess;
