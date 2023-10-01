import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Context/firebase";

function Portfolio({ Project, showModelHandle }) {
  const { getImageURL } = useFirebase();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getImageURL(Project.imageUrl).then((url) => setUrl(url));
  }, []);

  console.log(url)

  console.log(Project)

  return (
    <div
      key={Project.id}
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] overflow-hidden"
    >
      <figure>
        <img src={url} alt="" className="rounded-lg" />
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
