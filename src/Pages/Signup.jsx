import React, { useContext, useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from '../compunents/MyContainer'
import { Link } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from 'axios';




const Signup = () => {
  const [show, setshow] = useState(false);
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
  console.log(upozilas);


  const { signupWithEmailAndPassword, setUser, user, handleGoogleSignin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl;
    const file = photoUrl.files[0];
    const confirmPass = e.target.confirmPassword.value;
    const bloodGroup = e.target.bloodGroup.value;


    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    if (pass !== confirmPass) {
      return toast.error("Password and Confirm Password do not match!");
    }
    if (pass.length < 6) {
      return toast.error(' Password must be at least 6 characters!');
    }
    if (!uppercase.test(pass)) {
      return toast.error("Password must contain at least 1 Uppercase letter!");
    }
    if (!lowercase.test(pass)) {
      return toast.error("Password must contain at least 1 Lowercase letter!");
    }

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=05d68a433db9b07b9aa2eea79bf8a95d`, { image: file }, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    const mainPhotoUrl = res.data.data.display_url;

    const formData = {
      email,
      pass,
      confirmPass,
      name,
      mainPhotoUrl,
      bloodGroup,
      district,
      upozila,

    }
    console.log(formData);


    if (res.data.success == true) {
      signupWithEmailAndPassword(email, pass)
        .then((userCredential) => {

          updateProfile(auth.currentUser, {
            displayName: name, photoURL: mainPhotoUrl
          }).then(() => {
            setUser(userCredential.user)
            axios.post('http://localhost:8000/users', formData)
              .then(res => {
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });


            toast.success("Signup Successful!");
            navigate("/");
          }).catch((error) => {
            toast.error(error.message);
          });
        })
        .catch(err => {
          toast.error(err.message);
        })
    }

  }
  console.log(user);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <MyContainer className={"flex justify-center items-center gap-20 flex-col md:flex-row"}>
        <div>
          <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-4xl'>Create Your Account</h1>
          <p className='text-gray-600'>Type your Email and Password here... </p>
        </div>
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100
 w-auto h-auto text-gray-600 font-semibold shadow-md p-8 rounded-lg ">
          <h1 className='bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold text-center text-2xl mb-4'>Signup</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-1' action="">
            <div>
              <label htmlFor="">Full Name</label>
              <input name='name' className='border-white border   rounded-[8px] p-2 w-full' type="Text" placeholder='Full Name' />
            </div>
            <div>
              <label htmlFor="">Photo Url </label>
              <input name='photoUrl' className='border-white border   rounded-[8px] p-2 w-full' type="file" placeholder='photoUrl' />
            </div>

            <div>
              <label htmlFor="">Blood Group</label>
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
              <label htmlFor="">District</label>
              <select name="district" defaultValue=""
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
              <label htmlFor="">Upozila</label>
              <select name="upozila" defaultValue=""
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


            <div >
              <label htmlFor="">Email</label>
              <input name="email" className='border-white border rounded-[8px] p-2 w-full' type="Email" placeholder='...@gmail.com' />

            </div>
            <div className='relative'>
              <label htmlFor="">Password</label>
              <input name='password' type={show ? "text" : "password"} className='border-white border  rounded-[8px] p-2 w-full'
                placeholder='Enter Password' />
              <span onClick={() => setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <div className='relative'>
              <label htmlFor="">Confirm  Password</label>
              <input name='confirmPassword' type={show ? "text" : "password"} className='border-white border  rounded-[8px] p-2 w-full'
                placeholder='Confirm Password' />
              <span onClick={() => setshow(!show)}
                className='absolute right-[8px] top-[36px] cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <button className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold
              hover:from-blue-600 hover:to-indigo-700 transition mt-5 '>
              Register
            </button>

            <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-3]400'>or</span>
              <div className='h-px w-16 bg-gray-400'></div>
            </div>

            <p className='text-sm mt-2 '>
              Already you have an account?<Link className='text-blue-400 ml-2 underline hover:text-blue-700' to={"/login"} >Login</Link>
            </p>

          </form>

        </div>

      </MyContainer>
    </div>
  )
}

export default Signup;
