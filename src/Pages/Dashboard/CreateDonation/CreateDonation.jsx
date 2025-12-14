import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";


const CreateDonation = () => {
    const [showOnHome, setShowOnHome] = useState(false)
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const recipientName = form.recipientName.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const hospital = form.hospital.value;
        const address = form.address.value;
        const bloodGroup = form.bloodGroup.value;
        const date = form.date.value;
        const time = form.time.value;
        const message = form.message.value;

        const formData = {

            donorName: user?.displayName,
            donorEmail: user?.email,
            recipientName,
            district,
            upazila,
            hospital,
            address,
            bloodGroup,
            date,
            time,
            message,
            showOnHome
        }
        console.log(formData);
        axiosInstance.post('/donations', formData)
            .then(res => {
                console.log(res.data);
                alert(res.data.insertedId)
            })
            .catch(err => console.log(err))


    }


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold text-red-600 mb-6">
                Create Blood Donation Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Requester Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="displayName"
                        value={user?.displayName || ""}
                        readOnly
                        className="input input-bordered bg-gray-100"
                        placeholder="Requester Name"
                    />

                    <input
                        type="email"
                        name="email"
                        value={user?.email || ""}
                        readOnly
                        className="input input-bordered bg-gray-100"
                        placeholder="Requester Email"
                    />
                </div>

                {/* Recipient Info */}
                <input
                    type="text"
                    name="recipientName"
                    placeholder="Recipient Name"
                    className="input input-bordered w-full"

                    required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                        name="district"
                        className="select select-bordered w-full"

                        required
                    >
                        <option value="">Select District</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                    </select>

                    <select
                        name="upazila"
                        className="select select-bordered w-full"

                        required
                    >
                        <option value="">Select Upazila</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Mirpur">Mirpur</option>
                    </select>
                </div>

                {/* Hospital & Address */}
                <input
                    type="text"
                    name="hospital"
                    placeholder="Hospital Name"
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Full Address Line"
                    className="input input-bordered w-full"
                    required
                />

                {/* Blood Group */}
                <select
                    name="bloodGroup"
                    className="select select-bordered w-full"
                    required
                >
                    <option value="">Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                </select>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered"

                        required
                    />
                    <input
                        type="time"
                        name="time"
                        className="input input-bordered"

                        required
                    />
                </div>

                {/* Message */}
                <textarea
                    name="message"
                    placeholder="Why do you need blood? (Explain in detail)"
                    className="textarea textarea-bordered w-full"
                    rows="4"

                    required
                ></textarea>

                <div className="flex items-center gap-3">
                    <input type="checkbox"
                        checked={showOnHome}
                        onChange={() => setShowOnHome(!showOnHome)}
                        className="h-5 w-5"

                    />
                    <label className="font-semibold"> Show on Home Page (default false) </label>

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    //   disabled={userStatus === "blocked"}
                    className="btn btn-error w-full text-white"
                >
                    Request Blood Donation
                </button>

            </form>
        </div>
    );
};

export default CreateDonation;
