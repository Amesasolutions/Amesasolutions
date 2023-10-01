import React, {useState } from "react";
import Model from "./Model";
import { useFirebase } from "../../Context/firebase";
import Portfolio from "./Portfolio";

function Contents() {
  const { projects, loading } = useFirebase();

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
        <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
          {loading === false ? (
            <div className="font-medium text-2xl flex gap-3 items-center justify-center">
              <span className="w-8 h-8 border-2 rounded-full border-primaryColor border-l-gray-200 animate-spin"></span>
              <h3>Loading...</h3>
            </div>
          ) : (
            <>
              {projects.slice(0, nextItem).map((project) => (
                <Portfolio
                  key={project.id}
                  Project={project}
                  showModelHandle={showModelHandle}
                />
              ))}
            </>
          )}
          {nextItem < projects.length && (
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
      </div>
    </section>
  );
}

export default Contents;
