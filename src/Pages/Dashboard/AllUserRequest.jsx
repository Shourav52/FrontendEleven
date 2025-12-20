import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
const AllUserRequest = () => {
    const axiosInstance = useAxios();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = () => {
    setLoading(true);
    axiosInstance.get("/donation-requests")
      .then(res => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusChange = (id, status) => {
    axiosInstance.patch(`/donation-request/status/${id}`, { status })
      .then(() =>{
        toast.success(`Status updated to "${status}"`)
         fetchRequests();
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;

    axiosInstance.delete(`/donation-request/${id}`)
      .then(() =>{ 
        toast.success("Donation request deleted successfully");
        fetchRequests()

      })
      .catch(err => console.error(err));
  };

  if (loading) return (
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-spinner loading-lg text-error"></span>
    </div>
  );


  return (
  <div className="p-4 md:p-6">
  <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-600 text-center md:text-left">
    All Blood Donation Requests
  </h2>
  <div className="hidden md:block overflow-x-auto">
    <table className="table table-zebra w-full">
      <thead>
        <tr className="bg-gray-100">
          <th>Requester</th>
          <th>Recipient</th>
          <th>District</th>
          <th>Blood Group</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <tr key={req._id} className="hover:bg-gray-50">
            <td>{req.requesterName || req.requesterEmail}</td>
            <td>{req.recipientName}</td>
            <td>{req.district}</td>
            <td>{req.bloodGroup}</td>
            <td>{req.date}</td>
            <td>{req.donation_status || "pending"}</td>
            <td className="flex flex-wrap gap-1">
              <button
                onClick={() => handleStatusChange(req._id, "inprogress")}
                className="btn btn-xs btn-warning"
              > In Progress</button>
              <button
                onClick={() => handleStatusChange(req._id, "completed")}
                className="btn btn-xs btn-success">
                Completed
              </button>
              <button
                onClick={() => handleDelete(req._id)}
                className="btn btn-xs btn-error">
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="flex flex-col gap-4 md:hidden">
    {requests.map((req) => (
      <div key={req._id} className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="font-bold">{req.requesterName || req.requesterEmail}</span>
          <span className="text-sm text-gray-500">{req.date}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Recipient:</span> {req.recipientName}
          </div>
          <div>
            <span className="font-semibold">District:</span> {req.district}
          </div>
          <div>
            <span className="font-semibold">Blood Group:</span> {req.bloodGroup}
          </div>
          <div>
            <span className="font-semibold">Status:</span> {req.donation_status || "pending"}
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => handleStatusChange(req._id, "inprogress")}
            className="btn btn-xs btn-warning flex-1">  In Progress </button>
          <button
            onClick={() => handleStatusChange(req._id, "completed")}
            className="btn btn-xs btn-success flex-1">
            Completed
          </button>
          <button
            onClick={() => handleDelete(req._id)}
            className="btn btn-xs btn-error flex-1">
            <FaTrash />
          </button>
        </div>
      </div>
    ))}
    {requests.length === 0 && (
      <div className="text-center text-gray-500 py-4">No donation requests found</div>
    )}
  </div>
</div>

  );
};

export default AllUserRequest;
