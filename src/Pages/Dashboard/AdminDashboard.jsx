import { FaUsers, FaTint, FaMoneyBillWave, FaStar, FaUserCheck, FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const AdminDashboard = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  // Stats
  const [stats, setStats] = useState({
    totalDonors: 0,
    totalFunding: 0,
    totalRequests: 0,
  });

  // Charts
  const [monthlyData, setMonthlyData] = useState([]);
  const [bloodRequestsData, setBloodRequestsData] = useState([]);

  const pieColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

  useEffect(() => {
    // Fetch stats and chart data
    axiosInstance.get("/admin/stats")
      .then(res => {
        const data = res.data || {};

        // Set main stats
        setStats({
          totalDonors: data.totalDonors || 0,
          totalFunding: data.totalFunding || 0,
          totalRequests: data.totalRequests || 0,
        });

        // Example: monthly donations (replace with your backend data if available)
        const monthly = (data.monthlyDonations || [
          { month: "Jan", donations: 50 },
          { month: "Feb", donations: 80 },
          { month: "Mar", donations: 65 },
          { month: "Apr", donations: 90 },
          { month: "May", donations: 120 },
        ]);
        setMonthlyData(monthly);

        // Example: blood requests per group
        const bloodReq = (data.bloodRequests || [
          { bloodGroup: "A+", requests: 30 },
          { bloodGroup: "B+", requests: 50 },
          { bloodGroup: "O+", requests: 40 },
          { bloodGroup: "AB+", requests: 20 },
        ]);
        setBloodRequestsData(bloodReq);
      })
      .catch(err => console.log(err));
  }, [axiosInstance]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Welcome back <span className="text-red-500">{user?.displayName}</span>
      </h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 shadow rounded-xl p-6 flex items-center gap-4">
          <FaUsers className="text-4xl text-blue-500" />
          <div>
            <h3 className="text-blue-700 text-4xl font-extrabold">{stats.totalDonors}</h3>
            <p className=" font-bold text-gray-600">Total Donors</p>
          </div>
        </div>
        <div className="bg-green-50 shadow rounded-xl p-6 flex items-center gap-4">
          <FaMoneyBillWave className="text-4xl text-green-500" />
          <div>
            <h3 className="text-green-700 text-4xl font-bold">${stats.totalFunding}</h3>
            <p className="font-bold text-gray-600">Total Funding</p>
          </div>
        </div>
        <div className="bg-red-50 shadow rounded-xl p-6 flex items-center gap-4">
          <FaTint className="text-4xl text-red-500" />
          <div>
            <h3 className="text-red-700 text-4xl font-extrabold">{stats.totalRequests}</h3>
            <p className="text-gray-600 font-bold">Blood Requests</p>
          </div>
        </div>
      </div>

      {/* Other Stats Cards */}
      <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaStar className="text-yellow-400 text-4xl mx-auto mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-800">65k+</h2>
          <p className="text-gray-500 font-semibold mt-1">Ratings</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaUserCheck className="text-green-500 text-4xl mx-auto mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-800">40k+</h2>
          <p className="text-gray-500 font-semibold mt-1">Happy Donors</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <FaHeart className="text-red-500 text-4xl mx-auto mb-2" />
          <h2 className="text-4xl font-extrabold text-gray-800">25k+</h2>
          <p className="text-gray-500 font-semibold mt-1">Successful Donations</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Monthly Line Chart */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Monthly Donations</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="donations" stroke="#FF0000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Requests Bar Chart */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Blood Requests per Blood Group</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bloodRequestsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bloodGroup" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="requests" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-xl p-6 lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Donor Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bloodRequestsData}
                dataKey="requests"
                nameKey="bloodGroup"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {bloodRequestsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
