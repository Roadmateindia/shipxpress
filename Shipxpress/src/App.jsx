import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Pages/Dashboard';
import Exception from './Pages/Exception';
import Navbar from './Components/Navbar';
import Subnavbar from './Components/Subnavbar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="container-fluid p-0">
        <div className="row g-0">
          
          {/* Sidebar */}
          <div
            className={`p-0 m-0 sidebar-wrapper`}
            style={{
              width: isSidebarOpen ? '200px' : '60px',
              transition: 'width 0.3s ease'
            }}
          >
            <Sidebar isOpen={isSidebarOpen} />
          </div>

          {/* Main Content */}
          <div
            className="p-0 m-0"
            style={{
              width: `calc(100% - ${isSidebarOpen ? '200px' : '60px'})`,
              transition: 'width 0.3s ease'
            }}
          >
            <Navbar toggleSidebar={toggleSidebar} />
            <Subnavbar />
            <div className="p-3">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/exception" element={<Exception />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
