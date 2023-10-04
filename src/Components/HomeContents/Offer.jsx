import React from "react";
import icon01 from "../../assets/Web design.svg";
import icon02 from "../../assets/code.svg";

function Offer() {
  return (
    <section>
      <div className="container  overflow-hidden flex flex-col items-center justify-center">
        {/* ===== title start ===== */}
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="flex items-center justify-center relative"
        >
          <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-7xl font-bold text-[#f1f1f1]">
            What We Offer
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            What We Offer
          </h2>
        </div>
        {/* ===== title end ===== */}
        {/* ===== cards start ===== */}
        <div className="w-full pb-5 mt-14 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div 
          data-aos="fade-right"
          data-aos-duration="1300"
          className="w-full lg:w-[28rem] p-6 sm:p-9 bg-white shadow-lg rounded flex flex-col gap-3 items-center justify-center
          border-t-[4px] border-solid border-primaryColor cursor-pointer">
            <div className="w-[70px] h-[70px] flex items-center justify-center text-center bg-primaryColor text-white rounded-full">
              <img src={icon01} alt="" className="w-8" />
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-center">Web Design</h2>
            <p className="whitespace-normal text-center text-txtSmallColor max-[390px]:text-[0.6rem] text-[0.7rem] sm:text-[1rem]">
              Amesa Solutions is a skilled creative web design company that
              creates online solutions with cutting-edge design. Our client's
              business productivity will be increased by our websites'
              usability, pixel-perfect design, and compelling content that will
              keep users coming back for more.
            </p>
          </div>

          <div 
          data-aos="fade-left"
          data-aos-duration="1300"
          className="w-full lg:w-[28rem] p-6 sm:p-9 bg-white shadow-lg rounded flex flex-col gap-3 items-center justify-center
          border-t-[4px] border-solid border-primaryColor cursor-pointer">
            <div className="w-[70px] h-[70px] flex items-center justify-center text-center bg-primaryColor text-white rounded-full">
              <img src={icon02} alt="" className="w-8" />
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-center">Web Development</h2>
            <p className="whitespace-normal text-center text-txtSmallColor text-[0.7rem] sm:text-sm">
              One of the best full-service web design and development firms in
              East Africa, Amesa Solutions has a diverse portfolio of work
              completed for exceptional consumers. You've come to the correct
              place if you're looking for an honest collaborator who adheres to
              deadlines, does high-quality work, completes projects on schedule,
              and charges reasonable fees.
            </p>
          </div>
        </div>
        {/* ===== cards end ===== */}
      </div>
    </section>
  );
}

export default Offer;
