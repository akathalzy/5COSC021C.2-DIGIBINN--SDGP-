import React from "react";
import Sidebar from "../../components/Sidebar";

function UserTroubleshoot() {
    function Iframe(props) {
        return (
          <iframe src={props.src} width={props.width} height={props.height} title={props.title} />
        );
      }

    return (
        <div className="flex bg-neutral-900 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium text-white truncate mb-5">
                                Ultra sonic sensor
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                                 <Iframe width="450" height="250" style="border: 1px solid #080000;" src="https://thingspeak.com/channels/1998660/widgets/613144"></Iframe>
                            </div>
                        </div>
                            
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium text-white truncate mb-5">
                                Weight sensor
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                                <Iframe width="450" height="250" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/1998660/widgets/613149"></Iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserTroubleshoot;