import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [district, setDistrict] = useState("");
  const [upozila, setUpozila] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  useEffect(() => {
    if (!user?.email) return;
    axiosInstance
      .get(`/users/profile/${user.email}`)
      .then((res) => {
        setProfile(res.data);
        setDistrict(res.data.district);
        setUpozila(res.data.upozila);
        setBloodGroup(res.data.bloodGroup || "");
      })
      .catch((err) => console.error(err));
  }, [user.email]);

  const uploadImage = async (file) => {
    if (!file) return profile?.mainPhotoUrl || null;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=05d68a433db9b07b9aa2eea79bf8a95d",
        formData
      );
      return res.data.data.display_url;
    } catch (err) {
      console.error("Image upload failed:", err.response?.data || err.message);
      throw err;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const photoURL = photoFile ? await uploadImage(photoFile) : profile.mainPhotoUrl;

      await axiosInstance.patch(`/users/profile/${user.email}`, {
        mainPhotoUrl: photoURL,
        district,
        upozila,
        bloodGroup,
      });

      setProfile({ ...profile, mainPhotoUrl: photoURL, district, upozila, bloodGroup });
      setEdit(false);
      setPhotoFile(null);
    } catch (err) {
      console.error("Profile update failed:", err.response?.data || err.message);
    }
  };

  if (!profile) return <p>Loading...</p>;

  const handleEditClick = (e) => {
  e.preventDefault(); 
  setEdit(true);
};

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <img
        src={profile.mainPhotoUrl || "/default-avatar.png"}
        alt="Avatar"
        className="w-24 h-24 rounded-full mb-4"
      />

      <form
        onSubmit={handleUpdate}
        className="max-w-md w-full space-y-4 bg-white p-6 shadow rounded"
      >
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            value={profile.name}readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={profile.email} readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">District</label>
          <input type="text"
            value={district} readOnly={!edit}
            onChange={(e) => setDistrict(e.target.value)}
            className={`input input-bordered w-full ${edit ? "" : "bg-gray-100 cursor-not-allowed"}`}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Upozila</label>
          <input type="text" value={upozila}
            readOnly={!edit}
            onChange={(e) => setUpozila(e.target.value)}
            className={`input input-bordered w-full ${edit ? "" : "bg-gray-100 cursor-not-allowed"}`}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Blood Group</label>
          <input type="text"
            value={bloodGroup}readOnly={!edit}
            onChange={(e) => setBloodGroup(e.target.value)}
            className={`input input-bordered w-full ${edit ? "" : "bg-gray-100 cursor-not-allowed"}`}
          />
        </div>
        {edit && (
          <div>
            <label className="block font-semibold mb-1">Update Avatar</label>
            <input type="file"
              accept="image/*"
              onChange={(e) => setPhotoFile(e.target.files[0])}
              className="file-input file-input-bordered w-full"
            />
          </div>
        )}

        {!edit ? (
          <button
            type="button"
            onClick={handleEditClick}
            className="btn btn-info w-full mt-4"
          >Edit Profile</button>) : (
          <button type="submit" className="btn btn-success w-full mt-4">
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default MyProfile;
