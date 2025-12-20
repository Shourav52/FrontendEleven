import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CreateDonation = () => {
    const [showOnHome, setShowOnHome] = useState(false)
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios()
    // const axiosSecure = useAxiosSecure();

    const [upozilas, setupozilas] = useState([])
    const [upozila, setupozila] = useState('')
    const [districts, setdistricts] = useState([])
    const [district, setdistrict] = useState('')
    useEffect(() => {
        axios.get('/upozila.json')
            .then(res => {
                setupozilas(res.data.upazilas)
            })
        axios.get('/district.json')
            .then(res => {
                setdistricts(res.data.districts)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const recipientName = form.recipientName.value;
        const recipientEmail = form.recipientEmail.value;
        const hospital = form.hospital.value;
        const address = form.address.value;
        const bloodGroup = form.bloodGroup.value;
        const date = form.date.value;
        const time = form.time.value;
        const message = form.message.value;

        const formData = {

            requesterName: user?.displayName,
            requesterEmail: user?.email,
            recipientName,
            district,
            upozila,
            hospital,
            address,
            bloodGroup,
            date,
            time,
            message,
            donation_status:'pending',
            showOnHome
        }
        console.log(formData);
        axiosInstance.post('/donations', formData)
            .then(res => {
                console.log(res.data);
                toast.success("Created successfully ",res.data.insertedId)
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to create donation request")
    })
            


    }


    return (
        <div className="max-w-3xl mx-auto p-10 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold text-red-600 mb-6">
                Create Blood Donation Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="displayName"
                        value={user?.displayName || ""}
                        readOnly
                        className="input w-full input-bordered bg-gray-100"
                        placeholder="Requester Name"
                    />

                    <input
                        type="email"
                        name="recipientEmail"
                        value={user?.email || ""}
                        readOnly
                        className="input w-full input-bordered bg-gray-100"
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
                    <select name="district" defaultValue=""
                        value={district}
                        onChange={(e) => setdistrict(e.target.value)}
                        className="select w-full" required>
                        <option disabled={false}>Select District</option>
                        {
                            districts.map(d =>
                                <option value={d.name} key={d.id}>{d.name}</option>
                            )

                        }
                    </select>
                    <select name="upozila" defaultValue=""
                        value={upozila}
                        onChange={(e) => setupozila(e.target.value)}
                        className="select w-full" required>
                        <option disabled={false}>Select Upazila</option>
                        {
                            upozilas.map(u =>
                                <option value={u.name} key={u.id}>{u.name}</option>
                            )

                        }
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                    <input
                        type="date"
                        name="date"
                        className="input w-full input-bordered"
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        className="input w-full input-bordered"
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
