import React, { useRef } from "react";
import { arrow, arrowYellow } from "../../assets/LandingPage";
import { useNavigate } from "react-router-dom";
import { easeInOut, easeOut, motion, useScroll, useTransform } from "motion/react";

const TITLE = "BATAM LINUX USER GROUP";
const LETTER_DELAY = 0.05;
const BOX_FADE_DURATION = 0.125;

const Hero = ({ title, subTitle }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["75%", "0%"]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tentang");
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="relative bg-cover bg-center flex h-187 overflow-hidden"
        style={{ 
          backgroundImage: `url(/images/bgPoltek.webp)`,
          backgroundPositionY: bgY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/10 to-white/100 z-0"></div>
        {/* konten */}
        <div className="lg:max-w-screen-lg mx-auto w-full z-10">
          <div className="pt-36">
            <motion.p
              className="text-gray-800 mb-1 w-fit text-lg font-bold bg-primary px-3 py-0.5"
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.5}}
            >
              Selamat datang di
            </motion.p>
            <div className="flex flex-col items-center w-113">
              <h1 className="text-4xl font-black text-gray-800">
                {TITLE.split("").map((l, i) => {
                  return <motion.span className="relative" key={`${TITLE} - ${i}`}>
                    <motion.span 
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      transition={{
                        delay: 0.6 + i * LETTER_DELAY,
                        duration: 0
                      }}
                      >{l}</motion.span>
                    <motion.span 
                      className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
                      initial={{opacity:0}}
                      animate={{opacity:[0, 1, 0]}}
                      transition={{
                        delay: 0.6 + i * LETTER_DELAY,
                        times:[0, 0.1, 1],
                        duration: BOX_FADE_DURATION
                      }}
                    ></motion.span>
                  </motion.span>
                })}
              </h1>
              <svg width="608" height="19" viewBox="0 0 608 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-75">
               <motion.path  
                initial={{pathLength: 0, opacity: 0}}
                animate={{pathLength: 1, opacity: 1}}
                transition={{
                  pathLength: {duration: 1.25, delay: 0.6, ease: easeOut},
                  opacity: {duration: 0, delay: 0.6}
                }}
                d="M2.00007 16.3963C134.888 7.83063 441.65 -5.66617 605.594 8.87163" 
                stroke="#F9D00A" 
                stroke-width="4" 
                stroke-linecap="round"/>
              </svg>
              <motion.h2
                className="text-sm pb-3 text-gray-800 text-justify"
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.8, duration: 0.5}}
              >
                {subTitle}
              </motion.h2>
            </div>

            <motion.div
              initial={{opacity: 0, x: 2, y: 2, scale: 0.8}}
              animate={{opacity: 1, x: 0, y: 0, scale: 1}}
              transition={{delay: 1, duration: 0.5, ease: easeInOut}}
            >
              <button
                onClick={handleClick}
                className="flex mt-4 items-center cursor-pointer bg-gray-800 pe-0.5 w-60 text-sm group space-x-6 rounded-full text-gray-200 justify-between hover:w-112 hover:bg-primary hover:text-gray-800 transition-all duration-600 ease-out"
              >
                <p className="ps-6 font-bold py-3.5 transition-all duration-500">
                  Telusuri tentang kami!
                </p>
                <div className="bg-primary group-hover:bg-gray-800 p-3 transition-all duration-500 rounded-full">
                  <img
                    src={arrow}
                    className="w-4.5 h-4.5 transform group-hover:text-primary from-purple-400 group-hover:h-0 group-hover:w-0 group-hover:opacity-0"
                    alt="arrow"
                  />
                  <img
                    src={arrowYellow}
                    className="w-0 h-0 opacity-0 transform group-hover:text-primary from-purple-400 group-hover:h-4.5 group-hover:w-4.5 group-hover:opacity-100"
                    alt="arrow"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-[45%] z-0 absolute right-0 bg-cover hidden md:block"
          style={{ backgroundImage: `url(/images/ellipse.webp)` }}
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.8, duration: 0.5}}
        >
          <img src="/images/barelang.webp" alt="barelang" />
        </motion.div>

        {/* Bagian kanan (gambar ellipse + barelang) */}
      </motion.div>
    </>
  );
};

export default Hero;
