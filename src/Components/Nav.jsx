import React from "react";

const Nav = ({openNav}) => {
  return (
    <div className="border-b fixed lg:sticky w-full top-0 bg-white border-zinc-300 h-[70px] flex items-center px-[20px]">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <div className="flex gap-2">
            <img onClick={openNav} className="lg:hidden" src="Assets/menu.svg" alt="" />
          <h3 className="font-semibold text-[20px] text-[#1C4980] border-r-2 border-zinc-300 h-ful pr-3 py-3">
            Assessment
          </h3>
          </div>
          <h4 className="hidden lg:block font-semibold text-[14px] border-b-2 border-[#0073E6] text-[#0073E6] ml-3 py-6">My Assessment</h4>
        </div>
        <div>
          <img src="Assets/phone.svg" alt="" />
        </div>
      </div>
      <div className="lg:hidden bg-white w-full absolute left-0 top-16 flex">
        <div className="w-full border-b-2 border-blue-400 h-[60px] flex items-center justify-center">
          <p className="text-[#0073E6] text-[14px] font-medium">
            My Assessments
          </p>
        </div>
        <div className="w-full border-b-2 h-[60px] flex items-center justify-center">
          <p className="text-[14px] font-medium">
            Unstop Assessment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
