import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Skills from "@/app/components/skills";
import Projects from "@/app/components/projects";
import Footer from "@/app/components/footer";
import Squares from "@/app/components/Squares/Squares";

export default function Home() {
  return (
    // 1. Tambahkan "relative" pada pembungkus utama ini.
    <div className="relative min-h-screen bg-black text-white">
      
      {/* 2. Gunakan "inset-0" (shortcut untuk top, right, bottom, left) dan tambahkan z-index. */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={1}
          squareSize={30}
          direction="diagonal"
          borderColor="#333" // Warna lebih redup agar tidak terlalu mencolok
          hoverFillColor="#222"
        />
      </div>

      {/* 3. Bungkus semua konten Anda dalam satu div dengan z-index lebih tinggi. */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>

    </div>
  );
}