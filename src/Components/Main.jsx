import React, { useState } from "react";
import Nav from "../Components/Nav";
import Assessment from "../Components/Assessment";
import AssmntOverview from "./AssmntOverview";
const Main = () => {
  const [open, setOpen] = useState("hidden");
  const [openSideNav, setopenSideNav] = useState("hidden")
  const openBtn = () => {
    setOpen("block");
  };

  const closebtn = () => {
    setOpen("hidden");
  };

  const openNav = () =>
  {
    setopenSideNav("fixed")
  }

  const closeNav = () =>
  {
    setopenSideNav("hidden") 
  }

  return (
    <div className="bg-white w-full">
      <Nav openNav={openNav} />
      <Assessment />
      <AssmntOverview openBtn={openBtn} />

      {/* assessment adding section */}
      <div className={`${open} flex justify-center`}>
        <div
          className={`absolute top-0 bg-[#FFFFFF] w-[591px] h-fit border border-black rounded-[15px]`}
        >
          <nav className="flex justify-between px-[30px] py-[20px] border-b-2 border-[#DADCE0]">
            <p className="text-[#1C4980] font-semibold text-[20px]">
              Create new assessment
            </p>
            <img
              className="cursor-pointer"
              onClick={closebtn}
              src="Assets/cross.svg"
              alt=""
            />
          </nav>

          <form action="">
            <div className="px-[30px] mt-[20px]">
              <label
                className="font-medium text-[16px] text-[#1C4980]"
                htmlFor=""
              >
                Name of Assessment
              </label>
              <br />
              <input
                className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium placeholder-[#1C4980]"
                placeholder="Type Here"
                type="text"
              />
            </div>
            <div className="px-[30px] mt-[20px]">
              <label
                className="font-medium text-[16px] text-[#1C4980]"
                htmlFor=""
              >
                Purpose of the test is
              </label>
              <br />
              <select className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium text-[#1C4980]">
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </select>
            </div>
            <div className="px-[30px] mt-[20px]">
              <label
                className="font-medium text-[16px] text-[#1C4980]"
                htmlFor=""
              >
                Description
              </label>
              <br />
              <select className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium text-[#1C4980]">
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </select>
            </div>

            <div className="px-[30px] mt-[20px]">
              <label className="font-medium text-[16px] text-[#1C4980]">
                Skills
              </label>

              {/* skills suggestions */}
              {/* suggestion 1 */}
              <div className="flex flex-wrap gap-[10px] border rounded-t-[8px] border-[#DADCE0] w-full h-[102px] mt-[10px] px-[15px] py-[15px]">
                <div className="rounded-full px-[8px] py-[6px] bg-[#DDEDFF] flex items-center h-fit gap-2">
                  <p className="text-[#1C4980] text-[12px] font-medium">
                    UI/UX and Design
                  </p>
                  <img src="Assets/cross.svg" alt="" />
                </div>

                {/* suggesion 2 */}
                <div className="rounded-full px-[8px] py-[6px] bg-[#DDEDFF] flex items-center h-fit gap-2">
                  <p className="text-[#1C4980] text-[12px] font-medium">
                    No of Question
                  </p>
                  <img src="Assets/cross.svg" alt="" />
                </div>

                {/* suggestion 3 */}
                <div className="rounded-full px-[8px] py-[6px] bg-[#DDEDFF] flex items-center h-fit gap-2">
                  <p className="text-[#1C4980] text-[12px] font-medium">
                    Web Development
                  </p>
                  <img src="Assets/cross.svg" alt="" />
                </div>

                {/* suggestion 4 */}
                <div className="rounded-full px-[8px] py-[6px] bg-[#DDEDFF] flex items-center h-fit gap-2">
                  <p className="text-[#1C4980] text-[12px] font-medium">
                    UI/UX and Design
                  </p>
                  <img src="Assets/cross.svg" alt="" />
                </div>

                {/* suggestion 5 */}
                <div className="rounded-full px-[8px] py-[6px] bg-[#DDEDFF] flex items-center h-fit gap-2">
                  <p className="text-[#1C4980] text-[12px] font-medium">
                    Web Development
                  </p>
                  <img src="Assets/cross.svg" alt="" />
                </div>
              </div>
              <input
                className="border-b border-l border-r border-[#DADCE0] w-full px-[15px] py-[15px] rounded-b-[8px] font-medium placeholder-[#1C4980]"
                placeholder="Type Here"
                type="text"
              />
            </div>

            <div className="px-[30px] mt-[20px]">
              <label
                className="font-medium text-[16px] text-[#1C4980]"
                htmlFor=""
              >
                Duration of Assessment
              </label>
              <br />
              <input
                className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium"
                placeholder="HH:MM:SS"
                type="text"
              />
            </div>

            <div className="px-[30px] py-[20px]">
              <button className="w-full bg-[#0073E6] text-white py-[10px] rounded-[8px]">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* side nav section  */}
      <div className={`${openSideNav} bg-red-400 w-[85vw] h-screen top-0 z-10`}>
        <div className="flex  justify-between">
          <p>nav bar</p>
          <img onClick={closeNav} src="Assets/cross.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
