import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/amesasolutions.png";
import { useFirebase } from '../../Context/firebase';

function Sidebar() {
  const { logOut } = useFirebase()
  const location = useLocation()

  const styleHover = {
    focus: `!bg-primaryColor !text-white`
  }

  return (
    <div className='w-[260px] h-screen bg-white fixed top-0 left-0 shadow-md flex flex-col gap-5 items-center p-6'>
        {/* logo */}
        <Link to="/">
        <figure className="w-[14rem]">
          <img src={logo} alt="Amesa solutions" className="w-full" />
        </figure>
      </Link>
      <ul className='w-full flex flex-col gap-6 mt-3'>
        <Link to='/admin'>
        <li className={`flex items-center justify-start gap-5 cursor-pointer bg-[#fff] hover:bg-[#F3F0FF] text-txtSmallColor  hover:text-primaryColor ${location.pathname === '/admin' ? styleHover.focus : ''} rounded-lg rounded-e-[20px] w-full p-5 text-xl`}>
          <span><i class="ri-folder-chart-fill"></i></span>
          <span>Projects</span>
        </li>
        </Link>
        <Link to='/Add_Project'>
        <li className={`flex items-center justify-start gap-5 cursor-pointer bg-[#fff] text-txtSmallColor hover:bg-[#F3F0FF] hover:text-primaryColor ${location.pathname === '/Add_Project' ? styleHover.focus : ''} rounded-lg rounded-e-[20px] w-full p-5 text-xl`}>
          <span><i class="ri-folder-add-fill"></i></span>
          <span>Add Project</span>
        </li>
        </Link>
        <li onClick={logOut}
        className={`flex items-center justify-start gap-5 cursor-pointer bg-[#fff] text-txtSmallColor hover:bg-[#F3F0FF] hover:text-primaryColor rounded-lg rounded-e-[20px] w-full p-5 text-xl`}>
          <span><i class="ri-login-box-fill"></i></span>
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar