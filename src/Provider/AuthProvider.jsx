import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
 

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [roleLoading, setRoleLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [userStatus, setUserStatus] =useState('')
  const signupWithEmailAndPassword = (email, pass) => {
    console.log(email, pass);

    return createUserWithEmailAndPassword(auth, email, pass)
  }



  const authData = {
    signupWithEmailAndPassword,
    setUser,
    user,
    loading,
    roleLoading,
    role,
    userStatus
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

    if (!currentUser) {
        setRole('');
        setUserStatus('');
        setRoleLoading(false);
      }
    })
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    if (!user) return;
    axios.get(`https://backend-eleven.vercel.app/users/role/${user?.email}`)
      .then(res => {
        setRole(res.data.role)
        setUserStatus(res.data.status)
        setRoleLoading(false)
      })
      .catch(err => {
        console.error(err);
        setRole('');
        setUserStatus('');
      })
      .finally(() => setRoleLoading(false));

  }, [user])


  console.log(role)


  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider;
