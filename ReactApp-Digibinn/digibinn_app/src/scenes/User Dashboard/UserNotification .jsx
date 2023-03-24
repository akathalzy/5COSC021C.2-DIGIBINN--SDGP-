import React from "react";
import Sidebar from "../../components/Sidebar";

function UserNotification() {
    return (
        <div className="flex bg-neutral-900 min-h-screen pt-6 sm:justify-center sm:pt-0">
        <Sidebar />
        <div className="container mx-auto mt-12">
            <div className="flex-col mb-6">
                <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                    <div className="text-[18px] font-medium text-white truncate mb-5">
                        Notifications 
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default UserNotification;