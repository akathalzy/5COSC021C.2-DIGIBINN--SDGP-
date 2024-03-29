import React, {useState} from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import { getDatabase, set, ref } from 'firebase/database';


const Register = (e) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("smartDustbinUser");
    const [termsAgreed, setTermsAgreed] = useState(false);
    const navigate = useNavigate();
  
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleNumberChange = (e) => {
        setNumber(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };
    
      const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
      };
    
      const handleTermsAgreedChange = (e) => {
        setTermsAgreed(e.target.checked);
      };
    
      const handleSubmit =  (e) => {
        e.preventDefault();

            const db = getDatabase();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const userId = user.uid;
                    const registerUser = {
                        name: name,  
                        number: number, 
                        userType: userType
                    }
            // Signed in
                set(ref(db, 'users/' + userId), registerUser),
                console.log(user);
                alert("Registration successful");
                navigate("/login")
                })
                .catch((error) => {
                    console.error("Registration error: ", error);
                    alert("Registration unsuccessful");
              });
        };
      


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover ">
          <Navbar />
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
            
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-3xl rounded-3xl shadow-3xl mt-[100px] mb-[300px]">
                  <h1 className="font-poppins font-semibold text-[42px] text-black text-center">
                      Create an account
                  </h1>
                    <form onSubmit={handleSubmit} className="mt-6 font-poppins">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="mt-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Name
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleNameChange}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Email
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Confirm Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label 
                                    htmlFor="number"
                                    className="block text-sm font-medium text-gray-700 undefined" >
                                Phone Number
                                </label>
                                <input
                                id="number"
                                type="tel"
                                value={number}
                                onChange={handleNumberChange}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-4">
                                <label 
                                    htmlFor="userType"
                                    className="block text-sm font-medium text-gray-700 undefined">
                                Select User Type
                                </label>
                                <select
                                id="userType"
                                value={userType}
                                onChange={handleUserTypeChange}
                                className="shadow appearance-none border rounded w-full px-4 py-2 mt-2 text-gray-700 text-[14px] leading-tight focus:outline-none focus:shadow-outline"
                                >
                                <option value="smartDustbinUser">Smart Dustbin User</option>
                                <option value="trashCollector">Trash Collector</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="termsAndConditions"
                                checked={termsAgreed}
                                onChange={handleTermsAgreedChange}
                                />
                                <label className="text-sm text-gray-700" htmlFor="termsAndConditions">
                                I agree to the{' '}
                                <a href="#" 
                                    className="text-blue-500">
                                    Terms and Conditions
                                </a>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <button 
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-8 text-xs font-light text-center text-gray-700">
                         Already have an account?{" "}
                        <span>
                            <Link to='/login'
                            className="font-medium text-purple-600 hover:underline"
                            >
                            Login
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default Register