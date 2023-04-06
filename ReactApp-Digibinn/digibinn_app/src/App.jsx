import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './scenes/About/About'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login';
import Register from './scenes/Register/Register';
import UserDashboard from './scenes/User Dashboard/UserDashboard';
import UserLocateBin from './scenes/User Dashboard/UserLocateBin';
import UserRemoveRequestBin  from './scenes/User Dashboard/UserRemoveRequestBin ';
import UserPickupSchedule from './scenes/User Dashboard/UserPickupSchedule';
import UserScanQR from './scenes/User Dashboard/UserScanQR';
import UserTroubleshoot from './scenes/User Dashboard/UserTroubleshoot';
import UserSettings from './scenes/User Dashboard/UserSettings';
import CollectorDashboard from './scenes/Collector Dashboard/CollectorDashboard';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userlocatebin" element={<UserLocateBin />} />
        <Route path="/userrequestremovebin" element={<UserRemoveRequestBin  />} />
        <Route path="/userpickupschedule" element={<UserPickupSchedule />} />
        <Route path="/userscanQR" element={<UserScanQR />} />
        <Route path="/usertroubleshoot" element={<UserTroubleshoot />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/collectordashboard" element={<CollectorDashboard />} />
      </Routes>
    </div>
    </Router>
  )
}


export default App