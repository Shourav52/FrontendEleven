import React, { useContext, useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios';

const AllUsers = () => {
  const axiosInstance = useAxios();
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    axiosInstance.get('/users')
      .then(res => {
        setUsers(res.data)
      })
  }
  useEffect(() => {
    fetchUsers();
  }, [axiosInstance])

  const handleRoleChange = (email, role) => {
    axiosInstance.patch(`/update/user/role?email=${email}&role=${role}`)
      .then(res => {
        console.log(res.data);
        fetchUsers();
      })
      .catch(err => console.error(err));
  };

  const handleStatusChange = (email, status) => {
    axiosInstance.patch(`/update/user/status?email=${email}&status=${status}`)
      .then(res => {
        console.log(res.data);
        fetchUsers();
      })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users?.map(user =>
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.mainPhotoUrl} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.role}
                  </td>
                  <td>{user?.status}</td>
                  <td>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="btn btn-sm m-1">⋮</label>
                      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                        {user.role !== 'volunteer' && (
                          <li>
                            <button onClick={() => handleRoleChange(user.email, 'volunteer')}>
                              Make Volunteer
                            </button>
                          </li>
                        )}
                        {user.role !== 'admin' && (
                          <li>
                            <button onClick={() => handleRoleChange(user.email, 'admin')}>
                              Make Admin
                            </button>
                          </li>
                        )}
                        {
                          user?.status === 'active' ?
                            (<button onClick={() => handleStatusChange(user?.email, 'blocked')} className="btn btn-error text-white btn-xs">Blocked</button>) :
                            (
                              <button onClick={() => handleStatusChange(user?.email, 'active')} className="btn btn-active btn-xs">Active</button>
                            )
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
