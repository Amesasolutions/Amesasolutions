import React, { useState } from "react";
import wave from "../../assets/wave-01.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {FaPeopleGroup, FaRankingStar} from 'react-icons/fa6'
import {BsFolderCheck} from 'react-icons/bs'

function Counters() {
  const [counters, setCounters] = useState(false);
  return (
    <section 
    className="w-full p-0 flex flex-col ">
      <figure className="w-full h-46">
        <img src={wave} alt="" className="w-full h-full" />
      </figure>
      <div className="w-full bg-primaryColor">
        <div className="container">
          <ScrollTrigger
            onEnter={() => setCounters(true)}
            onExit={() => setCounters(false)}
          >
            <div 
            data-aos="fade-up"
            data-aos-durations="1500"
            className="w-full flex items-center justify-between gap-8 pb-14 pt-8 md:pt-0 flex-col md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <div className="text-5xl text-white">
                    {/* <FaPeopleGroup/> */}
                    <i class="ri-emotion-happy-fill"></i>
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  <h3 className="font-medium text-xl">Happy Clients</h3>
                  <h1 className="font-medium  text-3xl">
                    {counters && (
                      <CountUp start={0} end={439} duration={3} suffix="+" />
                    )}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <div className="text-5xl text-white">
                    <BsFolderCheck/>
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  <h3 className="font-medium text-xl">Projects Completed</h3>
                  <h1 className="font-medium  text-3xl">
                    {counters && (
                      <CountUp start={0} end={128} duration={3} suffix="+" />
                    )}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <div className="text-5xl text-white">
                    <FaRankingStar/>
                  </div>
                </div>
                <div className="flex flex-col text-white">
                  <h3 className="font-medium text-xl">Success Rate</h3>
                  <h1 className="font-medium  text-3xl">
                    {counters && (
                      <CountUp start={0} end={100} duration={3} suffix="%" />
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
}

export default Counters;
