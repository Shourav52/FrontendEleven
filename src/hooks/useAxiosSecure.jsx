import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL:'http://localhost:8000'

})

const useAxiosSecure =()=>{
    const {user} = useContext(AuthContext);
    useEffect(()=>{
       const reqTnterceptor = axiosSecure.interceptors.request.use(config=>{
        config.headers.Authorization =`Bearer ${user?.accessToken}`
        return config;
       })

       const resTnterceptor = axiosSecure.interceptors.response.use((response)=>{
        return response
       },(error)=>{
        console.log(error);
        return Promise.reject(error);
       })

       return ()=>{
        axiosSecure.interceptors.request.eject(reqTnterceptor);
        axiosSecure.interceptors.response.eject(resTnterceptor);
       }
    },[user]);
    return axiosSecure
}

export default useAxiosSecure;