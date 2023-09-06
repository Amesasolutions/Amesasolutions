import React from "react";
import { Link } from "react-router-dom";

function Dvider() {
  return (
    <section className="bg-primaryColor" >
      <div className="container flex flex-col items-center justify-center gap-3">
        <h2 className="font-bold text-3xl text-white">Are You Ready ?</h2>
        <p className="whitespace-normal text-center text-gray-200">
          Let's set up a couple of minutes to talk about your project.
        </p>
        <Link to="/Contact-us">
          <button
            className="bg-secondaryColor flex gap-3 items-center justify-center p-2 px-4 border border-solid border-secondaryColor hover:border-white
              rounded-[5px] text-white hover:bg-transparent hover:text-white ease duration-200"
          >
            <i class="ri-send-plane-fill"></i>
            Let's Talk
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Dvider;
