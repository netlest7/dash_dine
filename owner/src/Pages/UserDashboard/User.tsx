import React from 'react'
import { Sidebar } from '../PageComponents/Sidebar'

const User = () => {
  return (
    <div className='w-screen h-screen flex bg-black'>
        {/* side bar */}
        <Sidebar/>
        {/* side bar */}
        <div className="w-[80%] border-r-9">
        <h3>Main box</h3>

        </div>
    </div>
  )
}

export default User