import React, { useEffect, useRef, useState } from "react";
import { pengurusDetail } from "../../data";
import FadeUp from "../Animation/FadeUp";
import {
  motion,
  useInView,
  easeOut,
  AnimatePresence,
  usePresenceData,
} from "motion/react";

const divisiVariants = [];

const TeamSectionMobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const divisi = ["inti", "programming", "siber", "medinfo", "HRD"];
  const divisiTotal = divisi.length;

  const [divisiIndex, setDivisiIndex] = useState(0);
  const [anggotaIndex, setAnggotaIndex] = useState(0);
  const [isDivisiChanging, setIsDivisiChanging] = useState(false);
  const [isAnggotaChanging, setIsAnggotaChanging] = useState(false);
  const [direction, setDirection] = useState(1);

  const dataDivisi = pengurusDetail[divisi[divisiIndex]];
  const anggota = dataDivisi?.anggota ?? [];
  const anggotaTotal = anggota.length;
  const currentAnggota = anggotaTotal > 0 ? anggota[anggotaIndex] : null;

  useEffect(() => {
    if (isDivisiChanging) {
      setAnggotaIndex(0);
      setIsDivisiChanging(false);
    }
  }, [isDivisiChanging]);

  const changeDivisi = (step) => {
    setIsDivisiChanging(true);
    setDirection(step);
    setDivisiIndex((prev) => (prev + step + divisiTotal) % divisiTotal);
    setTimeout(() => {
      setIsDivisiChanging(false);
    }, 300);
  };

  const changeAnggota = (step) => {
    setIsAnggotaChanging(true);
    setDirection(step);
    setAnggotaIndex((prev) => (prev + step + anggotaTotal) % anggotaTotal);
    setTimeout(() => {
      setIsAnggotaChanging(false);
    }, 300);
  };

  return (
    <div className="w-full bg-[#2a2a2a] overflow-x-hidden">
      <div className="flex flex-col items-center py-15 max-w-screen-lg mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center w-full gap-4">
          <div className="flex items-center gap-2">
            <FadeUp>
              <button
                onClick={() => changeDivisi(-1)}
                disabled={isDivisiChanging}
                className="cursor-pointer text-primary p-2 sm:p-3 rounded-full transition duration-200 hover:scale-110 active:scale-95"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </FadeUp>

            <AnimatePresence custom={direction} mode="wait">
              <DivisiSlide key={divisiIndex} logo={dataDivisi.logoDivisi}/>
            </AnimatePresence>

            <FadeUp>
              <button
                onClick={() => changeDivisi(1)}
                disabled={isDivisiChanging}
                className="cursor-pointer text-primary p-2 sm:p-3 rounded-full transition duration-200 hover:scale-110 active:scale-95"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </FadeUp>
          </div>
          <AnimatePresence mode="wait">
            <motion.h2
              key={divisiIndex}
              className="text-gray-200 text-center font-black text-2xl capitalize"
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.8}}
              viewport={{once: true, amount:0.5}}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              Divisi {divisi[divisiIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* FOTO ANGGOTA SECTION */}
        <div ref={ref} className="flex justify-center items-center my-5">
          <motion.button
            onClick={() => changeAnggota(-1)}
            disabled={isAnggotaChanging}
            className="bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <svg
              width="18.75"
              height="16.5"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.58203 10.9238L22.4296 10.9238M2.58203 10.9238L11.0882 2.41769M2.58203 10.9238L11.0882 19.4299"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.button>

          <AnimatePresence custom={direction} mode="wait">
            <AnggotaSlide key={`${divisiIndex}-${anggotaIndex}`} foto={currentAnggota?.foto} />
          </AnimatePresence>

          <motion.button
            onClick={() => changeAnggota(1)}
            disabled={isAnggotaChanging}
            className="bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <svg
              width="18.75"
              height="16.5"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8477 10.9238L2.00004 10.9238M21.8477 10.9238L13.3415 2.41769M21.8477 10.9238L13.3415 19.4299"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        {/* Detail Divisi Section */}
        <div className="w-full flex flex-col gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={divisiIndex}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 50}}
              viewport={{once: true, amount:0.5}}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <div className="w-full bg-primary p-2 rounded-t-lg">
                <p className="text-sm font-bold">Deskripsi</p>
              </div>
              <div className="p-2 border-2 border-primary rounded-b-lg">
                <p className="text-sm text-gray-200">{dataDivisi.deskripsi}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {dataDivisi.bullet.map((text, i) => (
            <AnimatePresence mode="wait">
              <motion.div key={`${divisiIndex}-${i}`} className="flex flex-col justify-center gap-2"
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                exit={{opacity:0}}
                viewport={{once: true, amount:0.5}}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <h2 className="text-xl text-gray-200 font-bold">{text}</h2>
                <hr className="text-primary border-t-3 rounded" />
                <p className="text-sm text-gray-200">
                  {dataDivisi.bulletDesc[i]}
                </p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};

//Slide Divisi
const DivisiSlide = ({ logo }) => {
  const direction = usePresenceData();

  return (
    <motion.img
      src={logo}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, x: direction * -50 }}
      transition={{ duration: 0.3, ease: easeOut }}
      alt=""
      className="w-15 h-15"
    />
  );
};

const AnggotaSlide = ({foto}) => {
  const direction = usePresenceData();

  return(
    <motion.img
      src={foto}
      className="size-[85%]"
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, x: direction * -50 }}
      transition={{ duration: 0.3, ease: easeOut }}
    />
  )
}

export default TeamSectionMobile;
