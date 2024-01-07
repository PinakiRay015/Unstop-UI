import React from "react";

const Nav = () => {
  return (
    <div className="border-b border-zinc-300 h-[70px] flex items-center">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <h3 className="font-semibold text-[20px] text-[#1C4980] border-r-2 border-zinc-300 h-full px-4 py-2">
            Assessment
          </h3>
          <h4 className="font-semibold text-[14px] border-b-2 border-[#0073E6] py-6 px-4 text-[#0073E6]">My Assessment</h4>
        </div>
        <div>
          <img src="Assets/phone.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
