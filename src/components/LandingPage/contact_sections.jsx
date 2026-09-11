import React from "react";
import { Link } from "react-router-dom";
import FlipDown from "../Animation/FlipDown";
import FadeUp from "../Animation/FadeUp";
import ZoomIn from "../Animation/ZoomIn";

const ContactSections = () => {
  return (
    <div className="bg-contact bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center w-full h-[66.6667vh] py-20">
      <FlipDown>
        <div className="bg-primary p-3 rounded-xl mb-4 md:p-4 md:mb-5 xl:p-6 xl:mb-6 xl:rounded-2xl">
          <svg
            className="size-6 md:size-8"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2565 43.9996C33.339 43.9996 30.6454 43.3062 26.6119 41.0532C21.707 38.3031 17.9132 35.7642 13.0349 30.8996C8.33143 26.2 6.04257 23.1573 2.83915 17.3292C-0.779804 10.7488 -0.162892 7.29944 0.526713 5.82523C1.34795 4.06324 2.56016 3.00939 4.127 1.9634C5.01696 1.38043 5.95875 0.880688 6.94044 0.470523C7.03867 0.42829 7.13003 0.388022 7.21156 0.351682C7.69782 0.132662 8.43458 -0.198324 9.36781 0.155251C9.99061 0.389004 10.5466 0.867314 11.417 1.7267C13.2019 3.48672 15.6411 7.4065 16.5409 9.33152C17.145 10.6289 17.5448 11.4854 17.5458 12.4459C17.5458 13.5705 16.98 14.4377 16.2933 15.3737C16.1646 15.5495 16.0369 15.7175 15.9132 15.8805C15.1656 16.8627 15.0015 17.1465 15.1096 17.6533C15.3287 18.6718 16.9623 21.7037 19.6471 24.3821C22.3318 27.0604 25.2769 28.5906 26.2995 28.8086C26.828 28.9216 27.1178 28.7507 28.1316 27.9767C28.2769 27.8658 28.4263 27.7509 28.5824 27.6359C29.6296 26.8571 30.4568 26.3061 31.555 26.3061H31.5609C32.5167 26.3061 33.335 26.7206 34.6907 27.4041C36.4589 28.2959 40.4973 30.7032 42.2685 32.4897C43.13 33.358 43.6103 33.9119 43.8451 34.5336C44.1988 35.4696 43.8658 36.2033 43.6487 36.6943C43.6123 36.7759 43.572 36.8652 43.5298 36.9644C43.1163 37.9442 42.6135 38.8838 42.0278 39.7714C40.9836 41.3331 39.9256 42.5421 38.1593 43.3642C37.2524 43.7931 36.2598 44.0104 35.2565 43.9996Z"
              fill="black"
            />
          </svg>
        </div>
      </FlipDown>
      <FadeUp>
        <p
          className="
        text-gray-200 font-black text-center mb-8 px-5 leading-normal
        xs:px-8 xs:text-xl
        sm:text-2xl sm:max-w-2xl
        md:text-3xl
        lg:text-4xl lg:max-w-4xl
        2xl:text-5xl 2xl:max-w-none 2xl:leading-16
        "
        >
          Butuh informasi lebih lanjut?
          <br />
          Jangan ragu untuk menghubungi kami
        </p>
      </FadeUp>
      <ZoomIn>
        <button
          className="
        bg-secondary-dark border-4 border-primary rounded-full px-3 py-1.5 duration-400 cursor-pointer
        hover:bg-primary hover:border-secondary-dark  hover:text-secondary-dark
        active:bg-primary active:border-secondary-dark  active:text-secondary-dark
        text-primary text-center text-xs font-bold 
        xs:text-sm
        md:text-base md:px-4
        2xl:py-2
        "
        >
          <Link to={"/kontak"}>Hubungi Kami!</Link>
        </button>
      </ZoomIn>
    </div>
  );
};

export default ContactSections;
