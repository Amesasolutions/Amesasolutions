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
        {url === null ? (
          <div
            role="status"
            className="w-full  h-[230px] md:h-[340px] flex items-center justify-center bg-gray-300 rounded animate-pulse "
          >
            <svg
              class="w-10 h-10 text-gray-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <figure className="w-full">
            <img src={url} alt="" className="rounded-[8px] " />
          </figure>
        )}
        <div className="flex flex-col mt-5 gap-2">
          <h1 className="font-bold text-xl text-headingColor">
            {portfolio.title}
          </h1>
          <p className="whitespace-normal text-gray-600 text-xs sm:text-sm">
            {portfolio.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row  mt-3 gap-3 ">
          <h3 className="font-medium text-txtSmallColor">Technologies:</h3>
          <span className="text-sm text-[#777777]">
            {portfolio.technologies}
          </span>
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
