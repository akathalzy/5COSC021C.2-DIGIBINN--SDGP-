import React from "react";
import Sidebar from "../../components/Sidebar";

function UserTroubleshoot() {
    return (
        <div className="flex bg-gray-800 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium text-white truncate mb-5">
                                Ultra sonic sensor
                            </div>
                            <div className="mt-1 text-3xl font-semibold text-white">
                                 <br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </div>
                        <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                            <div className="text-[18px] font-medium text-white truncate mb-5">
                                Weight sensor
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
export default UserTroubleshoot;