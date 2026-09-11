import React, { useEffect, useState } from 'react';
import AltHero from '../components/AltHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IntiDivision from '../components/Pengurus/IntiDivision';
import TeamSection from '../components/Pengurus/TeamSection';
import TeamSectionMobile from '../components/Pengurus/TeamSectionMobile';

const Pengurus = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header />
      <AltHero
        label="Temui Tim Kami"
        title="Badan Pengurus Harian"
        addStyle="pengurus"
      />

      {isLargeScreen ? (
        <>
          <IntiDivision />
          <TeamSection />
        </>
      ) : (
        <TeamSectionMobile />
      )}
      <Footer />
    </div>
  );
};

export default Pengurus;
