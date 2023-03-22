import React from "react";
import Sidebar from "../../components/Sidebar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function UserDashboard() {
        function Iframe(props) {
            return (
              <iframe src={props.src} width={props.width} height={props.height} title={props.title} />
            );
          }
          const value = 0.66;
          
    return (
        <div className="flex bg-neutral-900">
            <Sidebar / >
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <h1 className="text-white mb-8 text-3xl font-poppins font-semibold">Smart Dustbin Dashboard</h1>
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10 ">
                        <div className="text-[18px] font-medium font-poppins text-white truncate mb-5">
                            Your smart dustbin's summary 
                        </div>
                        <div className="grid grid-cols-3 gap-8 mb-12 ml-12 items-center">
                            <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5" 
                                 style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={value} 
                                    maxValue={1} 
                                    text={`${value * 100}%` } 
                                     />
                                <p className="text-white text-[18px] font-poppins ml-12 mt-3">SD001</p>
                            </div> 
                            {/* <Iframe width="450" height="250" style="border: 1px solid #080000;" src="https://thingspeak.com/channels/1998660/widgets/613144"></Iframe>
                            </div>
                            <div>
                            <Iframe width="450" height="250" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1998660/widgets/613149"></Iframe>
                           */} 
                           <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5" 
                                style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={0} 
                                    maxValue={1} 
                                    text={`${0 * 100}%`
                                    } 
                                />
                                <p className="text-white text-[18px] font-poppins ml-12 mt-3">SD002</p>
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white mt-10 ml-5" 
                                style={{ width: 150, height: 150 }}>
                                <CircularProgressbar 
                                    value={0.75} 
                                    maxValue={1} 
                                    text={`${0.75 * 100}%`
                                    } 
                                />
                                <p className="text-white text-[18px] font-poppins ml-12 mt-3">SD003</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium font-poppins text-white truncate mb-5">
                                Locations
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9606310513227!2d79.85349561475793!3d6.895312595017588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdee494e9d3%3A0x629c2df0a6d82f99!2sGP%20Square!5e0!3m2!1sen!2slk!4v1678770058916!5m2!1sen!2slk" width="560" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium font-poppins text-white truncate mb-5">
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
    )
};
export default UserDashboard;