import React from "react";
import { sidebarLinks } from '../../constants'
import { Link } from 'react-router-dom';
import Button from '../../components/Button'

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
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
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm ">
                            {sidebarLinks.map((sidebar) => (
                            <li
                                key={sidebar.id}
                                className={"rounded-sm hover:bg-gray-600  text-white"}
                                >
                                <Link to={sidebar.link} className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src = {sidebar.icon} alt="icon" className="w-5 h-5 text-gray-100 mr-5" />
                                    {sidebar.title}
                                </Link>
                            </li>
                        ))}
                            {/* <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100 ">Dashboard</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Locate bin</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <span className="text-gray-100">Request/Remove bin</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Pickup Schedule</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Scan QR</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Troubleshoot sensors</span>
                                </a>
                            </li>
                            <li className="rounded-sm hover:bg-purple-600">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">Settings</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Profit
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            $ 450k
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate">
                            Total Orders
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            20k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}