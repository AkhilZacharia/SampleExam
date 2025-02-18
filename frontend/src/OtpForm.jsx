import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OtpForm = () => {
    const [otp,setOtp] = useState();
    const navigate = useNavigate();
    const check = async (e) => {
        e.preventDefault();
        console.log('hi',otp);
       await axios.post('http://localhost:3000/otp',{otp:otp}).then((res)=>{
            console.log(res.data);
            
            if (res.data===true) {
                alert('Success!')
                navigate('/success')
            } else {
                alert('Invalid!')
            }
        });
      }
  return (
    <div>
        <h4>Enter Otp</h4>
        <input type="number" name="otp" id="" onChange={(e)=>setOtp(e.target.value)} required/>
        <button onClick={check}>Verify</button> 
    </div>
  )
}

export default OtpForm