import React from "react";
import contactImg from '../../assets/contact-us.png'
import { ImLocation } from 'react-icons/im'
import { MdOutlineEmail } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
function Contents() {
  return (
    <section>
      <div className="container">
        {/* ===== title start ===== */}
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="flex items-center justify-center relative"
        >
          <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-7xl font-bold text-[#f1f1f1]">
            Contact Us
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            Contact Us
          </h2>
        </div>
        {/* ===== title end ===== */}

        {/* ===== contant start ===== */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-9  ">
          <div className="sm:w-[50%]   ">
            <img src={contactImg} />
          </div>
          <div className=" sm:w-[50%] flex flex-col  items-center">
            <form >
            <input type="text" placeholder="Full Name" className="w-full bg-gray-100  rounded text-lg p-4 outline-none mb-4" />
            <input type="email" placeholder="Email" className="w-full bg-gray-100  rounded text-lg p-4 outline-none mb-4"  />
            <input type="text" placeholder="Phone" className="w-full bg-gray-100  rounded text-lg p-4 outline-none mb-4" />
            <textarea className='w-full bg-gray-100 outline-none p-3 border-2  ' placeholder='Enter Message ' name="message" id="" cols="20" rows="4"></textarea>
            </form>
            <input type="submit" className='p-3 border-2 cursor-pointer bg-primaryColor text-[#F7F5F5] mt-5 w-full' value='Submit'/>
          </div>
        </div>
        {/*===== contact end ====*/}
        {/*===== icons ====*/}
        <div className=" flex flex-col justify-center items-center mt-4">
          <h2 className="text-primaryColor text-3xl font-medium">Get in Toach Us</h2>
          <div className="flex flex-col sm:flex-row justify-center  items-center space-x-28 mt-8 ">
             <div className="bg-primaryColor text-white h-20 w-20 rounded-full text-4xl text-center shadow-sm p-5"> <ImLocation /> <p className="text-black  text-base mt-7 mx-[-40px]">Keyna, Nairobi</p></div>
             <div className="bg-primaryColor text-white h-20 w-20 rounded-full text-4xl text-center shadow-sm p-5"> <MdOutlineEmail /> <p className="text-black  text-sm mt-7 mx-[-55px]">amesasolutions@gmail.com</p> </div>
             <div className="bg-primaryColor text-white h-20 w-20 rounded-full text-4xl text-center shadow-sm p-5"> <BiSolidPhoneCall /> <p className="text-black  text-base mt-7 mx-[-20px] ">+2510000000</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
