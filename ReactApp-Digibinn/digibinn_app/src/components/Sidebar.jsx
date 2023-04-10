import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { sidebarLinks } from '../constants/index';
import { getAuth, signOut } from "firebase/auth";

function Sidebar() {

    const navigate = useNavigate();

    const handleSignout =  (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
        alert('Sign-out successful')
        navigate('/Login')
        }).catch((error) => {
        alert('Error')
        });
    }

    return (
        <div className="flex flex-col p-6 bg-sidebarcolor drop-shadow-3xl w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h3 className="text-xl font-inter font-medium text-white">
                            <Link to='/'>
                                Digibinn.
                            </Link>
                            </h3>
                            
              
                    </div>
                    <div className="font-inter font-medium text-subheading text-[13px] text-location">
                            CMB, SriLanka 
                    </div>
                    
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-1 pl-2 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="font-inter font-regular pt-8 pb-4 space-y-1 text-sm ">
                            {sidebarLinks.map((sidebar) => (
                            <li
                                key={sidebar.id}
                                className={"rounded-lg hover:bg-slate-900 text-subheading active:bg-blue-800"}
                                >
                                <Link to={sidebar.link} className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src = {sidebar.icon} alt="icon" className="w-5 h-5  mr-5" />
                                    {sidebar.title}
                                </Link>
                            </li>
                        ))}
                        </ul>
                        
                        <div className=" text-white absolute bottom-2 font-inter ml-4 ">
                                
                        <button 
                            type='button' 
                            className={'transition ease-in-out py-2 px-8 bg-blue-500 hover:bg-blue-700 font-inter font-medium text-[12px] text-white outline-none rounded ${styles} mt-8 mb-8'}
                            onClick={handleSignout}>
                            Logout</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Sidebar;
