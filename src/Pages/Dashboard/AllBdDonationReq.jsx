import React, { useEffect, useState, useContext } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const AllBdDonationReq = () => {
  const axiosInstance = useAxios();
  const { role } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchRequests = () => {
    let url = "/donation-requests";
    if (filter) url += `?status=${filter}`;
    axiosInstance.get(url)
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchRequests();
  }, [filter]);

  const handleStatusChange = (id, status) => {
    axiosInstance.patch(`/donation-request/status/${id}`, { status })
      .then(res =>{ 
        toast.success(`Status updated to "${status}"`);
        fetchRequests()
  })
    .catch(err => toast.error(err));
  };


  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600 text-center md:text-left">
        All Blood Donation Requests
      </h2>
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter("")}
          className={`btn btn-sm ${filter === "" ? "btn-active" : "btn-outline"}`}
        > All </button>
        <button onClick={() => setFilter("pending")}
          className={`btn btn-sm ${filter === "pending" ? "btn-active" : "btn-outline"}`}> 
        Pending
        </button>
        <button onClick={() => setFilter("inprogress")}
          className={`btn btn-sm ${filter === "inprogress" ? "btn-active" : "btn-outline"}`}>
          In Progress
        </button>
        <button onClick={() => setFilter("completed")}
          className={`btn btn-sm ${filter === "completed" ? "btn-active" : "btn-outline"}`}>
          Completed
        </button>
      </div>

<div className="hidden md:block overflow-x-auto">
<table className="table table-zebra w-full">
<thead>
    <tr>
    <th>Requester</th>
    <th>Recipient</th>
    <th>District</th>
    <th>Blood Group</th>
    <th>Date</th>
    <th>Status</th>
    {role === "volunteer" && <th>Update Status</th>}
    </tr>
</thead>
<tbody>
    {requests.map(req => (
    <tr key={req._id}>
        <td>{req.requesterName || req.requesterEmail}</td>
        <td>{req.recipientName}</td>
        <td>{req.district}</td>
        <td>{req.bloodGroup}</td>
        <td>{req.date}</td>
        <td>{req.donation_status || "pending"}</td>
        <td className="flex flex-wrap gap-1">
        {role === "admin" && (
    <div>
        <button onClick={() => handleStatusChange(req._id, "inprogress")}
        className="btn btn-xs btn-warning">
        In Progress
        </button>
        <button   onClick={()=>handleStatusChange(req._id, "completed")}
        className="btn btn-xs btn-success">
        Completed
        </button>
    <button onClick={() => handleDelete(req._id)}
    className="btn btn-xs btn-error">
    <FaTrash />
    </button>
  </div>
  )}



    {role === "volunteer" && (
  <div className="">
    <button
        onClick={() => handleStatusChange(req._id, "inprogress")}
        className="btn btn-xs btn-warning">
        In Progress
    </button>
        <button onClick={() => handleStatusChange(req._id, "completed")}
                className="btn btn-xs btn-success">
                Completed
                </button>
            </div>)}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan={role === "admin" ? 7 : 6} className="text-center text-gray-500">
                  No donation requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

  <div className="flex flex-col gap-4 md:hidden">
      {requests.map(req => (
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
        {(role === "admin" || role === "volunteer") && (
        <div >
            <button
            onClick={() => handleStatusChange(req._id, "inprogress")}
            className="btn btn-xs btn-warning flex-1">
            In Progress
            </button>
            <button
            onClick={() => handleStatusChange(req._id, "completed")}
            className="btn btn-xs btn-success flex-1">
            Completed
            </button>
        </div>
        )}

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

export default AllBdDonationReq;