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
                            <div className="mt-1 text-3xl font-semibold text-white ml-14">
                                 <Iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2071785/charts/1?bgcolor=%23000000&color=%23d62020&dynamic=true&results=60&title=Weight&type=line&xaxis=Time&yaxis=Weight"></Iframe>
                            </div>
                        </div>
                            
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium text-white truncate mb-5">
                                Weight sensor
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white ml-14">
                                <Iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2071785/charts/2?bgcolor=%23000000&color=%23d62020&dynamic=true&results=60&title=Filled+level&type=line&xaxis=Time&yaxis=Filled+level"></Iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserTroubleshoot;