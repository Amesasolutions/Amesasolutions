import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

function Hero() {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="w-full flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between  ">
          {/* ===== Text left start ===== */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center md:text-left items-center md:items-start">
            <h3
              data-aos="fade-right"
              data-aos-duration="1500"
              className="font-bold max-[390px]:text-2xl text-4xl md:text-5xl text-primaryColor"
            >
              Do you need a website?
            </h3>
            <h4
              data-aos="fade-right"
              data-aos-duration="1400"
              className="font-bold max-[390px]:text-2xl text-4xl md:text-5xl text-secondaryColor leading-[3.4rem]"
            >
              Start Your Dream <br className="hidden md:block" />
              Website!
            </h4>
            <p
              data-aos="fade-right"
              data-aos-duration="1300"
              data-aos-delay="50"
              className="whitespace-normal text-[0.8rem] md:text-sm text-txtSmallColor"
            >
              Amesa Solutions: Web design & development experts with tech
              <br className="hidden md:block" />
              versatility; end-to-end services tailored to you
            </p>
            <Link to="/Contact-us">
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                className="bg-primaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-primaryColor
              rounded-[5px] text-white hover:bg-white hover:text-primaryColor ease duration-200"
              >
                <i class="ri-mail-send-fill"></i>
                Contact us
              </button>
            </Link>
          </div>
          {/* ===== Text left end ===== */}
          {/* ===== Text right start ===== */}
          <figure
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="w-full sm:w-[25rem]"
          >
            <img src={heroImg} alt="" className="w-full" />
          </figure>
          {/* ===== Text right end ===== */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
