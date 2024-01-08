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
        <div className={`absolute top-0 bg-green-500 w-[591px] h-[766px] border border-black`}></div>
        </div>
    </div>
  )
}

export default Main
