import React from "react";
import {
  Bintang,
  BintangBesar,
  Garis,
  BelajarSiber,
  Hacker,
  Dot,
  BelajarProgramming,
  Ngoding,
} from "../../assets/LandingPage/index";
import FlipDown from "../Animation/FlipDown";
import FadeUp from "../Animation/FadeUp";
import { motion, easeOut } from "motion/react";
import FlipUp from "../Animation/FlipUp";

const ProgramUnggulan = () => {
  return (
    <div className="bg-white font-sans text-gray-800 overflow-x-hidden">
      <div className="max-w-5xl mx-auto py-12 relative">
        <img
          src={BintangBesar}
          alt="Bintang Besar"
          className="absolute top-32 -left-4 w-40 z-0"
        />
        <img
          src={Bintang}
          alt="Bintang"
          className="absolute bottom-0 right-4 w-24 z-0"
        />

        <div className="text-center">
          <FlipDown>
            <div className="inline-block bg-primary font-bold px-6 py-1 mb-2">
              Keseruan Belajar Bareng
            </div>
          </FlipDown>
          <FadeUp>
            <h1 className="text-4xl font-extrabold mb-2">
              Program Unggulan: BLUGCAMP!
            </h1>
          </FadeUp>
            {/* <img
              src={Garis}
              alt="Garis"
              className="mx-auto mt-1 w-40 relative left-40"
            /> */}
            <svg className="mx-auto mt-1 w-50 relative left-40" width="257" height="16" viewBox="0 0 257 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                d="M2.00017 13.3562C58.0488 5.78697 187.089 -5.4201 254.861 10.3056" 
                stroke="#F9D00A" 
                stroke-width="4" 
                stroke-linecap="round"
                initial={{pathLength: 0, opacity: 0}}
                whileInView={{pathLength: 1, opacity: 1}}
                viewport={{once: true, amount:0.5}}
                transition={{
                    pathLength: {duration: 1.25, ease: easeOut},
                    opacity: {duration: 0, delay: 0.6}
                }}
              />
            </svg>
        </div>
        
        <FlipUp>
          <div
            className="group lg:max-w-screen-lg mx-auto rounded-xl flex items-center justify-between px-6 py-10 mt-16 shadow transition-shadow hover:shadow-[0_0_30px_#facc15] overflow-hidden relative duration-1000 ease-in-out"
            style={{ backgroundColor: "#fefce8" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${BelajarSiber})` }}
            ></div>
            <div className="relative max-w-lg z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
              <span className="text-xs bg-primary px-3 py-1 rounded-full font-bold border-2 border-primary transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                Yuk, Kenal Linux Lebih Dalam!
              </span>
              <h2 className="text-2xl font-black mt-2 mb-3 underline decoration-primary">
                Belajar Linux Bareng Siber
              </h2>
              <p className="text-sm mb-4">
                Divisi Siber mengajak kamu kenalan lebih dalam dengan Linux dan dunia keamanan siber lewat kegiatan seru.
              </p>
              <div className="flex items-start space-x-3">
                <img src={Dot} alt="Bullet" className="w-3 h-16" />
                <div className="font-bold text-sm">
                  <p>BLUGCamp: Belajar Linux dan dasar-dasar keamanan siber dari nol!</p>
                  <p className="mt-4">BnB & Workshop: Ngulik topik keamanan siber bareng pemateri kece!</p>
                </div>
              </div>
            </div>
            <img
              src={Hacker}
              alt="Hacker"
              className="w-44 z-10 transition-opacity duration-300 group-hover:opacity-0"
            />
          </div>
        </FlipUp>
        
        <FlipDown>
          <div
            className="group lg:max-w-screen-lg mx-auto rounded-xl flex items-center justify-between px-6 py-10 mt-6 shadow transition-shadow hover:shadow-[0_0_30px_#facc15] overflow-hidden relative duration-1000 ease-in-out"
            style={{ backgroundColor: "#fefce8" }}
            data-aos="flip-down"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${BelajarProgramming})` }}
            ></div>
            <div className="relative max-w-lg z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
              <span className="text-xs bg-primary px-3 py-1 rounded-full font-bold border-2 border-primary transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                Pengen Belajar Buat Website? Yuk
              </span>
              <h2 className="text-2xl font-black mt-2 mb-3 underline decoration-primary">
                Ngoding Bareng Programming
              </h2>
              <p className="text-sm mb-4">
                Divisi Programming siap nemenin kamu belajar ngoding sambil seru-seruan bareng teman-teman sefrekuensi!
              </p>
              <div className="flex items-start space-x-3">
                <img src={Dot} alt="Bullet" className="w-3 h-16" />
                <div className="text-sm font-bold text-gray-800 group-hover:text-white">
                  <p>BLUGCamp: Bootcamp internal buat kamu yang pengen jago ngoding!</p>
                  <p className="mt-4">BnB & Workshop: Belajar ngoding dari pemateri berpengalaman!</p>
                </div>
              </div>
            </div>
            <img
              src={Ngoding}
              alt="Ngoding"
              className="w-44 z-10 transition-opacity duration-300 group-hover:opacity-0"
            />
          </div>
        </FlipDown>
      </div>
    </div>
  );
};

export default ProgramUnggulan;
