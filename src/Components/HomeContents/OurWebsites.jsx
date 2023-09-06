import React from "react";
import devicesImg from './../../assets/devices.png'

function OurWebsites() {
  return (
    <section>
      <div className="container flex flex-col items-center ">
        {/* ===== title start ===== */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            className="flex items-center justify-center relative"
          >
            <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-7xl font-bold text-[#f1f1f1]">
              Our Websites
            </h2>
            <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
              Our Websites
            </h2>
          </div>
          <h3 className="text-xl font-medium text-gray-400">Are built to fit on all devices</h3>
        </div>
        {/* ===== title end ===== */}
        {/* ===== image Start ===== */}
        <figure 
        data-aos="fade-up"
        data-aos-duration="1300"
        className="mt-3 w-full md:w-[80%] ">
            <img src={devicesImg} alt="Amesa Solutions" className="w-full"/>
        </figure>
        {/* ===== image end ===== */}
      </div>
    </section>
  );
}

export default OurWebsites;
