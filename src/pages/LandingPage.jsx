import React from "react";
import Header from "../components/Header";
import Hero from "../components/LandingPage/Hero";
import VideoSection from "../components/LandingPage/VideoSection";
import TujuanSection from "../components/LandingPage/TujuanSection";
import ProgramUnggulan from "../components/LandingPage/ProgramUnggulan";
import Partnership from "../components/LandingPage/Partnership";
import Footer from "../components/Footer";
import ContactSections from "../components/LandingPage/contact_sections";
import ScrollToTop from "../components/ScrollToTop";


const LandingPage = () => {

  return (
    <div>
      <Header />
      <Hero title="BATAM LINUX USER GROUP" subTitle="Rumahnya para pecinta Linux berdomisili Batam yang ambisius, doyan teknologi, dan selalu semangat berbagi seputar IT dan pemrograman. Indonesia, Go Open Source!" />
      <VideoSection />
      <Partnership />
      <TujuanSection />
      <ProgramUnggulan />
      <ContactSections />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
