import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Context/firebase";

function Model({ activeId, setShowModal }) {
  const [url, setUrl] = useState(null);

  const { projects, getImageURL } = useFirebase();

  const portfolio = projects.find((item) => item.id === activeId);

  useEffect(() => {
    getImageURL(portfolio.imageUrl).then((url) => setUrl(url));
  });

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-30 z-[100]">
      <div
        className="bg-white w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 transform 
        -translate-x-1/2 -translate-y-1/2 p-5 rounded-[8px] "
      >
        <figure className="w-full">
          <img src={url} alt="" className="rounded-[8px] " />
        </figure>
        <div className="flex flex-col mt-5 gap-2">
          <h1 className="font-bold text-xl text-headingColor">
            {portfolio.title}
          </h1>
          <p className="whitespace-normal text-gray-600 text-xs sm:text-sm">
            {portfolio.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row  mt-3 gap-3">
          <h3 className="font-medium text-txtSmallColor">Technologies:</h3>
          <div className="flex flex-wrap gap-3">
            {/* {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="py-1 px-2 bg-gray-200 text-gray-500 text-[14px] rounded-[5px] "
              >
                {tech}
              </span>
            ))} */}
            <span>{portfolio.technologies}</span>
          </div>
        </div>
        <a
          href={portfolio.siteUrl}
          target="_blank"
          className="mt-4 w-full bg-primaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-primaryColor hover:border-secondaryColor
              rounded-[5px] text-white hover:bg-secondaryColor hover:text-white ease duration-200"
        >
          <i class="ri-eye-fill"></i>
          Live Website
        </a>
        <div
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 bg-white w-[40px] h-[40px] leading-[40px] rounded-full text-center text-primaryColor text-xl cursor-pointer"
        >
          <i class="ri-close-line"></i>
        </div>
      </div>
    </div>
  );
}

export default Model;
