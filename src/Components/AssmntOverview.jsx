import React from "react";

const AssmntOverview = () => {
  return (
    <div className="px-[20px]">
      <p className="font-medium text-[18px] text-[#1C4980]">My Assessment</p>

      <div className="w-full h-[209px] border border-black flex justify-between rounded-md mt-[16px]">
        <div className="w-[420px] border-r-2 border-black h-full bg-[#F6F8FA] flex items-center rounded-l-md">
          <div className="text-center">
            <img className="m-auto" src="Assets/plus.svg" alt="" />
            <h4 className="text-[18px] text-[#1C4980] font-medium">New Assessment</h4>
            <p className="font-medium text-[12px] text-[#1C4980]">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
          </div>
        </div>

        {/* mapping of assessment cards */}
        <div className="w-[420px] h-full"></div>
      </div>
    </div>
  );
};

export default AssmntOverview;
