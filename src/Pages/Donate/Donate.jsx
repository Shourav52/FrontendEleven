import React, { useContext } from 'react'
import useAxios from '../../hooks/useAxios'
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import TDonate from '../../compunents/TDonate';

const Donate = () => {
    const axiosInstance = useAxios();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleCheckout = (e) => {
    e.preventDefault();
    const donateAmount = e.target.donateAmount.value;
    const donorEmail = user?.email;
    const donorName = user?.displayName;

    const formData = {
        donateAmount,
        donorEmail,
        donorName
    }

    axiosInstance.post('/create-payment-chackout',formData)
      .then(res => {
        console.log(res.data)
        window.location.href = res.data.url
      }
        
    )
      .catch(err => console.error(err));
};

  return ( 
    <div>
       <form onSubmit={handleCheckout} className='mt-10 flex justify-center'>
        <input name='donateAmount' type="text" placeholder="Enter Your Donate Amount" className="input rounded-l-3xl" />
        <button className='btn btn-primary rounded-r-3xl ml-[-3px]' type='submit'>Donate</button>
       </form>
       <TDonate></TDonate>
    </div>   
  )
}

export default Donate
