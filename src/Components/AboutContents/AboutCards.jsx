import React from "react";
import icon1 from "../../assets/w-1icon.png";
import icon2 from "../../assets/w-2icone.png";
import icon3 from "../../assets/w-icon3.png";

function AboutCards() {
  return (
    <section>
      <div className="container overflow-hidden">
        {/*====== start here ======*/}
        <div className="flex flex-col items-center ">
          <h1 data-aos="fade-up"
              data-aos-duration="1300"
          className="text-center font-bold text-3xl pb-5 text-primaryColor">
            Why work with us ?
          </h1>
          {/* ===== Cards start ====== */}
          <div className="w-full flex flex-col md:flex-row items-center p-2 sm:p-4 gap-8">
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="w-full lg:w-[24rem] bg-white shadow-lg rounded p-4 sm:p-5 flex flex-col gap-2 items-center justify-center
          border-t-[4px] border-solid border-primaryColor"
            >
              <div className="mt-4 w-[60px] h-[60px] flex items-center justify-center text-center bg-primaryColor text-white rounded-full">
                <img src={icon1} alt="code icon" className="w-8" />
              </div>
              <h3 className="text-xl font-[500] py-2">High Quality Code</h3>
              <p className="md:mx-[1.5rem] pb-6 text-center text-[0.7rem] whitespace-normal">
                Now that we have a strong handle on the newest platforms and
                frameworks for development, we can unleash high-end security,
                agility, and functionality.
              </p>
            </div>

            <div
            data-aos="fade-up"
            data-aos-duration="1300"
              className="w-full lg:w-[24rem] bg-white shadow-lg rounded p-4 sm:p-5 flex flex-col gap-2 items-center justify-center
          border-t-[4px] border-solid border-primaryColor"
            >
              <div className="mt-4 w-[60px] h-[60px] flex items-center justify-center text-center bg-primaryColor text-white rounded-full">
                <img src={icon2} alt="code icon" className="w-8" />
              </div>
              <h3 className="text-xl font-[500] py-2">Transparency</h3>
              <p className="mx-auto pb-6 text-center text-[0.7rem] whitespace-normal md:mx-[1.5rem]">
                Our four pillars of openness in our development work and
                long-term relationships with our esteemed clients are quality,
                time, cost, and value.
              </p>
            </div>

            <div 
            data-aos="fade-left"
            data-aos-duration="1300"
            className="w-full lg:w-[24rem] bg-white shadow-lg rounded p-4 sm:p-5 flex flex-col gap-2 items-center justify-center
          border-t-[4px] border-solid border-primaryColor">
              <div className="mt-4 w-[60px] h-[60px] flex items-center justify-center text-center bg-primaryColor text-white rounded-full">
                <img src={icon3} alt="code icon" className="w-8" />
              </div>
              <h3 className="text-xl font-[500] py-2">Full flexibility</h3>
              <p className="mx-auto pb-6 text-center text-[0.7rem] whitespace-normal md:mx-[1.5rem]">
                Our approach caters to startups, SMBs, and large companies,
                allowing agile software and website revitalization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCards;
