import React from "react";
import Sidebar from "../../components/Sidebar";

function UserPickupSchedule() {
    return (
        <div className="flex bg-gray-800 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[16px] font-medium text-gray-500 truncate mb-5">
                            Bin pickup schedule 
                        </div>
                        <div className="mt-1 text-white">
                            <table className="border-separate border border-slate-500 ...">
                                <thead>
                                    <tr>
                                    <th class="border border-slate-600 ...">State</th>
                                    <th class="border border-slate-600 ...">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="border border-slate-700 ...">Indiana</td>
                                    <td class="border border-slate-700 ...">Indianapolis</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-700 ...">Ohio</td>
                                    <td class="border border-slate-700 ...">Columbus</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-700 ...">Michigan</td>
                                    <td class="border border-slate-700 ...">Detroit</td>
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