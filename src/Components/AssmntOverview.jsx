import React from "react";

const AssmntOverview = () => {
  return (
    <div className="px-[20px]">
      <p className="font-medium text-[18px] text-[#1C4980]">My Assessment</p>

      <div className="w-full h-[209px] border bordedr-[#DADCE0] flex justify-between rounded-md mt-[16px]">
        <div className="w-[420px] border bordedr-[#DADCE0] h-full bg-[#F6F8FA] flex items-center rounded-md] px-[16px]">
          <div className="text-center">
            <img className="m-auto" src="Assets/plus.svg" alt="" />
            <h4 className="text-[18px] text-[#1C4980] font-medium">
              New Assessment
            </h4>
            <p className="font-medium text-[12px] text-[#1C4980]">
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
        </div>

        {/* mapping of assessment cards */}
        <div className="w-[420px] h-full border bordedr-[#DADCE0] px-[16px] py-[16px] rounded-lg">
          <nav className="flex justify-between">
            <img src="Assets/bag.svg" alt="" />
            <img src="Assets/mini-menu.svg" alt="" />
          </nav>

          <h4 className="mt-[10px] font-medium text-[18px] text-[#1C4980] mb-[2px]">
            Math Assignment
          </h4>
          <div className="flex py-1">
            <p className="text-[14px] font-semibold text-[#1C4980] border-r border-[#DADCE0] pr-[10px]">
              Job
            </p>
            <div className="flex gap-[6px] items-center pl-[10px]">
              <img src="Assets/calender.svg" alt="" />
              <p className="text-[12px] font-medium text-[#8DA4BF] w-[91px]">
                20 Apr 2023
              </p>
            </div>
          </div>

          <hr className="border-b border-dotted border-[#DADCE0] mt-[8px] mb-[8px]" />

          <footer className="flex items-center justify-between">
            <div className="flex w-[123px] justify-between">
              <div>
                <p className="text-[14px] font-semibold text-[#1C4980]">00</p>
                <p className="text-[12px] font-medium text-[#1C4980]">Duration</p>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#1C4980]">00</p>
                <p className="text-[12px] font-medium text-[#1C4980]">Questions</p>
              </div>
            </div>

            <div className="flex gap-[10px]">
              <div className="border-2 border-[#1C4980] rounded-[50px] pl-[6px] gap-[4px] pr-[8px] py-[2px] flex items-center w-fit">
                <img src="Assets/link-deep.svg" alt="" />
                <p>Share</p>
              </div>
              <img src="Assets/singleUser.svg" alt="" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AssmntOverview;
