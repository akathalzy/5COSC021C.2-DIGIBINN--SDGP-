import React from "react";
import Sidebar from "../../components/Sidebar";

function UserLocateBin() {
    function Iframe(props) {
        return (
          <iframe src={props.src} width={props.width} height={props.height} title={props.title} />
        );
      }
      
    return (
        <div className="flex bg-gray-800 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[18px] font-medium text-white truncate mb-5">
                            Bin locations 
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-white items-center">
                             <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9606310513227!2d79.85349561475793!3d6.895312595017588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdee494e9d3%3A0x629c2df0a6d82f99!2sGP%20Square!5e0!3m2!1sen!2slk!4v1678770058916!5m2!1sen!2slk" width="1165" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserLocateBin;