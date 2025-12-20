import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";


const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const [donation, setDonation] = useState(null);

  // Load existing donation
  useEffect(() => {
    axiosInstance
      .get(`/donation-request/${id}`)
      .then(res => setDonation(res.data))
      .catch(() => {
        alert("Failed to load donation request");
        navigate(-1);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const updateData = {
      recipientName: data.get("recipientName"),
      district: data.get("district"),
      upozila: data.get("upozila"),
      hospital: data.get("hospital"),
      address: data.get("address"),
      bloodGroup: data.get("bloodGroup"),
      date: data.get("date"),
      time: data.get("time"),
      message: data.get("message"),
      showOnHome: data.get("showOnHome") === "on",
    };

    try {
      await axiosInstance.patch(`/donation-request/${id}`, updateData);
      alert("Donation request updated successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  if (!donation) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-red-600 mb-6">
        Edit Blood Donation Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Recipient Name */}
        <input
          type="text"
          name="recipientName"
          defaultValue={donation.recipientName}
          className="input input-bordered w-full"
          required
        />

        {/* District & Upazila */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="district"
            defaultValue={donation.district}
            className="input input-bordered"
            required
          />
          <input
            type="text"
            name="upozila"
            defaultValue={donation.upozila}
            className="input input-bordered"
            required
          />
        </div>

        {/* Hospital */}
        <input
          type="text"
          name="hospital"
          defaultValue={donation.hospital}
          className="input input-bordered w-full"
          required
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          defaultValue={donation.address}
          className="input input-bordered w-full"
          required
        />

        {/* Blood Group */}
        <select
          name="bloodGroup"
          defaultValue={donation.bloodGroup}
          className="select select-bordered w-full"
          required
        >
          <option>A+</option><option>A-</option>
          <option>B+</option><option>B-</option>
          <option>AB+</option><option>AB-</option>
          <option>O+</option><option>O-</option>
        </select>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            defaultValue={donation.date}
            className="input input-bordered"
            required
          />
          <input
            type="time"
            name="time"
            defaultValue={donation.time}
            className="input input-bordered"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          defaultValue={donation.message}
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        />

        {/* Show on Home */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="showOnHome"
            defaultChecked={donation.showOnHome}
          />
          Show on Home Page
        </label>

        <button type="submit" className="btn btn-error w-full text-white">
          Update Donation Request
        </button>
      </form>
    </div>
  );
};

export default Edit;
