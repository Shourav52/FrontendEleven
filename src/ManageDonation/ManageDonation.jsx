import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const ManageDonation = () => {
  const [totalRequest, setTotalRequest] = useState(0)
  const [myRequests, setMyRequests] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const axiosInstance = useAxios()
  const { user } = useContext(AuthContext)
  const [filterStatus, setFilterStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    const fetchRequests = async () => {
      try {
        const res = await axiosInstance.get(`/my-request/${user.email}?page=${currentPage - 1}&size=${itemsPerPage}${filterStatus ? `&status=${filterStatus}` : ''}`)
        setMyRequests(res.data.request)
        setTotalRequest(res.data.totalRequest)
        setLoading(false);
      } catch (err) {
        console.log(err)
      }
    }
    fetchRequests()
  }, [user?.email, currentPage, itemsPerPage, filterStatus, axiosInstance])

  const numberofPages = Math.ceil(totalRequest / itemsPerPage)
  const pages = [...Array(numberofPages).keys()].map(e => e + 1)
  // console.log(pages)
  // console.log(myRequests);
  // console.log(totalRequest);
  // console.log(numberofPages);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }

  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this request?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/donation-request/${id}`);
      setMyRequests((prev) => prev.filter((req) => req._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
 const handleFilter = (e) => {
    setFilterStatus(e.target.value)
    setCurrentPage(1) 
  }
  return (
    <div className="overflow-x-auto">
      <div className='flex flex-col justify-center items-center font-semibold'>
        <h1 className='text-red-400 mb-2'>Filter Process</h1>
      <select
        value={filterStatus}
        onChange={handleFilter}
        className="select text-white select-bordered bg-red-400 w-40 mb-4">
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
      </select>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr className='text-red-500'>
            <th>No</th>
            <th>Recipient Name</th>
            <th>Status</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            myRequests?.map((request, index) =>
              <tr key={request._id}>
                <th>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">
                        {request.recipientName}
                      </div>
                      <div className="text-sm opacity-50">{request.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {request.donation_status}
                </td>
                <td>{request.bloodGroup
                }</td>
                <th>
                 <div className='flex '>
                   <button onClick={() => handleDelete(request._id)}
                   className="btn mr-3 btn-error btn-xs">Delete</button>
                  <button onClick={() => navigate(`/dashboard/edit-donation/${request._id}`)}
                   className="btn btn-info   btn-xs">Edit</button>
                 </div>
                </th>
              </tr>
            )
          }
        </tbody>
      </table>
      <div className='mt-10 flex justify-center gap-3' >
        <button onClick={handlePrev} className='btn'>Prev</button>{
          pages.map(page =>
            <button key={page} className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
              onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          )
        }<button onClick={handleNext} className='btn'>Next</button>
      </div>
    </div>
  )
}

export default ManageDonation
