import React from "react";

const Side = () => {
  return (
    <div className="bg-white w-[140px] py-3">
      <div className="w-[90px] m-auto">
        <div className="leading-6 my-4 py-1">
          <img className="m-auto" src="Assets/dashboard.svg" alt="" />
          <p className="font-medium text-[12px] text-[#1C4980] text-center">
            Dashboard
          </p>
        </div>

        <div className="leading-6 my-4 ring-1 ring-[#0073E6] bg-[#E5F1FC] py-3 rounded-md">
          <img className="m-auto" src="Assets/assessment.svg" alt="" />
          <p className="font-medium text-[12px] text-[#0073E6] text-center">
            Assessment
          </p>
        </div>

        <div className="leading-6 my-4 py-3 mb-6">
          <img className="m-auto" src="Assets/quiz.svg" alt="" />
          <p className="font-medium text-[12px] text-[#1C4980] text-center">
            My Library
          </p>
        </div>

        <hr className="border border-dotted border-[#C2D2DA]" />

        <div className="leading-6 my-4">
          <p className="m-auto text-[10px] font-medium bg-[#FBEBEA] text-[#D63500] border border-[#D63500] w-fit h-fit rounded-full px-4">
            Admin
          </p>
          <div className="py-4">
            <img className="m-auto" src="Assets/clip.svg" alt="" />
            <p className="font-medium text-[12px] text-[#1C4980] text-center leading-3 mt-2">
              Round <br />Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
