import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../Provider/AuthProvider'
import { useParams } from 'react-router'
import useAxios from '../hooks/useAxios'

const Details = () => {
    const { id } = useParams()
  const axiosInstance = useAxios()
  const { user } = useContext(AuthContext)

  const [donation, setDonation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosInstance.get(`/donation-request/${id}`)
      .then(res => {
        setDonation(res.data)
        setLoading(false)
      })
  }, [axiosInstance, id])

  const handleConfirmDonate = () => {
    axiosInstance
      .patch(`/donation-request/inprogress/${id}`)
      .then(() => {
        setDonation(prev => ({
          ...prev,
          donation_status: 'inprogress'
        }))
        document.getElementById('donate_modal').close()
      })
  }

  if (loading) return (
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-spinner loading-lg text-error"></span>
    </div>
  );




  return (
    <div className="max-w-3xl mx-auto px-6 py-10 mb-20">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body ">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Donation Request Details
          </h2>

          <div className='space-y-2 text-[20px] flex justify-between items-center font-semibold'>
          <div>
            <p><span className='font-bold'>Recipient Name:</span> {donation.recipientName}</p>
          <p><span className='font-bold'>Blood Group:</span> <span className='text-red-500'>{donation.bloodGroup}</span></p>
          <p><span className='font-bold'>Hospital:</span> {donation.hospital}</p>
          <p><span className='font-bold'>Location:</span> {donation.upozila}, {donation.district}</p>
          <p><span className='font-bold'>Address:</span> {donation.address}</p>
          </div>
          <div className=' mt-6'>
            <p><span className='font-bold'>Date:</span> {donation.date}</p>
          <p><span className='font-bold'>Time:</span> {donation.time}</p>
          <p><span className='font-bold'>Message:</span> {donation.message}</p>
          <p>
            <span className='font-bold'>Status: </span>
            <span className="text-orange-500 font-semibold">
              {donation.donation_status}
            </span>
          </p>
          </div>
          </div>

          {
            donation.donation_status === 'pending' && (
              <div className="mt-6">
                <button className="btn w-full btn-error text-white"
                   onClick={() => document.getElementById('donate_modal').showModal()}>
                    Donate
                </button>
              </div>
            )
          }
        </div>
      </div>
      <dialog id="donate_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Confirm Donation</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={user?.displayName || 'N/A'}
              readOnly
              className="input input-bordered w-full"
            />
            <input
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
    <div className="modal-action">
            <button className="btn" onClick={() => document.getElementById('donate_modal').close()}> Cancel </button>
              <button className="btn btn-error" onClick={handleConfirmDonate}> Confirm</button>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Details
