import React from "react";
import Sidebar from "../../components/Sidebar";

function UserDashboard() {
        function Iframe(props) {
            return (
              <iframe src={props.src} width={props.width} height={props.height} title={props.title} />
            );
          }
          
    return (
        <div className="flex bg-gray-800">
            <Sidebar / >
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[16px] font-medium text-gray-500 truncate mb-5">
                            Your smart dustbin's summary 
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-white">
                            <Iframe src="https://thingspeak.com/channels/1998660/widgets/613144" width="450" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                        </div>
                        <div>
                            <Iframe src="https://thingspeak.com/channels/1998660/widgets/613149" width="450" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
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
    )
};
export default UserDashboard;