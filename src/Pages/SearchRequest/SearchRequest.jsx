import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

const SearchRequest = () => {
  const [upozilas, setupozilas] = useState([])
  const [upozila, setupozila] = useState('')
  const [districts, setdistricts] = useState([])
  const [district, setdistrict] = useState('')
  const [results, setResults] = useState([]);

  const axiosInstance = useAxios()
  useEffect(() => {
    axios.get('/upozila.json')
      .then(res => {
        setupozilas(res.data.upazilas)
      })
    axios.get('./district.json')
      .then(res => {
        setdistricts(res.data.districts)
      })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    const bloodGroup = e.target.bloodGroup.value;
    axiosInstance.get(`/search-requests?bloodGroup=${bloodGroup}&district=${district}&upozila=${upozila}`)
      .then(res => {
        console.log(res.data);
        setResults(res.data); 
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='ml-8 mr-8 mt-8 mb-40'>
      <div className='flex flex-col items-center justify-items-center justify-center'>
        <h1 className='text-2xl text-red-400 font-extrabold'>You Can Search Here</h1>
        <form onSubmit={handleSearch} className='mt-3 bg-red-500 rounded-4xl p-2 pl-10 pr-10 flex '>
          <div>
            <select name="bloodGroup" defaultValue="" className="select bg-red-400 text-white font-semibold" required>
              <option disabled={false}>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <select name="district"
              value={district}
              onChange={(e) => setdistrict(e.target.value)}
              className="select bg-red-400 text-white font-semibold" required>
              <option disabled={false}>Select District</option>
              {
                districts.map(d =>
                  <option value={d.name} key={d.id}>{d.name}</option>
                )

              }
            </select>
          </div>
          <div>
            <select name="upozila"
              value={upozila}
              onChange={(e) => setupozila(e.target.value)}
              className="select bg-red-400 text-white font-semibold" required>
              <option disabled={false}>Select Upazila</option>
              {
                upozilas.map(u =>
                  <option value={u.name} key={u.id}>{u.name}</option>
                )

              }
            </select>
          </div>
          <button type='submit' className='btn ml-3 bg-gradient-to-r from-red-800 to-red-500 hover:bg-red-300 text-yellow-100 rounded-lg'>Search</button>

        </form>
      </div>

      <div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {
    results.map(request => (
      <div key={request._id} className="card bg-base-100 shadow-md ">
        <div className="card-body">
       <div className='flex items-center justify-between space-y-2.5'>
           <div className='space-y-1'>
            <h2 className="card-title text-red-600">
            Blood Need For: {request.recipientName}
          </h2>

          <p className="font-semibold">Blood Group: <span className='text-red-500'>{request.bloodGroup}</span> </p>
          <p className="font-semibold">Hospital: {request.hospital}</p>
          <p className="font-semibold">Location: {request.upozila}, {request.district}</p>
          </div>
        <div className='space-y-1 text-gray-600'>
          <p className="font-semibold ">Date: {request.date}</p>
          <p className="font-semibold">Time: {request.time}</p>
        </div>
       </div>
          <div className="card-actions justify-end">
            <button className="btn btn-error btn-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    ))
  }

  {
    results.length === 0 && (
      <p className=" text-center text-3xl mt-20 col-span-full text-gray-500">
        No donation request found
      </p>
    )
  }
</div>

      </div>
    </div>
  )
}

export default SearchRequest
