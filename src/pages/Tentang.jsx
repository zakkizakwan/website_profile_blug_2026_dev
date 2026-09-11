import React from "react";
import AltHero from "../components/AltHero"
import Sejarah from "../components/Tentang/Sejarah";
import VisiMisiBlug from "../components/Tentang/VisiMisiBlug";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Tentang = () => {
  return (
    <div>
      <Header />
      <AltHero label="Slogan BLUG" title="Indonesia" addStyle="tentang"/>
      <Sejarah />
      <VisiMisiBlug />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Tentang;
