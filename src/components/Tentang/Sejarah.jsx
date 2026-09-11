import React from 'react';
import { motion, easeOut } from 'motion/react';
import { poltek } from '../../assets/Tentang';
import FlipUp from '../Animation/FlipUp';
import FadeRight from '../Animation/FadeRight';
import FadeLeft from '../Animation/FadeLeft';

const Sejarah = () => {
  return (
    <section className="bg-[#2A2A2A] text-white py-16 px-4 md:px-8 font-gilroy">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        {/* Gambar */}
          <motion.div 
            className="relative rounded-[30px] overflow-hidden w-full max-w-5xl"
            initial={{opacity: 0, scale: 1.2}}
            animate={{opacity: 1, scale: 1}}
            transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
          >
            <img
              src={poltek}
              alt="Poltek"
              className="w-full h-auto object-cove"
            />
            <div className="absolute inset-0 bg-primary opacity-50" />
          </motion.div>

        {/* Konten */}
        <div className="text-left w-full max-w-5xl">
          {/* Label */}
          <FlipUp>
            <p className="text-sm font-semibold text-black bg-primary inline-block px-6 py-1 rounded-full mb-2">
              Penasaran ga sih?
            </p>
          </FlipUp>
          <br />
          {/* Judul */}
          <FadeRight>
            <h2 className="text-3xl md:text-4xl font-gilroy font-extrabold mb-8 inline-block border-b-[5px] border-primary pb-1">
              Sejarah terbentuknya Batam Linux User Group
            </h2>
          </FadeRight>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Paragraf Kiri */}
            <div className="md:w-[50%]">
              <FadeLeft>
                <p className="text-tertiary leading-relaxed text-justify">
                  Batam Linux User Group <b>(BLUG)</b> merupakan{' '}
                  <b>Komunitas Pecinta Linux Indonesia (KPLI) </b>
                  yang berlokasi di Kota Batam sebagai wadah yang digunakan untuk
                  kegiatan pembelajaran dan pengembangan sistem operasi{' '}
                  <b>GNU/Linux </b>
                  dan Open Source Software bagi masyarakat Kota Batam umumnya dan
                  mahasiswa Politeknik Negeri Batam. Berdiri pada tanggal 27
                  September 2003 di mana pada saat itu masih berstatus sebagai
                  komunitas dan bergabung sebagai ORMAWA di Politeknik Negeri
                  Batam pada tahun 2008 dan telah mengadakan berbagai kegiatan
                  internal maupun eksternal.
                </p>
              </FadeLeft>
            </div>

            {/* Garis Vertikal PEMISAH (abu tipis) */}
            <div className="hidden md:block w-px bg-gray-300  self-stretch" />

            {/* Quote + List */}
            <motion.div
              className="md:w-[45%] flex flex-col gap-6"
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true, amount:0.5}}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              {/* Quote Card */}
              <div className="bg-primary text-black font-black  text-2xl rounded-xl py-8 px-10 shadow-xl font-gilroyHeavy text-center">
                Sejarah Perjalanan BLUG
              </div>

              {/* Bullet List */}
              <div className="flex gap-2">
                {/* Garis kuning + titik */}
                <div className="relative flex flex-col items-center">
                  <div className="w-[2px] bg-primary h-full" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute top-3 -translate-y-1/2" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute bottom-32 translate-y-1/2" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute bottom-[60px] translate-y-1/2" />
                </div>

                <ul className="text-white space-y-5 pl-1 text-justify">
                  <li>27 September 2003 BLUG berdiri</li>
                  <li>
                    2008 BLUG bergabung sebagai ORMAWA di Politeknik Negeri
                    Batam
                  </li>
                  <li>
                    Februari 2025 BLUG telah melantik kepengurusan baru yang
                    akan menegaskan eksistensi BLUG di Politeknik Negeri Batam
                    dan Kota Batam.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
