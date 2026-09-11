import React from 'react';
import { Link } from 'react-router-dom';
// import {  }

const Footer = () => {
  return (
    <>
      <div className="bg-secondary-dark w-full py-10 px-4 md:px-4">
        <div className="lg:max-w-screen-lg mx-auto">
          <div className="flex justify-between flex-col md:flex-row md:justify-center gap-y-4">
            <div className="md:w-[33%] w-full md:text-end px-15 text-white text-center">
              <h3 className="font-bold text-2xl mb-3.5">Quick Links</h3>
              <div className="flex decoration-white flex-col text-sm gap-y-2">
                <Link className="no-underline hover:underline" to={'/tentang'}>
                  <p>Tentang</p>
                </Link>
                <Link className="no-underline hover:underline" to={'/pengurus'}>
                  <p>Pengurus</p>
                </Link>
                <Link className="no-underline hover:underline" to={'/artikel'}>
                  <p>Artikel</p>
                </Link>
              </div>
            </div>
            <div className="py-6 md:w-[33%] w-full flex flex-col items-center gap-y-3">
              <img src="blug-white.svg" alt="blug-white" className="w-2/3" />
              <div className="flex gap-x-1.5">
                <a
                  href="https://www.instagram.com/batamlinux/"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_instagram.svg"
                    alt="instagram"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@batamlinux9734"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_youtube.svg"
                    alt="youtube"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/linux-group/"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_linkedin.svg"
                    alt="linkedin"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://web.facebook.com/batamlinux/"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_facebook.svg"
                    alt="facebook"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="mailto:intiblug@gmail.com"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_email.svg"
                    alt="email"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@batamlinuxusergroup"
                  target="_blank"
                  className="p-1.5 bg-primary rounded-sm"
                >
                  <img
                    src="/icon/ic_tiktok.svg"
                    alt="tiktok"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-[33%] w-full md:text-start md:ps-15 text-white text-center">
              <h3 className="font-bold text-2xl mb-3.5">Contact Us</h3>
              <div className="flex flex-col text-sm gap-y-2 justify-center md:justify-start">
                <div className="flex gap-x-3 justify-center md:justify-start">
                  <img src="/icon/ic_call.svg" alt="call" />
                  <p>
                    {' '}
                    <a
                      href="https://wa.me/6282388304818"
                      className="no-underline hover:underline"
                    >
                      080132114212
                    </a>{' '}
                    | Aurellia - Sekretaris 1
                  </p>
                </div>
                <div className="flex gap-x-3 justify-center md:justify-start">
                  <img src="/icon/ic_call.svg" alt="call" />
                  <p>
                    {' '}
                    <a
                      href="https://wa.me/6287851618604"
                      className="no-underline hover:underline"
                    >
                      080132114212
                    </a>{' '}
                    | Kayla - Sekretaris 2
                  </p>
                </div>
                <div className="flex gap-x-3 justify-center md:justify-start">
                  <img src="/icon/ic_email_white.svg" alt="email" />
                  <a
                    href="mailto:intiblug@gmail.com"
                    className="no-underline hover:underline"
                  >
                    {' '}
                    intiblug@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-2 border-primary rounded-full mt-5" />
          <p className="font-normal text-xs text-white text-center mt-4">
            Copyright © 2025 BATAM LINUX USER GROUP - All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
