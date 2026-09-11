import React from 'react';
import {
  cyberlabs,
  logo_batamdev,
  bg_pengurus,
} from '../../assets/LandingPage/index.js';
import { useNavigate } from 'react-router-dom';
import { motion, easeOut } from 'motion/react';
import FlipDown from '../Animation/FlipDown.jsx';
import ZoomIn from '../Animation/ZoomIn.jsx';

const Partnership = () => {
  const navigate = useNavigate();

  const navToPengurus = () => {
    navigate('/pengurus');
  };

  return (
    <section>
      <div className='flex bg-primary w-full p-5 justify-center gap-30'>
        <motion.img 
          src={cyberlabs} 
          alt="Logo cyberlabs" 
          className='object-contain w-25 sm:w-50 h-auto'
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount:0.5}}
          transition={{ duration: 0.5, ease: easeOut }}
        />
        <motion.img 
          src={logo_batamdev} 
          alt="Logo Batam Dev" 
          className='object-contain w-15 sm:w-30 h-auto'
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, amount:0.5}}
          transition={{ duration: 0.5, ease: easeOut }}
        />
      </div>
      <div className='flex flex-col bg-secondary-dark pt-10 sm:pt-25 items-center'>
        <FlipDown>
          <div className='bg-primary inline-block px-5 py-2 text-[0.5rem] sm:text-xs font-bold text-center'>
            <p>Temui Tim Kami</p>
          </div>
        </FlipDown>
        <ZoomIn>
          <h3 className='text-white font-black text-md sm:text-4xl my-5'>Badan Pengurus Harian BLUG 2025</h3>
        </ZoomIn>
      </div>
      <div className='flex w-full bg-secondary-dark relative'>
        <motion.img 
          src={bg_pengurus} 
          alt="Pengurus" 
          className='w-full h-auto' 
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount:0.2}}
          transition={{ duration: 0.5, ease: easeOut }}
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 sm:p-20 bg-black/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
          <button onClick={navToPengurus} className='text-primary font-bold text-xs sm:text-sm border-4 rounded-full px-4 py-2 cursor-pointer'>Lihat Lebih Lanjut</button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
