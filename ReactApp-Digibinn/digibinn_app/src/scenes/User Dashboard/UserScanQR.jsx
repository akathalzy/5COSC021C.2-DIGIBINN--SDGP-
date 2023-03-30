import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { QrReader } from 'react-qr-reader';


function UserScanQR() {
    const [result, setResult] = useState('');
    const [showScanner, setShowScanner] = useState(false);

    const handleScan = (data) => {
        if (data) {
        setResult(data);
        }
    }

    const handleError = (err) => {
        console.error(err);
    }

    const handleClick = () => {
        setShowScanner(true);
    }

    return (
        <div className="flex bg-neutral-900 min-h-screen pt-6 sm:justify-center sm:pt-0">
            <Sidebar />
            <div className="container mx-auto mt-12">
                <div className="flex-col mb-6">
                    <div className="w-full px-4 py-5 bg-black rounded-lg shadow mb-10">
                        <div className="text-[18px] font-medium text-white truncate mb-5">
                            Scan QR 
                        </div>
                        <div className="flex-row mt-8 text-md font-semibold text-white">
                             Use our mobile app to scan the QR code.
                        </div>
                        <div>
                            <>
                            <button 
                            type='button' 
                            className={'transition ease-in-out py-2 px-8 bg-blue-500 hover:bg-blue-700 font-poppins font-medium text-[12px] text-white outline-none rounded ${styles} mt-8 mb-8'}
                            onClick={handleClick}>
                            Scan QR</button>
                            {showScanner && (
                                <div>
                                <QrReader
                                    delay={300}
                                    onError={handleError}
                                    onScan={handleScan}
                                    style={{ width: '100%' }}
                                />
                                <p>{result}</p>
                                </div>
                            )}
                            </> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserScanQR;