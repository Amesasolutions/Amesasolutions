import React, { useEffect, useState } from "react";
import wave from "../../assets/wave-01.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";

function Footer() {
  const [year, setYear] = useState();
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [year]);
  return (
    <section className="bg-primaryColor w-full flex flex-col">
      <div className="container flex flex-col items-center gap-3 text-white">
        <div className="flex flex-wrap  justify-start  md:justify-center gap-6  md:gap-[15%] items-center w-full ">
          {/* first container */}
          <div>
            <h1 className="text-white text-2xl font-semibold">Amesa Solutions</h1>
            <p className="py-2 text-gray-200">
              Welcome to Amesa Solutions! Step into<br/> our 
              realm, where creativity meets<br/> technology.
            </p>
            {/* social icons */}
            <div className="flex flex-row gap-4 mt-2">
              <Link
                to="https://www.facebook.com/AmesaSolutions"
                target="_blank"
                className="bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor "
              >
                <i class="ri-facebook-fill"></i>
              </Link>
              <Link
                to="https://twitter.com/AmesaSolutions"
                target="_blank"
                className="bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor "
              >
                <i class="ri-twitter-fill"></i>
              </Link>
              <Link
                to="https://www.instagram.com/amesasolutions"
                target="_blank"
                className="bg-white rounded-[50%] w-[30px] h-[30px] leading-[30px] text-center  text-secondaryColor "
              >
                <i class="ri-instagram-fill"></i>
              </Link>
            </div>
          </div>

          {/* second container */}
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-[1.5rem] font-medium">
              Quick links
            </h1>
            <div className="flex flex-col">
              <Link to="/">
                <p className="text-secondaryColor ">
                  <i class="ri-arrow-right-s-line">
                    {" "}
                    <span className="text-gray-100 hover:text-secondaryColor">
                      Home
                    </span>{" "}
                  </i>
                </p>{" "}
              </Link>
              <Link to="/About-us">
                <p className="text-secondaryColor ">
                  <i class="ri-arrow-right-s-line">
                    {" "}
                    <span className="text-gray-100 hover:text-secondaryColor">
                      About us
                    </span>{" "}
                  </i>
                </p>{" "}
              </Link>
              <Link to="/Portfolio">
                {" "}
                <p className="text-secondaryColor ">
                  <i class="ri-arrow-right-s-line">
                    {" "}
                    <span className="text-gray-100 hover:text-secondaryColor">
                      Our Works
                    </span>{" "}
                  </i>
                </p>{" "}
              </Link>
              <Link to="/Contact-us">
                <p className="text-secondaryColor ">
                  <i class="ri-arrow-right-s-line">
                    {" "}
                    <span className="text-gray-100 hover:text-secondaryColor">
                      Contact Us
                    </span>{" "}
                  </i>
                </p>{" "}
              </Link>
            </div>
          </div>

          {/* third container */}
          <div className="flex flex-col">
            <h1 className="text-white text-2xl mb-3 font-medium">
              Contact info
            </h1>
            <div className="flex flex-col gap-3 ">
              <p className="text-secondaryColor ">
                <i class="ri-map-pin-line">
                  <span className="text-gray-100 ml-2 ">Nairobi, Kenya</span>{" "}
                </i>
              </p>
              <p className="text-secondaryColor ">
                <i class="ri-mail-send-line">
                  <span className="text-gray-100 ml-2 ">
                    amesasolution@gmail.com
                  </span>
                </i>
              </p>
              <p className="text-secondaryColor ">
                <i class="ri-phone-line">
                  <span className="text-gray-100 ml-2 ">+254 743 537705</span>
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#9cc0ff]  mt-6'></div>
      <p className='text-xs sm:text-sm text-center mt-9 pb-0 text-white'> © {year} Amesa Solutions - All rigths reserved</p>
    </section>
  );
}

export default Footer;
