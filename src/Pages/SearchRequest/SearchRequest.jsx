import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

const SearchRequest = () => {
    const [upozilas, setupozilas] = useState([])
    const [upozila, setupozila] = useState('')
    const [districts, setdistricts] = useState([])
    const [district, setdistrict] = useState('')
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

    const handleSearch =(e)=>{
        e.preventDefault();
        const bloodGroup = e.target.bloodGroup.value;
        axiosInstance.get(`/search-requests?bloodGroup=${bloodGroup}&district=${district}&upozila=${upozila}`)
        .then(res=>{
            console.log(res.data);
        })
    }
    
    



    return (
        <div>
            <form onSubmit={handleSearch} className=' flex '>
                 <div>
              <select name="bloodGroup" defaultValue="" className="select" required>
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
                className="select" required>
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
                className="select" required>
                <option disabled={false}>Select Upazila</option>
                {
                  upozilas.map(u =>
                    <option value={u.name} key={u.id}>{u.name}</option>
                  )

                }
              </select>
            </div>
            <button type='submit' className='btn ml-3'>Search</button>

            </form>
        </div>
    )
}

export default SearchRequest
