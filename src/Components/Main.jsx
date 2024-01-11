import React , {useState} from 'react'
import Nav from '../Components/Nav'
import Assessment from '../Components/Assessment'
import AssmntOverview from './AssmntOverview'
const Main = () => {

  const [popup, setPopup] = useState("hidden")
  const assessment = () => {
    setPopup("block")
  };

  return (
    <div className='bg-white w-full'>
        <Nav/>
        <Assessment/>
        <AssmntOverview assessment = {assessment} />
        <div className='flex justify-center'>
        <div className={`absolute top-0 bg-[#FFFFFF] w-[591px] h-[766px] border border-black rounded-[15px]`}>
          <nav className='flex justify-between px-[30px] py-[30px] border-b-2 border-[#DADCE0]'>
            <p className='text-[#1C4980] font-semibold text-[20px]'>Create new assessment</p>
            <img src="Assets/cross.svg" alt="" />
          </nav>
        </div>
        </div>
    </div>
  )
}

export default Main
