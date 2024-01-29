import React, { useState } from "react";
import Nav from "../Components/Nav";
import Assessment from "../Components/Assessment";
import AssmntOverview from "./AssmntOverview";
const Main = () => {

  // I used 3 use states here to perform 3 different UI interaction activities.

  //This one is for toggling side nav menu for mobile view. Initially the state will be "translate-x-[-100%]" so that the sideNav div will be at beyond x axis of the screen in left direction. On clicking the menu button the state will change to "translate-x-[0%]", So that it will slide towards the right direction of the x-axix screen in order to visible
  const [openSideNav, setopenSideNav] = useState("translate-x-[-100%]");

  //This one is for toggling the visibility of the Add assessment form or sub-section form. The animation of the form was like the form will appear first and then come from bottom to the middle of the screen in an sliding effect and vice versa when closing the form and then will get hidden.
  const [formVisible, setFormVisible] = useState(false);

  //This one for toggling of sliding effect from bottom to middle and vice versa of the sub-section form.
  const [open, setOpen] = useState("-translate-y-[-100%]");

  //This function for toggling of the form activity. I passed the 2nd useState as true and 3rd useState inside the async function so that the form will get visible first and then the sliding effect will appear.
  const openBtn = () => {
    setFormVisible(true);
    setTimeout(() => {
      setOpen("-translate-y-[60%]");
    }, 0);
  };

    //This function for toggling of the form activity. This time i passed the 2nd useState as false inside asyn function and 3rd useState so that the form will get the sliding effect first and then get hidden.
  const closebtn = () => {
    setOpen("-translate-y-[-100%]");
    setTimeout(() => {
      setFormVisible(false);
    }, 200);
  };

  //This function is for opening the side nav menu. I Passed the 1st useState here to sliding appear effect from left to right.
  const openNav = () => {
    setopenSideNav("translate-x-[0%]");
  };

  //This function is for closing the side nav menu. I Passed the 1st useState here to sliding disappear effect from right to left.
  const closeNav = () => {
    setopenSideNav("translate-x-[-100%]");
  };

  return (
    <div className="bg-white w-full lg:ml-36">
      <Nav openNav={openNav} />
      <Assessment />
      <AssmntOverview openBtn={openBtn} />

      {/* assessment adding part or sub-section part.{Here i added a class posAdjust to adjust the position of the add assement div. The adjusted code is in the index.css} */}
      <div
        className={`${open} transition-all duration-300 ease-in posAdjust translate-x-[-60%] bg-[#FFFFFF] w-full max-w-screen-md h-fit overflow-y-auto border border-black rounded-[15px] `}
        style={{ display: formVisible ? "block" : "none" }}
      >
        <nav className="flex bg-[#FFFFFF] justify-between px-[30px] py-[20px] border-b-2 border-[#DADCE0] sticky z-10 top-0 w-full">
          <p className="text-[#1C4980] font-semibold text-[20px] hidden lg:block">
            Create new assessment
          </p>
          <p className="text-[#1C4980] font-semibold text-[20px] lg:hidden">
            Sub-Section Details
          </p>
          <img
            className="cursor-pointer hidden lg:block"
            onClick={closebtn}
            src="Assets/cross.svg"
            alt=""
          />
          <img
            className="cursor-pointer lg:hidden"
            onClick={closebtn}
            src="Assets/red-cross.svg"
            alt=""
          />
        </nav>

        {/* form of sub-section part */}
        <form action="">
          {/* name of assessment part */}
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

          {/* purpose of test part */}
          <div className="px-[30px] mt-[20px]">
            <label
              className="font-medium text-[16px] text-[#1C4980]"
              htmlFor=""
            >
              Purpose of the test is
            </label>
            <br />

            {/* this is the drop down option menu. For demonstration i added two options name option 1 and option 2 */}
            <select className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium text-[#1C4980]">
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </select>
          </div>

          {/* Assessment description part */}
          <div className="px-[30px] mt-[20px]">
            <label
              className="font-medium text-[16px] text-[#1C4980]"
              htmlFor=""
            >
              Description
            </label>
            <br />

            {/* this is the drop down option menu. For demonstration i added two options name option 1 and option 2 */}
            <select className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium text-[#1C4980]">
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </select>
          </div>

          {/* skill part */}
          <div className="px-[30px] mt-[20px]">
            <label className="font-medium text-[16px] text-[#1C4980]">
              Skills
            </label>

            {/* skills suggestions */}
            {/* suggestion 1 */}
            <div className="flex flex-wrap gap-[10px] border rounded-t-[8px] border-[#DADCE0] w-full h-fit mt-[10px] px-[15px] py-[15px]">
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

            {/* skill input section */}
            <input
              className="border-b border-l border-r border-[#DADCE0] w-full px-[15px] py-[15px] rounded-b-[8px] font-medium placeholder-[#1C4980]"
              placeholder="Type Here"
              type="text"
            />
          </div>

          {/* assessment duration part */}
          <div className="px-[30px] mt-[20px]">
            <label
              className="font-medium text-[16px] text-[#1C4980]"
              htmlFor=""
            >
              Duration of Assessment
            </label>
            <br />

            {/* duration input part */}
            <input
              className="border border-[#DADCE0] w-full mt-[10px] px-[15px] py-[15px] rounded-[8px] font-medium"
              placeholder="HH:MM:SS"
              type="text"
            />
          </div>

          {/* submit button part */}
          <div className="myButton bg-[#FFFFFF] px-[30px] py-[20px]">
            <button
              type="button"
              className="w-full bg-[#0073E6] text-white py-[10px] rounded-[8px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* side nav section for mobile view. I add the animation "transition-transform duration-300 transform" for smooth sliding appear effect from left to right and vice versa on toggle*/}
      <div
        className={`${openSideNav} lg:hidden fixed bg-[#F2F8FE] px-[20px] pt-[40px] w-[85vw] h-screen top-0 z-10 transition-transform duration-300 transform`}
      >
        <div className="flex items-start h-[36px]  justify-between">
          <p className="text-[14px] font-medium text-[#1C4980]">Menu</p>
          <img
            className="w-4"
            onClick={closeNav}
            src="Assets/cross.svg"
            alt=""
          />
        </div>

        {/* Dashboard section  */}
        <div className="flex px-[10px] py-[10px] mt-[6px] items-center h-[50px] gap-[8px]">
          <img src="Assets/dashboard.svg" alt="" />
          <p className="text-[14px] font-medium text-[#1C4980]">Dashboard</p>
        </div>

        {/* Assessment section  */}
        <div className="flex px-[10px] bg-[#E5F1FC] rounded-[8px] border-2 border-[#0073E6] py-[10px] mt-[6px] items-center h-[50px] gap-[8px]">
          <img src="Assets/assessment.svg" alt="" />
          <p className="text-[14px] font-medium text-[#0073E6]">Assessment</p>
        </div>

        {/* Library section  */}
        <div className="flex px-[10px] py-[10px] mt-[6px] items-center h-[50px] gap-[8px]">
          <img src="Assets/quiz.svg" alt="" />
          <p className="text-[14px] font-medium text-[#1C4980]">My Library</p>
        </div>

        <hr className="border-b border-dotted bg-[#DADCE0] mt-[5px] mb-[5px]" />

        {/* Admin section  */}
        <div className="flex justify-between items-center">
          <div className="flex px-[10px] py-[10px] mt-[6px] items-center h-[50px] gap-[8px]">
            <img src="Assets/clip.svg" alt="" />
            <p className="text-[14px] font-medium text-[#1C4980]">
              Round Status
            </p>
          </div>
          <p className="text-[10px] font-medium bg-[#FBEBEA] text-[#D63500] border border-[#D63500] w-fit h-fit rounded-full px-4">
            Admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
