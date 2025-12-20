import { useContext } from "react";
import AdminDashboard from "./AdminDashboard";
import MainDashboard from "./MainDashboard/MainDashboard";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHome = () => {
  const { role, roleLoading } = useContext(AuthContext);

  if (roleLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (role === "admin") return <AdminDashboard />;
  if (role === "donor") return   <MainDashboard></MainDashboard>;
  if (role === "volunteer") return <VolunteerDashboard />;

  return <div>No dashboard found</div>;
};
export default DashboardHome;
