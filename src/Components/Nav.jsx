import React from "react";

const Nav = () => {
  return (
    <div className="border-b sticky top-0 lg:bg-green-300 md:bg-red-300 sm:bg-blue-300 border-zinc-300 h-[70px] flex items-center px-[20px]">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <div className="flex gap-2">
            <img className="md:hidden" src="Assets/menu.svg" alt="" />
          <h3 className="font-semibold text-[20px] text-[#1C4980] border-r-2 border-zinc-300 h-ful pr-3 py-3">
            Assessment
          </h3>
          </div>
          <h4 className="hidden md:block font-semibold text-[14px] border-b-2 border-[#0073E6] text-[#0073E6] ml-3 py-6">My Assessment</h4>
        </div>
        <div>
          <img src="Assets/phone.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
