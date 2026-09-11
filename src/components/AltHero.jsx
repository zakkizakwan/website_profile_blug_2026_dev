import { easeOut, motion } from 'motion/react';
import React from 'react';
import greenLine from '../assets/AltHero/line_green.png'; // Import tetap di sini
import background from '../assets/HubungiPage/background.png'; // Import tetap di sini

const AltHero = ({ label, title, subtitle, addStyle }) => {
  return (
    <div
      className="w-full bg-cover bg-center py-32 text-center text-black"
      style={{ backgroundImage: `url(${background})` }}
    >
      <motion.div
        className="bg-yellow-400 bg-opacity-60 inline-block px-4 py-1 text-sm font-bold"
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.75, ease: easeOut }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        {label}
      </motion.div>
      <motion.h2
        className="text-3xl md:text-4xl font-black mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
      >
        {title} <br />
        {(() => {
          switch (addStyle) {
            case 'tentang':
              return (
                <div className="flex flex-col">
                  <h2>
                    Go <span className="text-accent-2">OPEN-SOURCE!</span>
                  </h2>
                  <img
                    src={greenLine}
                    alt="Green Line"
                    className=" relative w-60 self-center left-5"
                  />
                </div>
              );
            case 'pengurus':
              return (
                <div className="flex flex-col">
                  <h2 className="text-primary">
                    Batam Linux User Group{' '}
                    <span className="text-gray-800">2025</span>
                  </h2>
                  <svg
                    className="relative w-100 self-center right-11"
                    width="535"
                    height="17"
                    viewBox="0 0 535 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00002 14.7918C118.737 7.14757 388.22 -4.95214 532.248 7.80264"
                      stroke="#F9D00A"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              );
            case 'kontak':
              return <div>Hubungi Kami</div>;
            default:
              return subtitle ? <span>{subtitle}</span> : null;
          }
        })()}
      </motion.h2>
    </div>
  );
};

export default AltHero;
