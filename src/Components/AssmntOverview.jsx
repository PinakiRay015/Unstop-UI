import React, { useState } from "react";
import myAssessment from "../Assessment-cards/Assessments";
const AssmntOverview = ({ openBtn }) => {
  const [toggleOpen, SettoggleOpen] = useState("h-[0px]");
  const [border, setBorder] = useState("border-none")
  const [statsImage, SetstatsImage] = useState(false)

  const openStats = () => {
    SettoggleOpen((prev) => (prev === "h-[0px]" ? "h-[274px]" : "h-[0px]"));
    setBorder((prev) => (prev) === "border-none" ? "border border-[#DADCE0]" : "border-none")
    SetstatsImage(!statsImage)

  };
  return (
    <div className="px-[20px] lg:mt-0 md:mt-24 sm:mt-24">
      {/* assessment's stats for mobile view */}

      <div
        className={`transition-height duration-300 transform ${toggleOpen} ${border} lg:hidden overflow-y-auto w-full bg-[#F6F8FA] rounded-[12px] md-4]`}
      >
        <div className="flex gap-[1px]">
          <div className="w-full border-r border-[#DADCE0] pl-2 py-[10px]">
            <h4 className="text-[14px] font-medium text-[#1C4980]">
              Total Assessment
            </h4>
            <div className="mt-[10px] flex gap-[5px] items-center">
              <img src="Assets/total-ass.svg" alt="" />
              <p className="font-semibold text-[16px] text-[#1C4980]">34</p>
            </div>
          </div>
          <div className="w-full  pl-2 py-[10px]">
            <h4 className="text-[14px] font-medium text-[#1C4980]">
              Total Purpose
            </h4>
            <div className="mt-[10px] flex gap-[5px] items-center">
              <img src="Assets/link.svg" alt="" />
              <p className="font-semibold text-[16px] text-[#1C4980]">11</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DADCE0] mt-[1px] px-2 py-[10px]">
          <h4 className="text-[14px] font-medium text-[#1C4980]">Candidates</h4>
          <div className="flex gap-[5px] items-center mt-[10px]">
            <img src="Assets/candidate.svg" alt="Total Assessment" />
            <div>
              <div className="flex items-center gap-1">
                <p className="font-semibold text-[16px] text-[#1C4980]">
                  11,145
                </p>
                <span className="text-[#05C165] text-[10px] font-medium">
                  +89
                </span>
              </div>
              <p className="font-medium text-[10px] text-[#1C4980]">
                Total Candidate
              </p>
            </div>

            <div className="border-l ml-[5px] border-[#DADCE0] pl-[10px]">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-[16px] text-[#1C4980]">1,14</p>
                <span className="text-[#05C165] text-[10px] font-medium">
                  +89
                </span>
              </div>
              <p className="font-medium text-[10px] text-[#1C4980]">
                Who Attamped
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#DADCE0] mt-[1px] pl-2 pt-2">
          <h4 className="text-[14px] font-medium text-[#1C4980]">
            Candidates Source
          </h4>
          <div className="flex gap-[5px] items-center mt-[10px]">
            <img src="Assets/globe.svg" alt="Total Assessment" />
            <div>
              <div className="flex items-center gap-1">
                <p className="font-semibold text-[16px] text-[#1C4980]">
                  11,000
                </p>
                <span className="text-[#05C165] text-[10px] font-medium">
                  +89
                </span>
              </div>
              <p className="font-medium text-[10px] text-[#1C4980]">E-mail</p>
            </div>

            <div className="border-l  border-[#DADCE0]">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-[16px] text-[#1C4980]">
                  11,000
                </p>
                <span className="text-[#05C165] text-[10px] font-medium">
                  +89
                </span>
              </div>
              <p className="font-medium text-[10px] text-[#1C4980]">
                Social Share
              </p>
            </div>

            <div className="border-l  border-[#DADCE0]">
              <div className="flex items-center gap-1">
                <p className="font-semibold text-[16px] text-[#1C4980]">
                  11,000
                </p>
                <span className="text-[#05C165] text-[10px] font-medium">
                  +89
                </span>
              </div>
              <p className="font-medium text-[10px] text-[#1C4980]">
                Unique Link
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4 items-center">
        <p className="font-medium text-[18px] text-[#1C4980]">My Assessment</p>
        <div className="flex lg:hidden">
          <img src="Assets/search.svg" alt="" />
          <img src="Assets/filter.svg" alt="" />
          <img onClick={openStats} src={statsImage ? "Assets/stats2.svg" : "Assets/stats1.svg"} alt="" />
        </div>
      </div>

      <div className="w-full h-[209px] lg:flex justify-between mt-[16px] flex-wrap">
        <div
          onClick={openBtn}
          className="lg:w-[420px]  cursor-pointer border border-dotted mb-[20px] bordedr-[#DADCE0] h-full bg-[#F6F8FA] flex items-center rounded-md px-[16px]"
        >
          <div className="text-center m-auto">
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

        {myAssessment.map((e) => {
          return (
            <div className="lg:w-[420px] h-full border bordedr-[#DADCE0] px-[16px] py-[16px] rounded-lg mb-[20px]">
              <nav className="flex justify-between">
                <img src={e.logo} alt="" />
                <img src="Assets/mini-menu.svg" alt="" />
              </nav>

              <h4 className="mt-[10px] font-medium text-[18px] text-[#1C4980] mb-[2px]">
                {e.name}
              </h4>
              <div className="flex py-1">
                <p className="text-[14px] font-semibold text-[#1C4980] border-r border-[#DADCE0] pr-[10px]">
                  {e.title}
                </p>
                <div className="flex gap-[6px] items-center pl-[10px]">
                  <img src="Assets/calender.svg" alt="" />
                  <p className="text-[12px] font-medium text-[#8DA4BF] w-[91px]">
                    {e.date}
                  </p>
                </div>
              </div>

              <hr className="border-b border-dotted border-[#DADCE0] mt-[8px] mb-[8px]" />

              <footer className="flex items-center justify-between">
                <div className="flex w-[123px] justify-between">
                  <div>
                    <p className="text-[14px] font-semibold text-[#1C4980]">
                      {e.duration}
                    </p>
                    <p className="text-[12px] font-medium text-[#1C4980]">
                      Duration
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1C4980]">
                      {e.questions}
                    </p>
                    <p className="text-[12px] font-medium text-[#1C4980]">
                      Questions
                    </p>
                  </div>
                </div>

                <div className="flex gap-[10px]">
                  <div className="border-2 border-[#1C4980] rounded-[50px] pl-[6px] gap-[4px] pr-[8px] py-[2px] flex items-center w-fit">
                    <img src="Assets/link-deep.svg" alt="" />
                    <p>Share</p>
                  </div>
                  <img src={e.users} alt="" />
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssmntOverview;
