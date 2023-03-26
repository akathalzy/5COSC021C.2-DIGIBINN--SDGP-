import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/NavbarBlack'
import { Link, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { getDatabase,onValue, ref } from 'firebase/database';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    const db = getDatabase();
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful");
      const user = userCredential.user;
      const userId = user.uid;
      const userRef = ref(db, `users/` + userId)
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData.userType === "smartDustbinUser") {
          navigate("/UserDashboard");
        } else if (userData.userType === "trashCollector") {
          navigate("/CollectorDashboard");
        }
      });
      console.log(user);
    })
    .catch ((error) => {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found.');
          break;
        case 'auth/wrong-password':
          alert('Wrong password.');
          break;
        default:
          alert('Error login in');
      }
    })
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover ">
      <Navbar />
            <div className="w-full p-6 m-auto bg-white rounded-3xl drop-shadow-3xl lg:max-w-2xl mt-[100px] mb-[300px]">
              <h1 className="font-poppins font-semibold text-[42px] text-black text-center">
                Sign in
              </h1>
                <form onSubmit={handleLogin} className="mt-6">
                  <div className="mb-2">
                    <label
                      for="email"
                      className="block text-sm font-poppins font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleEmailChange}
                      className="block w-full px-4 py-2 mt-2 text-grey-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="password"
                      className="font-poppins block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                      <input
                        type="password"
                        onChange={handlePasswordChange}
                        className="block w-full px-4 py-2 mt-2 text-grey-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <a 
                      href='#'
                      className="font-poppins text-xs text-purple-600 hover:underline"
                    >
                      Forget Password?
                    </a>
                  <div className="mt-6">
                    <button className="font-poppins w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                  </div>
              </form>

                <p className="font-poppins mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to='/register'
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
      </div>
      <Footer />
    </div>
  )
}

export default Login