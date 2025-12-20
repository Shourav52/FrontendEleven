import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router";

const MainDashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

const [requests, setRequests] = useState([]);
  useEffect(() => {
    if (!user?.email) return;

    axiosInstance
      .get(`/donations/donor/${user.email}?limit=3`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleStatusUpdate = async (id, status) => {
  try {
    await axiosInstance.patch(`/donation-request/status/${id}`, { status });
    setRequests(prev =>
      prev.map(req =>
        req._id === id ? { ...req, donation_status: status } : req
      )
    );
  } catch (err) {
    console.error(err);
  }
};



  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this request?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/donation-request/${id}`);
      setRequests((prev) => prev.filter((req) => req._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Welcome <span className="text-red-500">{user?.displayName}</span>
      </h2>



      {requests.length > 0 && (
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl text-red-500 font-semibold mb-4">
            Recent Donation Requests
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th className="text-red-500">Blood</th>
                  <th>Status</th>
                  <th>Donor Info</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id}>
                    <td>{req.recipientName}</td>
                    <td>{req.district}, {req.upozila}</td>
                    <td>{req.date}</td>
                    <td>{req.time}</td>
                    <td>{req.bloodGroup}</td>
                    <td className="capitalize">{req.donation_status}</td>

                    <td>
                      {req.donation_status === "inprogress" ? (
                        <div>
                          <p>{req.donorName}</p>
                          <p className="text-sm">{req.requesterEmail}</p>
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="space-x-1">
                      {req.donation_status=== "inprogress" && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(req._id, "done")}
                            className="btn btn-xs btn-success"
                          >
                            Done
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(req._id, "canceled")}
                            className="btn btn-xs btn-error"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      <button onClick={() => navigate(`/dashboard/edit-donation/${req._id}`)}
                        className="btn btn-xs pl-3.5 pr-3.5 btn-info"
                      >
                        Edit
                      </button>
                      <button onClick={() => navigate(`/donation-request/${req._id}`)}
                        className="btn btn-xs pl-3 pr-3 mt-1 btn-primary"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDelete(req._id)}
                        className="btn btn-xs mt-1 btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/dashboard/manage-donation")}
              className="btn btn-info"
            >
              View My All Requests
            </button>
          </div>
    </div>
  );
};

export default MainDashboard;
