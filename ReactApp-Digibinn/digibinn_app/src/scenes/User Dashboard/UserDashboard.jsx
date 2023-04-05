import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Sidebar from "../../components/Sidebar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';


function UserDashboard() {
    const [sd001, setsd001] = useState([]);
        
    fetch('https://api.thingspeak.com/channels/2071785/fields/2.json?results=10&average=10')
        .then(response => response.json())
        .then(data => {
        setsd001(parseInt(data.feeds[0].field2));
        console.log(sd001);
        })
        .catch(error => console.error(error));
  
        
                     
    return (
        <div className="flex bg-darkbg">
            <Sidebar / >
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                <div className="text-[30px] font-inter font-medium text-white">
                            Welcome to Digibinn!
                        </div>
                    <h1 className="text-subheading mb-8 text-[15px] font-inter font-regular">Good to see you again!</h1>
                    <div className="w-full px-4 py-5 bg-sidebarcolor rounded-lg shadow mb-10 items-center ">
                        
                        <div className="text-[15px] font-regular font-inter text-white truncate mb-5">
                            Your smart dustbin's summary 
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-12 items-stretch ml-9 ">
                            <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5 " 
                                 style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={sd001} 
                                    maxValue={100} 
                                    text={`${sd001}%` } 
                                     />
                                <p className="text-white text-[18px] font-inter font-medium ml-12 mt-3">SD001</p>
                            </div> 
                           <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5" 
                                style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={0} 
                                    maxValue={100} 
                                    text={`${0 * 100}%`
                                    } 
                                />
                                <p className="text-white text-[18px] font-inter font-medium ml-12 mt-3">SD002</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5" 
                                style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={0} 
                                    maxValue={100} 
                                    text={`${0 * 100}%`
                                    } 
                                />
                                <p className="text-white text-[18px] font-inter font-medium ml-12 mt-3">SD003</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-full px-4 py-5 bg-sidebarcolor rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium font-inter text-white truncate mb-5">
                                Locations
                            </div>
                            <div>
                                <div className="grid grid-cols-2 gap-8 content-center mt-1 text-2xl font-inter text-white ">
                                    <div className="ml-6">
                                    3
                                    <p className="text-stone-500 font-inter text-[12px]">Active Locations</p> 
                                    </div>
                                    <div className="ml-16">
                                    1 
                                    <p className="text-stone-500 font-inter text-[12px]">Locations pending approval</p> 
                                    </div>
                                </div>
                                <Link to = '/userlocatebin'>
                                    <button type='button' className={'align-right transition ease-in-out delay-150 py-1 px-4 font-inter text-[12px] text-blue-700 outline-none rounded-full ${styles} mt-24 mb-2 ml-3 '}>
                                        See all
                                    </button> 
                                </Link>
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-sidebarcolor rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium font-inter text-white truncate mb-5">
                                Sensors
                            </div>
                            <div className="grid grid-rows-2 gap-2 content-center mt-1 text-2xl font-inter text-white ">
                                <div className="ml-6">
                                    <p className="text-white font-inter text-[14px]">Ultra sonic sensor</p> 
                                    <p className="text-stone-500 font-inter text-[12px] ml-4">Get data</p> 
                                </div>
                                <div className="ml-6">
                                    <p className="text-white font-inter text-[14px]">Weight sensor</p> 
                                    <p className="text-stone-500 font-inter text-[12px] ml-4">Get data</p>  
                                </div>
                                <div className="ml-6">
                                    <p className="text-white font-inter text-[14px]">GPS sensor</p> 
                                    <p className="text-stone-500 font-inter text-[12px] ml-4">Get data</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserDashboard;