import React, {useState} from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {Link} from 'react-router-dom';
import {db} from '../../firebase'


function Register() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("smartDustbinUser");
    const [termsAgreed, setTermsAgreed] = useState(false);
  
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
    
        if (!termsAgreed) {
          setError('You must accept the terms and conditions');
          return;
        }
    
        // Register user with Firebase Authentication
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Send user registration data to Firebase Realtime Database
            const userData = {
            name: name,
            email: email,
            password: password,
            number: number,
            userType: userType,
            };
            firebase.database().ref('users/' + userCredential.user.uid).set(userData)
            .then(() => {
                console.log("Registration successful");
            })
            .catch((error) => {
                console.error("Error writing user data to Firebase Realtime Database: ", error);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Registration error (${errorCode}): ${errorMessage}`);
        });
      };


  return (
        <div className='bg-rose-700'>
          <Navbar />
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
            
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-3xl rounded-lg mt-[100px] mb-[300px]">
                  <h1 className="text-poppins text-3xl font-bold text-center text-purple-700">
                      Create an account
                  </h1>
                    <form onSubmit={handleSubmit} className="mt-6">
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
                                        required
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
                                        required
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
                                        required
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
                                required
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
                                required
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
                                required
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
    );
}

export default Register