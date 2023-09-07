import React, { useRef } from "react";
import contactImg from "../../assets/Contact-us.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contents() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vh0jlv",
        "template_ol81s62",
        form.current,
        "ACNB1s1X1LDxbA4x5"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("thank you for sending message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section>
      <Toaster position="top-right" reverseOrder={true} />
      <div className="container overflow-hidden">
        {/* ===== title start ===== */}
        <div
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          className="flex items-center justify-center relative"
        >
          <h2 className="text-center max-[390px]:text-4xl text-5xl md:text-7xl font-bold text-[#f1f1f1]">
            Contact Us
          </h2>
          <h2 className="text-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-[390px]:text-lg text-2xl font-bold text-primaryColor">
            Contact Us
          </h2>
        </div>
        {/* ===== title end ===== */}

        {/* ===== contant start ===== */}
        <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-center mt-9 gap-5  ">
          <figure className="w-full sm:w-[28rem]   ">
            <img src={contactImg} />
          </figure>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full sm:w-[50%] flex flex-col gap-3 items-center"
          >
            <div className="flex flex-col w-full">
              <input
                id="input"
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
              />
              <label id="line-hover" htmlFor=""></label>
            </div>
            <div className="flex flex-col w-full">
              <input
                id="input"
                type="email"
                name="from_email"
                placeholder="Email"
                className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
              />
              <label id="line-hover" htmlFor=""></label>
            </div>
            <div className="flex flex-col w-full">
              <input
                id="input"
                type="text"
                name="from_number"
                placeholder="Phone"
                className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
              />
              <label id="line-hover" htmlFor=""></label>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                className="w-full bg-gray-100 rounded outline-none p-3 resize-none"
                placeholder="Enter Message "
                name="message"
                id="input"
                cols="20"
                rows="5"
              ></textarea>
              <label id="line-hover" htmlFor=""></label>
            </div>

            <button
              type="submit"
              className="w-full bg-primaryColor flex gap-3 items-center justify-center p-3 px-4 border border-solid border-primaryColor
              rounded-[5px] text-white hover:bg-white hover:text-primaryColor ease duration-200"
            >
              <i class="ri-send-plane-fill"></i>
              Send Message
            </button>
          </form>
        </div>
        {/*===== contact end ====*/}
        {/*===== icons ====*/}
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <h2 className="text-primaryColor text-3xl font-medium">
            Get in Toach Us
          </h2>
          <div className="w-full flex flex-col sm:flex-row justify-center gap-12 md:gap-32  items-center mt-8 ">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="flex flex-col items-center gap-3"
            >
              <div className="bg-primaryColor w-20 h-20 flex items-center justify-center text-white rounded-full text-3xl">
                <i class="ri-map-pin-fill"></i>
              </div>
              <p className="text-headingColor text-xl">Keyna, Nairobi</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="flex flex-col items-center gap-3"
            >
              <div className="bg-primaryColor w-20 h-20 flex items-center justify-center text-white rounded-full text-3xl">
                <i class="ri-mail-send-fill"></i>
              </div>
              <p className="text-headingColor text-xl">
                amesasolution@gmail.com
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1400"
              className="flex flex-col items-center gap-3"
            >
              <div className="bg-primaryColor w-20 h-20 flex items-center justify-center text-white rounded-full text-3xl">
                <i class="ri-phone-fill"></i>
              </div>
              <p className="text-headingColor text-xl">+254 743 537705</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contents;
