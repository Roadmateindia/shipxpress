import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div
      className={`topbar fixed top-0 right-0 h-[67px] bg-white shadow px-2 py-3 z-50 transition-all duration-300`}
      style={{
        left: isOpen ? "260px" : "80px",
      }}
    >
      <nav className="flex items-center justify-between flex-wrap md:flex-nowrap gap-3">
        {/* LEFT GROUP → Toggle button */}
        <div className="flex items-center">
          <i
            className={`bi bi-list text-3xl sm:text-4xl ml-2 cursor-pointer transition-colors duration-200 ${
              isOpen ? "text-black" : "text-gray-700"
            }`}
            onClick={toggleSidebar}
          ></i>
        </div>

        {/* RIGHT GROUP */}
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          {/* Shipment + Search */}
          <div className="shipment-box flex border rounded-md overflow-hidden shadow-sm w-full md:w-auto max-w-full sm:max-w-[400px]">
            <button className="px-2 sm:px-3 py-2 bg-gray-100 flex items-center gap-1 text-sm hover:bg-gray-200 whitespace-nowrap">
              Shipment <i className="bi bi-caret-down-fill"></i>
            </button>

            {/* Search input */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search AWB Number(s)"
                className="pl-2 pr-10 py-2 w-full text-sm text-black placeholder-gray-400 rounded-r-md outline-none"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#12263f] w-8 h-9 flex items-center justify-center rounded-r-md">
                <i className="bi bi-search text-white"></i>
              </div>
            </div>
          </div>

          {/* Recharge + Balance */}
          <div className="flex border rounded-md overflow-hidden shadow-sm w-full sm:w-auto">
            <button className="flex items-center gap-1 bg-[#12263f] text-white px-3 py-2 hover:bg-[#12263f] w-full sm:w-auto justify-center">
              <i className="bi bi-lightning-charge-fill"></i> Recharge
            </button>
            <div className="px-3 py-2 bg-gray-50 text-sm flex items-center font-medium">
              Balance: <span className="ml-1 text-black">₹2964.3</span>
            </div>
          </div>

          {/* Grid + Profile */}
          <div className="flex items-center gap-3">
            <i className="bi bi-grid-3x3-gap-fill text-2xl sm:text-3xl cursor-pointer"></i>
            <i className="bi bi-person-circle text-xl sm:text-2xl cursor-pointer"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
