import React from "react";
import { sidebarLinks } from '../../constants'
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="flex bg-gray-800">
            <div className="flex flex-col p-3 bg-black shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h3 className="text-xl font-bold text-white">Digibinn.</h3>
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
                            className="w-full py-2 pl-2 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-8 pb-4 space-y-1 text-sm ">
                            {sidebarLinks.map((sidebar) => (
                            <li
                                key={sidebar.id}
                                className={"rounded-sm hover:bg-blue-600 text-white"}
                                >
                                <Link to={sidebar.link} className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src = {sidebar.icon} alt="icon" className="w-5 h-5 text-gray-100 mr-5 bg-white" />
                                    {sidebar.title}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[16px] font-medium text-gray-500 truncate mb-5">
                            Your smart dustbin's summary 
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-white">
                             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-sm font-medium text-gray-500 truncate mb-5">
                                Locations
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                                 <br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-sm font-medium text-gray-500 truncate mb-5">
                                Sensors
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                                 <br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}