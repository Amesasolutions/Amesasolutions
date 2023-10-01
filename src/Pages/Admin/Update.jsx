import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import UpdateContent from '../../Components/Admin/UpdateContent'

function Update() {
  return (
    <div className='flex bg-[#F9FAFD]'>
    <Sidebar/>
    <div className='ml-[260px] p-8 flex flex-col gap-4 w-full h-screen'>
      {/* title */}
      <div className='flex flex-col gap-2'>
        <h2 className='text-headingColor text-2xl font-medium'>Dashboard</h2>
        <p className='text-txtSmallColor text-lg'>Update Project</p>
      </div>
      {/* content */}
      <UpdateContent/>
    </div>
  </div>
  )
}

export default Update