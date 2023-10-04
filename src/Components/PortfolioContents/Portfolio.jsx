import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Context/firebase";

function Portfolio({ Project, showModelHandle }) {
  const { getImageURL } = useFirebase();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getImageURL(Project.imageUrl).then((url) => setUrl(url));
  }, []);

  console.log(url);

  console.log(Project);

  return (
    <div
      key={Project.id}
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] overflow-hidden"
    >
      <figure className="w-full overflow-hidden">
        {url === null ? (
          <div
            role="status"
            className="!w-[350px] sm:!w-[400px] !h-[220px] flex items-center justify-center bg-gray-300 rounded animate-pulse "
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
          <img src={url} alt="" className="rounded-lg" />
        )}
      </figure>

      <div className="rounded-lg bg-primaryColor bg-opacity-40 w-full h-full absolute top-0 left-0 hidden group-hover:block ">
        <div className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => showModelHandle(Project.id)}
            className="bg-secondaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-secondaryColor hover:border-white
    rounded-[5px] text-white hover:bg-primaryColor hover:text-white ease duration-200"
          >
            <i class="ri-eye-fill"></i>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
