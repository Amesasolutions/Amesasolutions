import React from "react";
import heroAbout from "../../assets/About-us.png";
import { RiCheckboxCircleLine } from "react-icons/ri";
import AboutCards from "./AboutCards";

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
            About Us
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            About Us
          </h2>
        </div>
        {/* ===== title end ===== */}

        {/* ===hero start === */}

        <div className="w-full flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between  ">
          {/* ===== Text left start ===== */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center md:text-left items-center md:items-start">
            <h3
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-bold max-[390px]:text-2xl text-3xl md:text-5xl text-primaryColor"
            >
              We use proven methods{" "}
            </h3>
            <h4
              data-aos="fade-right"
              data-aos-duration="1400"
              className="font-bold max-[390px]:text-2xl text-2xl md:text-5xl text-secondaryColor "
            >
              for excellent results <br className="hidden md:block" />
            </h4>
            <p
              data-aos="fade-right"
              data-aos-duration="1300"
              data-aos-delay="50"
              className="whitespace-normal text-[0.8rem] md:text-sm text-txtSmallColor"
            >
              Website design and development business
              <br className="hidden md:block" />
              Amesa Solutions offers end-to-end development
              <br className="hidden md:block" />
              services. We operate with a variety of technologies
              <br className="hidden md:block" />
              including open source, proprietary and solutions,
              <br className="hidden md:block" />
              that are specifically designed for us.
              <br className="hidden md:block" />
              Here is how we work:
            </p>
          </div>
          {/* ===== Text left end ===== */}
          {/* ===== Text right start ===== */}
          <figure
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="w-full sm:w-[25rem] hidden md:block"
          >
            <img src={heroAbout} alt="" className="w-full" />
          </figure>
          {/* ===== Text right end ===== */}
        </div>
        {/* steps */}
        <div className="flex flex-col  md:mb-[4rem] md:mt-[-2rem] mt-4 gap-2">
          <div className="flex flex-row items-center gap-2 text-primaryColor">
            <RiCheckboxCircleLine size={22} />
            <p>We Obtain</p>
          </div>

          <div className="flex flex-row items-center gap-2 text-primaryColor">
            <RiCheckboxCircleLine size={22} />
            <p>We use strategy</p>
          </div>

          <div className="flex flex-row items-center gap-2 text-primaryColor">
            <RiCheckboxCircleLine size={22} />
            <p>We Develop and Design</p>
          </div>

          <div className="flex flex-row items-center gap-2 text-primaryColor">
            <RiCheckboxCircleLine size={22} />
            <p>We Test & Launch</p>
          </div>
        </div>

        <figure
          data-aos="fade-zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="w-full sm:w-[25rem] block md:hidden"
        >
          <img src={heroAbout} alt="" className="w-full" />
        </figure>
      </div>
      <AboutCards />
    </section>
  );
}

export default Contents;
