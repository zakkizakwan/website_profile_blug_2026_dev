import { motion } from 'motion/react';
import React from 'react';
import { bgStar, longArrow1, longArrow2 } from '../../assets/LandingPage';
import FadeLeft from '../Animation/FadeLeft';
import FadeRight from '../Animation/FadeRight';
import FadeUp from '../Animation/FadeUp';
import ZoomIn from '../Animation/ZoomIn';
import ZoomOut from '../Animation/ZoomOut';

const VideoSection = () => {
  const goToYoutube = () => {
    window.open(
      'https://www.youtube.com/@batamlinux9734',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      className="relative pt-50 pb-100 bg-white bg-no-repeat"
      style={{ backgroundImage: `url(${bgStar})` }}
    >
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="flex relative flex-col md:flex-row items-center gap-8">
          <motion.img
            src={longArrow1}
            alt="arrow"
            className="absolute w-3/4.5 -top-125 ps-3.5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <motion.img
            src={longArrow2}
            alt="arrow-2"
            className="absolute -bottom-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          />
          {/* Video Placeholder */}
          {/* <div className="w-full md:flex-1 flex justify-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-full max-w-[550px] h-[320px] bg-[#333] rounded-xl flex items-center justify-center">
              <div className="w-0 h-0 border-l-[30px] border-l-primary border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent"></div>
            </div>
          </div> */}
          <ZoomOut>
            <div className="aspect-video min-h-72 rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/eQtabWVthvk?si=XccyKqBM_j4gI5IM&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="w-full h-full"
              ></iframe>
            </div>
          </ZoomOut>

          {/* Content */}
          <div className="w-full md:flex-1 flex justify-center md:justify-start">
            <div className="w-full max-w-[550px]">
              <FadeLeft>
                <span className="inline-block bg-primary text-gray-800 text-sm font-bold px-2 py-1 mb-2">
                  Siapa Kami?
                </span>
              </FadeLeft>
              <FadeRight delay={0.4}>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                  Video Profil BLUG 2025
                </h2>
              </FadeRight>
              <FadeUp delay={0.4}>
                <p className="text-gray-600 mb-5 text-justify">
                  Yuk, kenalan lebih dekat dengan kami. Lihat siapa saja yang
                  menjalankan organisasi ini, dengarkan suara mereka, dan
                  rasakan semangat yang kami bawa di setiap kegiatan. Mereka
                  bukan hanya anggota — mereka adalah wajah dari semangat kami!
                </p>
              </FadeUp>
              <ZoomIn delay={0.4}>
                <button
                  onClick={goToYoutube}
                  className="px-6 py-2 rounded-full font-bold border-4 border-gray-800 bg-primary text-gray-800 transition duration-200 hover:bg-gray-800 hover:text-primary hover:border-primary shadow-md active:bg-gray-800 active:text-primary active:shadow-inner cursor-pointer"
                >
                  Kunjungi Kanal
                </button>
              </ZoomIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
