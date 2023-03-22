import React from "react";
import { sidebarLinks } from '../constants/index';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="flex flex-col p-6 bg-neutral-200 drop-shadow-3xl w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h3 className="text-xl font-bold text-black">
                            <Link to='/'>
                                Digibinn.
                            </Link>
                            </h3>
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
                        <ul className="font-poppins pt-8 pb-4 space-y-1 text-sm ">
                            {sidebarLinks.map((sidebar) => (
                            <li
                                key={sidebar.id}
                                className={"rounded-lg hover:bg-blue-600 text-black active:bg-blue-800"}
                                >
                                <Link to={sidebar.link} className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src = {sidebar.icon} alt="icon" className="w-5 h-5  mr-5" />
                                    {sidebar.title}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default Sidebar;
