import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

function UserNotification() {
    const [sd001, setsd001] = useState([]);
        
    fetch('https://api.thingspeak.com/channels/2071785/fields/2.json?results=10&average=10')
        .then(response => response.json())
        .then(data => {
        setsd001(parseInt(data.feeds[0].field2));
        console.log(sd001);
        })
        .catch(error => console.error(error));

    return (
        <div className="flex bg-neutral-900 min-h-screen pt-6 sm:justify-center sm:pt-0">
        <Sidebar />
        <div className="container mx-auto mt-12">
            <div className="flex-col mb-6">
                <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                    <div className="text-[18px] font-medium text-white truncate mb-5">
                        Notifications 
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white h-80">
                        {sd001 === 100 && <p>SD001 dustbin is full!</p>}
                        {sd001 > 49 && <p>SD001 dustbin is half full!</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default UserNotification;