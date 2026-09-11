import React from "react";
import { motion, easeOut, stagger } from "motion/react";
import {
  Bintang,
  BintangBesar,
  ArrowVisiMisi,
  FotoBlug,
  Lingkaran,
  Next,
} from "../../assets/LandingPage/index";
import FlipDown from "../Animation/FlipDown";
import FadeUp from "../Animation/FadeUp";
import FadeRight from "../Animation/FadeRight";
import FadeLeft from "../Animation/FadeLeft";

const VisiMisiBlug = () => {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.2),
        when: "beforeChildren",
        ease: easeOut
      }
    }
  }
  const itemVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 0.5, ease: easeOut}
    }
  }

  return (
    <div className="bg-white relative min-h-screen flex items-center overflow-hidden ">
      {/* Background Decorations */}
      <div
        className="absolute top-132 left-32 w-48 h-48 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BintangBesar})` }}
      />
      <div
        className="absolute top-24 right-24 w-36 h-36 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Bintang})` }}
      />

      <section className="relative z-10 w-full lg:max-w-screen-lg mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-4">
          {/* Left Column - Image & Year Badge */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <motion.img
              src={FotoBlug}
              alt="Foto BLUG"
              className="rounded-2xl w-full max-w-md shadow-lg z-10"
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true, amount:0.5}}
              transition={{ duration: 0.5, ease: easeOut }}
            />
            <motion.div 
              className="absolute -top-2 -left-4 w-52 z-20"
              initial={{opacity: 0, scale: 1.2}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true, amount:0.5}}
              transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
            >
              <div
                className="w-full h-52 bg-cover bg-center relative z-20"
                style={{ backgroundImage: `url(${Lingkaran})` }}
              />
              <div className="absolute top-18 left-6 w-40 text-center z-30">
                <h2 className="text-yellow-500 font-bold text-4xl">2025</h2>
                <p className="text-sm font-semibold">BPH BLUG</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visi & Misi */}
          <div className="w-full md:w-1/2 relative z-10 flex items-center">
            <div className="max-w-xl">
              <FadeUp>
                <div
                  className="absolute -right-12 top-48 w-24 h-48"
                  style={{ backgroundImage: `url(${ArrowVisiMisi})` }}
                />
              </FadeUp>
              
              <FlipDown>
                <span className="inline-block bg-yellow-300 text-xs font-bold px-3 py-1 mb-2 rounded">
                  Siapa Kami?
                </span>
              </FlipDown>

              <FadeRight>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  Visi BLUG
                </h2>
              </FadeRight>
              <FadeLeft delay={0.2}>
                <p className="text-gray-700 mb-6 text-justify">
                  Menjadikan BLUG sebagai organisasi yang memprioritaskan kepedulian terhadap setiap 
                  anggota, membantu mereka berkembang dalam hard skill & soft skill, serta memberikan 
                  kontribusi yang bermakna bagi masyarakat luas.
                </p>
              </FadeLeft>

              <FadeRight>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                  Misi BLUG
                </h2>
              </FadeRight>
              <motion.ul 
                className="space-y-3 text-gray-700"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
              >
                {[
                  {
                    text: "Melibatkan semua anggota dalam kolaborasi setiap kegiatan BLUG",
                    delay: "200"
                  },
                  {
                    text: "Aktif dalam pengembangan mutu anggota",
                    delay: "400"
                  },
                  {
                    text: "Memberikan kontribusi yang bermanfaat bagi masyarakat luas, terutaman di kalangan mahasiswa Polibatam",
                    delay: "600"
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <img
                      src={Next}
                      alt="Next Icon"
                      className="w-10 h-10 mt-1"
                    />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisiMisiBlug;
