import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/amesasolutions.png";
import { useFirebase } from "../../Context/firebase";

function Signup() {
  const { SignupWithGoogle, user , logOut} = useFirebase()
  const navigate = useNavigate()

  const handleSignup = () => {
    SignupWithGoogle()
  }

  useEffect(() => {
    if(user) {
        if(user.email === "amesasolution@gmail.com") {
            navigate("/admin")
        } else {
            logOut()
            navigate('/')
        }
    }
  }, [user, navigate])

  return (
    <div className="w-full h-screen bg-white flex flex-col gap-8 items-center justify-center">
      {/* logo */}
      <Link to="/">
        <figure className="w-[30rem]">
          <img src={logo} alt="Amesa solutions" className="w-full" />
        </figure>
      </Link>
      {/* google signup button */}
      <button 
      onClick={handleSignup}
      className="cursor-pointer bg-white flex items-center justify-center gap-3 py-4 px-5 rounded-lg shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]">
        {/* google icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.7516 18.3498C33.7516 17.0548 33.6444 16.1098 33.4123 15.1298H18.3231V20.9748H27.1801C27.0016 22.4273 26.0373 24.6148 23.8944 26.0847L23.8644 26.2804L28.6354 29.9025L28.9659 29.9348C32.0015 27.1873 33.7516 23.1448 33.7516 18.3498Z"
            fill="#4285F4"
          />
          <path
            d="M18.3221 33.7499C22.6613 33.7499 26.3041 32.3498 28.9649 29.9349L23.8934 26.0848C22.5363 27.0123 20.7149 27.6598 18.3221 27.6598C14.0721 27.6598 10.465 24.9123 9.17918 21.1148L8.99071 21.1305L4.02982 24.893L3.96494 25.0698C6.60776 30.2148 12.0363 33.7499 18.3221 33.7499Z"
            fill="#34A853"
          />
          <path
            d="M9.18008 21.1151C8.8408 20.1351 8.64445 19.085 8.64445 18.0001C8.64445 16.915 8.8408 15.865 9.16223 14.8851L9.15324 14.6763L4.13018 10.8534L3.96583 10.93C2.87659 13.065 2.25159 15.4626 2.25159 18.0001C2.25159 20.5376 2.87659 22.935 3.96583 25.07L9.18008 21.1151Z"
            fill="#FBBC05"
          />
          <path
            d="M18.3222 8.33996C21.34 8.33996 23.3756 9.61745 24.5364 10.685L29.0721 6.345C26.2865 3.80751 22.6614 2.25 18.3222 2.25C12.0364 2.25 6.60778 5.78497 3.96494 10.9299L9.16136 14.885C10.4651 11.0875 14.0722 8.33996 18.3222 8.33996Z"
            fill="#EB4335"
          />
        </svg>
        <span className="text-lg text-headingColor">Sign Up With Google</span>
      </button>
    </div>
  );
}

export default Signup;
