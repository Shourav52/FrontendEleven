import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const ManageDonation = () => {
    const [donation, setDonation]= useState([])
    const axiosInstance = useAxios();
    const {user} = useContext(AuthContext)

   useEffect(() => {
    if (!user?.email) return;

    axiosInstance.get(`/doner/donations/${user.email}`)
        .then(res => {
            setDonation(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}, [axiosInstance, user?.email]);

  return (
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        donation?.map(donation=>
            <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th className='flex '>
          <button className="btn mr-3 btn-error btn-xs">Delete</button>
          <button className="btn btn-info   btn-xs">Edit</button>
        </th>
      </tr>
        )
      }
    </tbody>
  </table>
</div>
  )
}

export default ManageDonation
