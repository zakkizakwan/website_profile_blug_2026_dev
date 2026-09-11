import { React, useState, useEffect } from "react";
import bg_star from "../../assets/HubungiPage/bg_star.png";
import cardImage from "../../assets/HubungiPage/imagecard.png";
import cardImageLarge from "../../assets/HubungiPage/imagecard-large.png";
import FlipLeft from "../Animation/FlipLeft";
import FlipRight from "../Animation/FlipRight";

const HubungiKami = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardBg = isMediumScreen ? cardImageLarge : cardImage;

  return (
    <div
      className="w-full bg-no-repeat"
      style={{ backgroundImage: `url(${bg_star})` }}
    >
      <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-5 lg:py-20 items-stretch">
        {/* Kartu Kontak */}
        <FlipLeft>
          <div className="h-full relative lg:rounded-2xl overflow-hidden text-white lg:shadow-xl">
            <div
              className="bg-opacity-60 px-4 md:px-16 py-16 h-full flex flex-col bg-cover"
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundPosition: "center",
              }}
            >
              <div>
                <div className="inline-block bg-primary text-black text-sm font-semibold px-3 py-1 mb-3">
                  Siapa Kami?
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  Jangan ragu untuk menghubungi kami.
                </h3>
                <p className="mb-4 text-sm">
                  Jika Anda memiliki pertanyaan atau ingin berdiskusi tentang
                  proyek atau event, jangan ragu untuk menghubungi kami.
                </p>
                <hr className="border-white border-t-2 w-full mb-5" />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary p-3 rounded-full">
                    <img
                      src="/icon/ic_call_black.svg"
                      className="size-5 lg:size-7"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Aurellia - Sekretaris 1</p>
                    <p className="text-sm">080132114212</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary p-3 rounded-full">
                    <img
                      src="/icon/ic_call_black.svg"
                      className="size-5 lg:size-7"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Kayla - Sekretaris 2</p>
                    <p className="text-sm">080132114212</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary p-3 rounded-full">
                    <img
                      src="/icon/ic_email_black.svg"
                      className="size-5 lg:size-7"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Contact Us!</p>
                    <p className="text-sm">intiblug@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FlipLeft>

        {/* Form Kirim Pesan */}
        <FlipRight>
          <div className="h-full bg-white px-4 py-10 md:px-16 lg:px-10 lg:rounded-2xl lg:shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <h3 className="text-4xl font-black mb-6">Kirim Kami Pesan</h3>
            <form className="space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nama"
                    className="text-sm text-gray-800 font-bold"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    className="border p-3 rounded-md w-full bg-accent-3 border-transparent"
                    id="nama"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telepon"
                    className="text-sm text-gray-800 font-bold"
                  >
                    Telepon
                  </label>
                  <input
                    type="text"
                    className="border p-3 rounded-md w-full bg-accent-3 border-transparent"
                    id="telepon"
                  />
                </div>
              </div>
              <label
                htmlFor="email"
                className="text-sm text-gray-800 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border p-3 rounded-md bg-accent-3 border-transparent"
              />
              <label
                htmlFor="subjek"
                className="text-sm text-gray-800 font-bold"
              >
                Subjek
              </label>
              <input
                type="text"
                className="w-full border p-3 rounded-md bg-accent-3 border-transparent"
                id="subjek"
              />
              <label
                htmlFor="pesan"
                className="text-sm text-gray-800 font-bold"
              >
                Pesan
              </label>
              <textarea
                rows="4"
                className="w-full border p-3 rounded-md bg-accent-3 border-transparent resize-none"
                id="pesan"
              ></textarea>
              <button
                type="submit"
                className="w-full text-sm bg-accent-1 hover:bg-primary text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 cursor-pointer"
              >
                KIRIM
              </button>
            </form>
          </div>
        </FlipRight>
      </div>
    </div>
  );
};

export default HubungiKami;
