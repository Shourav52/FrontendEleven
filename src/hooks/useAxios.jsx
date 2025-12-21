import axios from "axios";


const axiosInstance = axios.create({
    baseURL : 'https://backend-eleven.vercel.app'
})

const useAxios =()=>{
    return axiosInstance
}

export default useAxios;