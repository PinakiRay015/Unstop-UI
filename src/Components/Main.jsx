import React from 'react'
import Nav from '../Components/Nav'
import Assessment from '../Components/Assessment'
import AssmntOverview from './AssmntOverview'
const Main = () => {
  return (
    <div className='bg-white w-full'>
        <Nav/>
        <Assessment/>
        <AssmntOverview/>
    </div>
  )
}

export default Main
