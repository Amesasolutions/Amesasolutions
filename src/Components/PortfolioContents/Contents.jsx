import React, { useState } from "react";
import portfolios from "./data";
import Model from "./Model";

function Contents() {
  const [nextItem, setNextItem] = useState(6);
  const [showModel, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleLoadMore = () => {
    setNextItem((prev) => prev + 3);
  };

  const showModelHandle = (id) => {
    setShowModal(true);
    setActiveId(id);
  };

  return (
    <section>
      <div className="container flex flex-col items-center gap-6">
        {/* ===== title start ===== */}
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="flex items-center justify-center relative"
        >
          <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-7xl font-bold text-[#f1f1f1]">
            Portfolio
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            Portfolio
          </h2>
        </div>
        {/* ===== title end ===== */}
        {/* ===== Content start ===== */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {portfolios.slice(0, nextItem)?.map((portfolio, index) => (
            <div
              key={portfolio.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] overflow-hidden"
            >
              <figure>
                <img src={portfolio.imgUrl} alt="" className="rounded-lg" />
              </figure>
              <div className="rounded-lg bg-primaryColor bg-opacity-40 w-full h-full absolute top-0 left-0 hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModelHandle(portfolio.id)}
                    className="bg-secondaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-secondaryColor hover:border-white
              rounded-[5px] text-white hover:bg-primaryColor hover:text-white ease duration-200"
                  >
                    <i class="ri-eye-fill"></i>
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {nextItem < portfolios.length && (
          <button
            onClick={handleLoadMore}
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-primaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-primaryColor
              rounded-[5px] text-white hover:bg-white hover:text-primaryColor ease duration-200"
          >
            <i class="ri-refresh-line"></i>
            Load More
          </button>
        )}
        {/* ===== Content end ===== */}
      </div>
      {showModel && <Model activeId={activeId} setShowModal={setShowModal} />}
    </section>
  );
}

export default Contents;
