import React from "react";
import Sidebar from "../../components/Sidebar";

function UserPickupSchedule() {
    return (
        <div className="flex bg-gray-800 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[18px] font-medium text-white truncate mb-5">
                            Bin pickup schedule 
                        </div>
                        <div className="mt-1 text-white">
                            <table className="border-separate border border-slate-500 w-full h-auto text-center">
                                <thead>
                                    <tr>
                                    <th class="border border-slate-600 ...">Time</th>
                                    <th class="border border-slate-600 ...">Area</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="border border-slate-700 ...">7.30</td>
                                    <td class="border border-slate-700 ...">Colombo 2</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-700 ...">7.45</td>
                                    <td class="border border-slate-700 ...">Colombo 3</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-700 ...">8.30</td>
                                    <td class="border border-slate-700 ...">Colombo 6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserPickupSchedule;