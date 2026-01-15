import React, { useContext, useEffect, useState } from 'react'
import { MdDescription } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import { AuthContext } from '../Provider/AuthProvider'
import { useParams } from 'react-router'
import useAxios from '../hooks/useAxios'
import { IoLocationOutline } from "react-icons/io5";

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
<div className="max-w-4xl mx-auto px-6 py-12 mb-20">
  <div className="card bg-base-100 shadow-xl border border-base-300">
    <div className="card-body space-y-8">

      {/* ===== Page Header ===== */}
      <div>
        <h2 className="text-3xl font-bold text-error">
          Donation Request Details
        </h2>
        <p className="text-base-content/70 mt-1">
          View complete information about this blood donation request
        </p>
      </div>

      <div className="divider"></div>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-error flex items-center gap-2">
  <MdDescription className="text-2xl" />
  <span>Overview</span>
</h3>

        <p className="text-base-content/80 leading-relaxed">
          {donation.message || "No additional message provided by the requester."}
        </p>
      </section>
      <section className="space-y-4">
<h3 className="text-xl font-semibold text-error flex items-center gap-2">
  <GrCircleInformation className="text-2xl" />
  <span>Key Information</span>
</h3>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <p>
            <span className="font-semibold">Recipient Name:</span>{" "}
            {donation.recipientName}
          </p>

          <p>
            <span className="font-semibold">Blood Group:</span>{" "}
            <span className="text-error font-bold">
              {donation.bloodGroup}
            </span>
          </p>

          <p>
            <span className="font-semibold">Hospital:</span>{" "}
            {donation.hospital}
          </p>

          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-orange-500 font-semibold">
              {donation.donation_status}
            </span>
          </p>
        </div>
      </section>
      <section className="space-y-4">
<h3 className="text-xl font-semibold text-error flex items-center gap-2">
  <IoLocationOutline className="text-2xl" />
  <span>Location & Schedule</span>
</h3>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {donation.upozila}, {donation.district}
          </p>

          <p>
            <span className="font-semibold">Address:</span>{" "}
            {donation.address}
          </p>

          <p>
            <span className="font-semibold">Date:</span>{" "}
            {donation.date}
          </p>

          <p>
            <span className="font-semibold">Time:</span>{" "}
            {donation.time}
          </p>
        </div>
      </section>
      {donation.donation_status === "pending" && (
        <>
          <div className="divider"></div>
          <div className="pt-2">
            <button
              className="btn btn-error w-full md:w-1/2 mx-auto block"
              onClick={() =>
                document.getElementById("donate_modal").showModal()
              }
            >
              Donate Now
            </button>
          </div>
        </>
      )}
    </div>
  </div>

  {/* ===== Donate Modal ===== */}
  <dialog id="donate_modal" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg mb-4">
        Confirm Donation
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          value={user?.displayName || "N/A"}
          readOnly
          className="input input-bordered w-full"
        />
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full"
        />
      </div>

      <div className="modal-action">
        <button
          className="btn"
          onClick={() =>
            document.getElementById("donate_modal").close()
          }
        >
          Cancel
        </button>
        <button
          className="btn btn-error"
          onClick={handleConfirmDonate}
        >
          Confirm
        </button>
      </div>
    </div>
  </dialog>
</div>

  )
}

export default Details
