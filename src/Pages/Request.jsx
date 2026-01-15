import React, { useEffect, useState } from 'react'

import useAxios from '../hooks/useAxios'
import { Link } from 'react-router'
const Request = () => {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  const axiosInstance = useAxios()

  useEffect(() => {
    axiosInstance.get('/donation-requests?status=pending')
      .then(res => {
        setRequests(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [axiosInstance])
  if (loading) {
    return (
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-spinner loading-lg text-error"></span>
    </div>
  );
  }

  return (
  <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Pending Donation Requests
      </h1>

      {
        requests.length === 0 && (
          <p className="text-center text-gray-500">
            No pending donation requests found
          </p>
        )
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          requests.map(request => (
            <div
              key={request._id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition"
            >
              <div className="card-body">
                <h2 className="card-title text-red-500">
                  <span>Recipient Name:</span>
                  {request.recipientName}
                </h2>
                <p>
                  <span className="font-semibold">Location: </span>
                  {request.upozila}, {request.district}
                </p>
                <p>
                  <span className="font-semibold">Blood Group: </span>
                  {request.bloodGroup}
                </p>
                  <p>
                  <span className="font-semibold">Date: </span>
                  {request.date}
              </p>
                <p><span className="font-semibold">Time: </span>
                  {request.time}</p>

          <div className="card-actions justify-end mt-4">
                  <Link to={`/donation-request/${request._id}`}>
                    <button className="btn btn-error btn-sm">
                      View Details
                    </button>
                    
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Request;
