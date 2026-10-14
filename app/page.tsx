import HomeGlow from "@/components/sections/HomeGlow";
import Hero from "@/components/sections/Hero";
import VideoProfile from "@/components/sections/VideoProfile";
import LogoDivisi from "@/components/sections/LogoDivisi";
import Pengurus from "@/components/sections/Pengurus";
import TujuanBlug from "@/components/sections/TujuanBlug";
import VisiMisi from "@/components/sections/VisiMisi";
import KeseruanBelajar from "@/components/sections/KeseruanBelajar";

export default function Home() {
  return (
    // Pembungkus beranda: latar gelap + cahaya latar, dipotong di batas bawah beranda
    <div className="relative overflow-hidden bg-[#171717] font-[family-name:var(--font-inter)] text-[#f7f3f3]">
      <HomeGlow />
      <Hero />
      <VideoProfile />
      <LogoDivisi />
      <Pengurus />
      <TujuanBlug />
      <VisiMisi />
      <KeseruanBelajar />
    </div>
  );
}
