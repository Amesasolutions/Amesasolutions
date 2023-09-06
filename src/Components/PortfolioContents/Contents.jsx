import React from "react";

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
            Portfolio
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            Portfolio
          </h2>
        </div>
        {/* ===== title end ===== */}
      </div>
    </section>
  );
}

export default Contents;
