import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const ManageDonation = () => {
    const [totalRequest, setTotalRequest]= useState(0)
    const [myRequests, setMyRequests]= useState([])
    const [itemsPerPage, setItemsPerPage]= useState(10)
    const [currentPage, setCurrentPage]= useState(1)
    const axiosInstance = useAxios()
    const {user} = useContext(AuthContext)
    
    useEffect(() => {
        if (!user?.email) return;

    axiosInstance.get(`/my-request/${user.email}?page=${currentPage-1}&size=${itemsPerPage}`)
            .then(res => {
              
                setMyRequests(res.data.request)
                setTotalRequest(res.data.totalRequest) 
              })
            .catch(err => console.log(err))
    }, [axiosInstance, user?.email, currentPage, itemsPerPage])

     const numberofPages = Math.ceil(totalRequest / itemsPerPage)
     const pages = [...Array(numberofPages).keys()].map(e=> e+1)
      // console.log(pages)
    // console.log(myRequests);
    // console.log(totalRequest);
    // console.log(numberofPages);
    const handlePrev =()=>{
      if(currentPage > 1){
        setCurrentPage(currentPage-1)
      }

    }
    
    const handleNext =()=>{
      if(currentPage < pages.length){
        setCurrentPage(currentPage+1)
      }
    }

  return (
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
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
        myRequests?.map((request,index)=>
            <tr>
              <th>
                {index+1}
              </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">
                {request.recipientName}
              </div>
              <div className="text-sm opacity-50">{request.
address}</div>
            </div>
          </div>
        </td>
        <td>
          {request.donation_status}
        </td>
        <td>{request.bloodGroup
}</td>
        <th className='flex '>
          <button className="btn mr-3 btn-error btn-xs">Delete</button>
          <button className="btn btn-info   btn-xs">Edit</button>
        </th>
      </tr>
        )
      }
    </tbody>
  </table>
  <div className='mt-10 flex justify-center gap-3' >
    <button onClick={handlePrev} className='btn'>Prev</button>{
      pages.map(page=>
        <button className={`btn ${page === currentPage ? 'bg-[#435585] text-white' :''}`}
         onClick={()=> setCurrentPage(page)}>
          {page}
        </button>
      )
    }<button onClick={handleNext}  className='btn'>Next</button>
  </div>
</div>
  )
}

export default ManageDonation
