import React from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";


function Settings() {
    const [selectedOption, setSelectedOption] = useState("account");

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      // Perform any necessary action when an option is clicked
    };
    return (
        <div className="flex bg-gray-800 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[18px] font-medium text-white truncate mb-5">
                            Settings 
                        </div>
                        <div className="flex">
                            <ul className="space-y-2 text-white text-[16px] mt-8">
                                <li
                                className={`${
                                    selectedOption === "account" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("account")}
                                >
                                <a
                                    href="#"
                                    className="block px-4 py-2 "
                                >
                                    Account Settings
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "notification" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("notification")}
                                >
                                <a
                                    href="#"
                                    className="block px-4 py-2 "
                                >
                                    Notification Settings
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "language" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("language")}
                                >
                                <a href="#" className="block px-4 py-2 ">
                                    Language
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "version" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("version")}
                                >
                                <a href="#" className="block px-4 py-2 ">
                                    Version
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "terms" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("terms")}
                                >
                                <a href="#" className="block px-4 py-2 ">
                                    Terms and Conditions
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "privacy" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("privacy")}
                                >
                                <a href="#" className="block px-4 py-2 ">
                                    Privacy Policy
                                </a>
                                </li>
                                <li
                                className={`${
                                    selectedOption === "about" ? "bg-blue-800" : ""
                                } rounded-lg`}
                                onClick={() => handleOptionClick("about")}
                                >
                                    <a href="#" className="block px-4 py-2 ">
                                    About
                                </a>
                                </li>
                            </ul>
                            <div class="h-200 border-l-2 border-gray-500 ml-20"></div>
                                {selectedOption === "account" && (
                                    <ul className="ml-4 py-2 text-white text-[14px] mt-8 ml-8">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-blue-800 rounded-lg">
                                        Name
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-blue-800 rounded-lg">
                                        Password Change
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-blue-800 rounded-lg">
                                        Profile Picture Change
                                        </a>
                                    </li>
                                    </ul>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;