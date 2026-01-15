import React from 'react'
import { useNavigate, useParams } from 'react-router'
import {  sendPasswordResetEmail } from "firebase/auth";
import auth from '../firebase/firebase.config';

const ForgetPass = () => {

    const {email} = useParams();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const formemail = e.target.email.value;
        sendPasswordResetEmail(auth, formemail)
        .then(() => {
            window.open('https://mail.google.com/mail/u/0/#inbox')
        })
        .catch((error) => {
           console.log(error);
        });
    }
  return (
    <div className='flex justify-center mt-10 items-center'>
        <div className="card  w-auto h-auto p-10 font-semibold shadow-sm ">
        
      <form onSubmit={handleSubmit} className='fieldset'>
         <div>
               <label htmlFor="">Email</label>
              <input  defaultValue={email}
              name='email'
               className='border-white border rounded-[8px] p-2 w-full'  type="email" placeholder='Enter Your Email' />
             </div>
              <button className='text-white btn bg-red-500 font-extrabold   mt-3 '>
              Reset Password
            </button>
      </form>
      </div>
    </div>
  )
}

export default ForgetPass;