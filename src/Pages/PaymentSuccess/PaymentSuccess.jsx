import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import useAxios from '../../hooks/useAxios';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
 const [payment, setPayment] = useState(null);
  const axiosInstance = useAxios()
  useEffect(() => {
    axiosInstance.post(`/success-payment?session_id=${sessionId}`)
      .then(res => {
        setPayment(res.data)
        console.log(res.data);
      })
  }, [sessionId])

  return (
    <div className="mb-39 max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Payment Success</h1>

      {payment ? (
        <div className="space-y-2">
          <p><b>Donor Email:</b> {payment.donnorEmail}</p>
          <p><b>Amount:</b> ${payment.amount}</p>
          <p><b>Transaction ID:</b> {payment.trasactionId}</p>
          <p><b>Status:</b> {payment.payment_status}</p>
          <p><b>Paid At:</b> {new Date(payment.paidAt).toLocaleString()}</p>
          <button className='w-full mt-8 btn-success btn'>Download Recept</button>
        </div>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
}
  export default PaymentSuccess
