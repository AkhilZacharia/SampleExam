import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const FormEmail = ({ setView }) => {
  const [email, setEmail] = useState("");
  const Generate = async(e) => {
    e.preventDefault();
    console.log('hi...',email);
    await axios.post('http://localhost:3000/email',{mail:email}).then((res)=>{
        setView(true); 
        console.log(res.data);
        
    });
  }

  return (
    <div>
      <form onSubmit={Generate}>
      <h2>Form Email</h2>
      <label htmlFor="email">Email :</label>
      <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} required/>
      <button type="submit">Get OTP</button>
    </form>
    </div>
  );
};

export default FormEmail;
