import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1060&t=st=1677518435~exp=1677519035~hmac=375363c01b2490477a13887d7d782b02894615bcf8737994d15c95db408563ed')] bg-cover ">
      <Navbar />
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl mt-[100px] mb-[300px]">
              <h1 className="text-poppins text-3xl font-bold text-center text-purple-700">
                Sign in
              </h1>
                <form className="mt-6">
                  <div className="mb-2">
                    <label
                      for="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="password"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                      <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <a 
                      href='#'
                      className="text-xs text-purple-600 hover:underline"
                    >
                      Forget Password?
                    </a>
                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                  </div>
              </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
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