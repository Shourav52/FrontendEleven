import { FaUsers, FaTint, FaMoneyBillWave } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaStar ,FaUserCheck, FaHeart } from "react-icons/fa";

const Volenteer = () => {
  const axiosInstance = useAxios();
  const [stats, setStats] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosInstance.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10">
        Welcome back <span className="text-red-500">{user?.displayName}</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-blue-50  shadow rounded-xl p-6 flex items-center gap-4">
          <FaUsers className="text-4xl text-blue-500" />
          <div>
            <h3 className="text-blue-700 text-4xl font-extrabold">{stats.totalDonors}</h3>
            <p className=" font-bold text-gray-600">Total Donors</p>
          </div>
        </div>
        <div className="bg-green-50  shadow rounded-xl p-6 flex items-center gap-4">
          <FaMoneyBillWave className="text-4xl  text-green-500" />
          <div>
            <h3 className="text-green-700 text-4xl font-bold">
              ${stats.totalFunding || 0}
            </h3>
            <p className="font-bold text-gray-600">Total Funding</p>
          </div>
        </div>

        <div className="bg-red-50  not-odd:shadow rounded-xl p-6 flex items-center gap-4">
          <FaTint className="text-4xl text-red-500" />
          <div>
            <h3 className="text-red-700 text-4xl font-extrabold">{stats.totalRequests}</h3>
            <p className="text-gray-600 font-bold">Blood Requests</p>
          </div>
        </div>

      </div>
 <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <FaStar className="text-yellow-400 text-4xl mx-auto mb-2" />
        <h2 className="text-4xl font-extrabold text-gray-800">65k+</h2>
        <p className="text-gray-500 font-semibold mt-1">
          Ratings
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <FaUserCheck className="text-green-500 text-4xl mx-auto mb-2" />
        <h2 className="text-4xl font-extrabold text-gray-800">40k+</h2>
        <p className="text-gray-500 font-semibold mt-1">
          Happy Donors
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <FaHeart className="text-red-500 text-4xl mx-auto mb-2" />
        <h2 className="text-4xl font-extrabold text-gray-800">25k+</h2>
        <p className="text-gray-500 font-semibold mt-1">
          Successful Donations
        </p>
      </div>
</div>
    </div>
  );
};

export default Volenteer;


// Volenteer