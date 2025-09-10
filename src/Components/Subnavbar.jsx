import React from "react";

const Subnavbar = () => {
  return (
    <div className="bg-[#12263f] text-white mt-[38px] mr-[-24px] ml-[-21px] px-2 py-0 shadow-md h-auto min-h-[111px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-4">
        {/* Date Input */}
        <input
          placeholder="08/05/2025 - 10/05/2025"
          className="w-full sm:w-[300px] px-3 py-2 text-sm cursor-pointer rounded-md border border-gray-300 font-semibold text-black focus:outline-none"
        />

        {/* Dashboard Title */}
        <div className="flex items-center justify-between w-full sm:w-auto pt-2 sm:pt-0 pr-0 sm:pr-[50px]">
          <p className="text-2xl sm:text-3xl font-semibold">Dashboard</p>
          <i className="bi bi-question-square-fill text-xl sm:text-2xl cursor-pointer pl-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Subnavbar;
