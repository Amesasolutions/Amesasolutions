import React from "react";
import { FaNodeJs, FaReact, FaJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiWordpress, SiFigma } from "react-icons/si";

function Tech() {
  return (
    <section>
      <div className="container flex flex-col gap-5 items-center justify-center">
        {/* ===== title start ===== */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            className="flex items-center justify-center relative"
          >
            <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-6xl font-bold text-[#f1f1f1]">
              Technologies & Platforms
            </h2>
            <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
              Technologies & Platforms
            </h2>
          </div>
          <h3 className="text-xl font-medium text-gray-400">We Work With</h3>
        </div>
        {/* ===== title end ===== */}
        {/* ===== cards start ===== */}
        <div 
        data-aos="fade-up"
        data-aos-duration="1300"
        className="mt-4 flex flex-wrap items-center justify-center gap-6">
          <div className="w-full sm:w-[18rem] flex flex-col gap-2  items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <FaReact />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">
              React js
            </h2>
          </div>
          <div className="w-full sm:w-[18rem] flex flex-col gap-2  items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <FaNodeJs />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">Node js</h2>
          </div>
          <div className="w-full sm:w-[18rem] flex flex-col gap-2 items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <RiJavascriptFill />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">
              JavaScript
            </h2>
          </div>
          <div className="w-full sm:w-[18rem] flex flex-col gap-2  items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <SiTailwindcss />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">
              Tailwindcss
            </h2>
          </div>
          <div className="w-full sm:w-[18rem] flex flex-col gap-2  items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <SiWordpress />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">
              Wordpress
            </h2>
          </div>
          <div className="w-full sm:w-[18rem] flex flex-col gap-2 items-center justify-center p-8 bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[5px] ">
            <div className="text-5xl text-primaryColor">
              <SiFigma />
            </div>
            <h2 className="font-medium text-2xl text-txtSmallColor">Figma</h2>
          </div>
        </div>
        {/* ===== cards end ===== */}
      </div>
    </section>
  );
}

export default Tech;
