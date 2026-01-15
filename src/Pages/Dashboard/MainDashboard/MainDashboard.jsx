import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import {
  LineChart,
  Line,
  CartesianGrid
} from "recharts";


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

const chartData = [
  { name: "Done", value: requests.filter(r => r.donation_status === "done").length },
  { name: "In Progress", value: requests.filter(r => r.donation_status === "inprogress").length },
  { name: "Canceled", value: requests.filter(r => r.donation_status === "canceled").length },
];




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

  const monthlyData = (() => {
  const months = {};

  requests.forEach(req => {
    if (!req.date) return;

    const month = new Date(req.date).toLocaleString("default", {
      month: "short",
      year: "numeric"
    });

    months[month] = (months[month] || 0) + 1;
  });

  return Object.keys(months).map(month => ({
    month,
    requests: months[month],
  }));
})();

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Welcome <span className="text-red-500">{user?.displayName}</span>
      </h2>

{/* Desktop Table */}
<div className="hidden lg:block">
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
           <div>
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
      </div>
    </table>
  </div>
</div>

{/* Mobile / Tablet Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
  {requests.map((req) => (
    <div
      key={req._id}
      className="bg-white shadow-sm hover:shadow-lg rounded-lg p-4 shadow"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-red-500">
          {req.recipientName}
        </h4>
        <span className="text-sm px-2 py-1 rounded bg-red-100 text-red-600 capitalize">
          {req.donation_status}
        </span>
      </div>

      <p className="text-sm">
        <strong>Location:</strong> {req.district}, {req.upozila}
      </p>
      <p className="text-sm">
        <strong>Date:</strong> {req.date} | {req.time}
      </p>
      <p className="text-sm font-bold text-red-500">
        Blood Group: {req.bloodGroup}
      </p>

      {req.donation_status === "inprogress" && (
        <div className="text-sm mt-2">
          <p><strong>Donor:</strong> {req.donorName}</p>
          <p className="text-xs">{req.requesterEmail}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mt-3">
        {req.donation_status === "inprogress" && (
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

        <button
          onClick={() => navigate(`/dashboard/edit-donation/${req._id}`)}
          className="btn btn-xs btn-info"
        >
          Edit
        </button>

        <button
          onClick={() => navigate(`/donation-request/${req._id}`)}
          className="btn btn-xs btn-primary"
        >
          View
        </button>

        <button
          onClick={() => handleDelete(req._id)}
          className="btn btn-xs btn-outline btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>



      <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/dashboard/manage-donation")}
              className="btn btn-info"
            >
              View My All Requests
            </button>
          </div>

          {/* Overview Cards */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-6">
  <div className="bg-white shadow rounded p-4 text-center">
    <h4 className="text-gray-500">Total Requests</h4>
    <p className="text-2xl font-bold text-red-500">
      {requests.length}
    </p>
  </div>

  <div className="bg-white shadow rounded p-4 text-center">
    <h4 className="text-gray-500">Completed</h4>
    <p className="text-2xl font-bold text-green-500">
      {requests.filter(r => r.donation_status === "done").length}
    </p>
  </div>

  <div className="bg-white shadow rounded p-4 text-center">
    <h4 className="text-gray-500">In Progress</h4>
    <p className="text-2xl font-bold text-blue-500">
      {requests.filter(r => r.donation_status === "inprogress").length}
    </p>
  </div>

  <div className="bg-white shadow rounded p-4 text-center">
    <h4 className="text-gray-500">Canceled</h4>
    <p className="text-2xl font-bold text-orange-500">
      {requests.filter(r => r.donation_status === "canceled").length}
    </p>
  </div>
</div>

<div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-6 mb-6">
  
  {/* Bar Chart */}
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-4 text-center">
      Donation Status Overview
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-4 text-center">
      Request Distribution
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          label
        >
          <Cell fill="#22c55e" />
          <Cell fill="#3b82f6" />
          <Cell fill="#f97316" />
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>




</div>
  <div className="bg-white w-full p-4 rounded shadow mb-6">
  <h3 className="text-lg font-semibold mb-4 text-center">
    Monthly Donation Requests
  </h3>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={monthlyData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="requests"
        stroke="#ef4444"
        strokeWidth={3}
        dot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>
  );
};

export default MainDashboard;
