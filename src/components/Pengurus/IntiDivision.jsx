import { easeOut, motion } from 'motion/react';
import React from 'react';
import { bgInti, intiImage } from '../../assets/Pengurus';
import FadeDown from '../Animation/FadeDown';
import ZoomOut from '../Animation/ZoomOut';

const IntiDivision = () => {
  return (
    <>
      <div
        className="w-full pt-20 flex flex-col justify-center items-center text-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgInti})` }}
      >
        <ZoomOut delay={0.5}>
          <h2 className=" text-gray-200 text-3xl md:text-4xl font-black">
            Divisi Inti
          </h2>
        </ZoomOut>
        <svg
          width="175"
          height="5"
          viewBox="0 0 230 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 2.5H230" // just a horizontal line (like your rect)
            stroke="#F9D00A"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
          />
        </svg>
        <FadeDown delay={0.5}>
          <p className="text-gray-200 mt-5">
            Divisi yang bertanggung jawab dalam menjaga organisasi tetap
            berjalan, mengurus administrasi
          </p>
          <p className="text-gray-200">
            dan kearsipan, serta menjaga permasalahan internal & eksternal.
          </p>
        </FadeDown>
        <motion.img
          src={intiImage}
          alt="divisiInti"
          className="w-[60%] mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        />
      </div>
    </>
  );
};

export default IntiDivision;
