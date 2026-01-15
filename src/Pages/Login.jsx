import React, { useContext, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import googleimg from '../assets/images.png'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import useAxios from '../hooks/useAxios';


const Login = () => {

  const [show, setshow] = useState(false);
  const axiosInstance = useAxios();
  const { setUser, handleGoogleSignin } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  console.log(location);


  const loginUser = async (email, password, role) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 🔹 Save demo user to DB
      await axiosInstance.post('/users', {
        name: role === 'admin' ? 'Demo Admin' : 'Demo Donor',
        email: user.email,
        role: role,
      });

      toast.success(`Demo ${role} login successful`);
      navigate(location.state ? location.state : '/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Log in Successfully!");
        navigate(location.state ? location.state : '/')

      })
      .catch((error) => {
        toast.error(error.message)

      });

  };
  const googleSignin = async () => {
    try {
      const result = await handleGoogleSignin();
      const user = result.user;

      setUser(user);

      await axiosInstance.post('/users', {
        name: user.displayName,
        email: user.email,
        role: 'donor'
      });

      toast.success("Google Login Successful!");
      navigate(location.state ? location.state : '/');
    } catch (err) {
      console.error(err.code);
      toast.error("Google Login Failed!");
    }
  };

  const handleForget = () => {
    navigate(`/forget/${email}`)
  }

  const demoAdminLogin = () => {
    loginUser("demo.admin@example.com", "Admin123", "admin");
  };

  const demoDonorLogin = () => {
    loginUser("ruponsaha1218@gmail.com", "123456Bb", "donor");
  };


  return (
    <div className="min-h-screen flex items-center justify-center ">
      <MyContainer className={"flex justify-center items-center gap-20 flex-col md:flex-row"}>
        <div>
          <h1 className='bg-gradient-to-r from-red-500 to-indigo-400 bg-clip-text text-transparent font-semibold text-4xl'>Login Your Account</h1>
          <p className='text-gray-700'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-br from-red-100 to-red-200
 w-auto h-auto text-black font-semibold shadow-md p-8 rounded-lg">
          <form onSubmit={handleSubmit}
            className='flex flex-col gap-1' action="">
            <h1 className='bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-4xl text-center text-2xl mb-4'>Login</h1>
            <div>
              <label htmlFor="">Email</label>
              <input
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                className='border-white border rounded-[8px] p-2 w-full' type="email" placeholder='Enter Your Email' />
            </div>
            <div className='relative'>
              <label htmlFor="">Password</label>
              <input name='password' className='border-white border  rounded-[8px] p-2 w-full' type={show ? "text" : "password"} placeholder='Enter Password' />
              <span onClick={() => setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div className='text-center cursor-pointer'>
              <button onClick={handleForget}
                type='button'
                className='text-sm text-blue-400 cursor-pointer hover:underline hover:text-blue-700'>Forget Password?
              </button>
            </div>

            <button type='submit' className='bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold 
           hover:bg-blue-600 transition   mt-3 '>
              Login
            </button>
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={demoDonorLogin}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Demo Donor Login
              </button>

              <button
                type="button"
                onClick={demoAdminLogin}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Demo Admin Login
              </button>
            </div>


            <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-300'>or</span>
              <div className='h-px w-16 bg-gray-400'></div>
            </div>
            <button onClick={googleSignin}
              type='button'
              className='flex  bg-white text-black justify-center btn'>
              <img className='w-5' src={googleimg} alt="" />
              Continue With Google
            </button>
            <p className='text-sm  mt-3 text-center'>
              Don't have an account? <Link className='text-blue-400 hover:underline hover:text-blue-700' to={"/signup"} >Register</Link>
            </p>

          </form>



        </div>

      </MyContainer>
    </div>
  )
}

export default Login
