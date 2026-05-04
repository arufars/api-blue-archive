import { Navbar } from "./components/home/Navbar";
import { HeroText } from "./components/home/HeroText";
import { HeroMockup } from "./components/home/HeroMockup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7ff] to-[#ffffff] font-sans text-slate-800 relative overflow-hidden">
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-16 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <HeroText />
        <HeroMockup />
      </main>
    </div>
  );
}
