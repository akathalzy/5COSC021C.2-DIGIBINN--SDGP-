import React from "react";
import Sidebar from "../../components/Sidebar";

function CollectorDashboard() {
    return (
        <div className="flex bg-darkbg">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                <div className="text-[30px] font-inter font-medium text-white">
                            Welcome to Collector Dashboard!
                        </div>
                    <h1 className="text-subheading mb-8 text-[15px] font-inter font-regular">Good to see you again!</h1>
                    <div className="w-full px-4 py-5 bg-sidebarcolor rounded-lg shadow mb-10 items-center ">
                        
                        <div className="text-[15px] font-regular font-inter text-white truncate mb-5">
                            Collectors Portal Summary
                        </div>
                        <div className="grid grid-cols-3 gap-0 content-center mt-1 text-8xl font-inter text-white ">
                                    <div className="ml-6">
                                    -
                                    <p className="text-stone-500 font-inter text-[12px]">Total Pickups Completed</p> 
                                    </div>
                                    <div className="ml-16">
                                    -
                                    <p className="text-stone-500 font-inter text-[12px]">Dustbins currently active</p> 
                                    </div>
                                </div>
                                    
                        <div className="mt-1 text-3xl font-semibold text-white">
                             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  
                              
                        </div>
                    </div>
                       <br></br>
                    </div>
                </div>
                
            </div>
            
      
    );
}
export default CollectorDashboard