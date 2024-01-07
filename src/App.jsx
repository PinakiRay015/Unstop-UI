import React from 'react'
import Side from './Components/Side'
import Main from './Components/Main'
const App = () => {
  return (
    <div className='flex h-screen bg-[#F6F8FA] gap-3'>
      <Side/>
      <Main/>
    </div>
  )
}

export default App
