import React from "react";

const Assessment = () => {
  return (
    <div className="px-[20px] py-[20px]">
      <div className="flex flex-col gap-[16px]">
        <h4 className="text-[18px] text-[#1C4980] font-medium">
          Assessments Overview
        </h4>
        <div className="w-full h-[114px] border border-[#DADCE0] rounded-[12px] flex">
          {/* Total assessment */}
          <div className="border-r border-[#DADCE0] w-[162px] h-full">
            <div>
              <h4 className="text-[14px] font-semibold text-[#1C4980] px-[20px] py-[16px]">
                Total Assessment
              </h4>
              <div className="px-[20px] flex items-center gap-[10px]">
                <img src="Assets/total-ass.svg" alt="Total Assessment" />
                <p className="font-bold text-[20px] text-[#1C4980]">34</p>
              </div>
            </div>
          </div>

          {/* candidates */}
          <div className="border-r border-[#DADCE0] w-[369px] h-full">
            <div>
              <h4 className="text-[14px] font-semibold text-[#1C4980] px-[20px] py-[16px]">
                Candidates
              </h4>
              <div className="px-[20px] flex items-center gap-[20px]">
                <img src="Assets/candidate.svg" alt="Total Assessment" />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-[20px] text-[#1C4980]">
                      11,145
                    </p>
                    <span className="text-[#05C165] text-[12px] font-medium">
                      +89
                    </span>
                  </div>
                  <p className="font-medium text-[12px] text-[#1C4980]">Total Candidate</p>
                </div>

                <div className="border-l border-[#DADCE0] pl-[20px]">
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-[20px] text-[#1C4980]">
                      1,14
                    </p>
                    <span className="text-[#05C165] text-[12px] font-medium">
                      +89
                    </span>
                  </div>
                  <p className="font-medium text-[12px] text-[#1C4980]">Who Attamped</p>
                </div>
              </div>
            </div>
          </div>

          {/* candidates sources  */}
          <div className="border-r border-[#DADCE0] w-[499px] h-full">
            <div>
              <h4 className="text-[14px] font-semibold text-[#1C4980] px-[20px] py-[16px]">
                Candidates Source
              </h4>
              <div className="px-[20px] flex items-center gap-[20px]">
                <img src="Assets/globe.svg" alt="Total Assessment" />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-[20px] text-[#1C4980]">
                      11,000
                    </p>
                    <span className="text-[#05C165] text-[12px] font-medium">
                      +89
                    </span>
                  </div>
                  <p className="font-medium text-[12px] text-[#1C4980]">Email</p>
                </div>

                <div className="border-l border-[#DADCE0] pl-[20px]">
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-[20px] text-[#1C4980]">
                      145
                    </p>
                    <span className="text-[#05C165] text-[12px] font-medium">
                      +89
                    </span>
                  </div>
                  <p className="font-medium text-[12px] text-[#1C4980]">Social Share</p>
                </div>

                <div className="border-l border-[#DADCE0] pl-[20px]">
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-[20px] text-[#1C4980]">
                      145
                    </p>
                    <span className="text-[#05C165] text-[12px] font-medium">
                      +89
                    </span>
                  </div>
                  <p className="font-medium text-[12px] text-[#1C4980]">Unique Link</p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Purpose */}
            <div>
              <h4 className="text-[14px] font-semibold text-[#1C4980] px-[20px] py-[16px]">
                Total Assessment
              </h4>
              <div className="px-[20px] flex items-center gap-[10px]">
                <img src="Assets/total-ass.svg" alt="Total Assessment" />
                <p className="font-bold text-[20px] text-[#1C4980]">34</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
