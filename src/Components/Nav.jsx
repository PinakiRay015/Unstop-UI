import React from "react";

const Nav = () => {
  return (
    <div className="border-b lg:bg-green-600 md:bg-red-600 sm:bg-blue-600 border-zinc-300 h-[70px] flex items-center px-[20px]">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <h3 className="font-semibold text-[20px] text-[#1C4980] border-r-2 border-zinc-300 h-ful pr-3 py-3">
            Assessment
          </h3>
          <h4 className="font-semibold text-[14px] border-b-2 border-[#0073E6] text-[#0073E6] ml-3 py-6">My Assessment</h4>
        </div>
        <div>
          <img src="Assets/phone.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
