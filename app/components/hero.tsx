"use client"

import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      // min-h-screen dijaga agar tetap full-height, padding px-6 dihapus dari sini
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* ===== PERUBAHAN MARGIN DI SINI =====
        Wrapper ini diubah dari 'container mx-auto ...' 
        menjadi class yang sama persis dengan file Projects.tsx Anda
      */}
      <div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        
        {/* ===== KOLOM KIRI: TEKS (Tidak berubah) ===== */}
        <div className="md:w-1/2 lg:w-3/5 space-y-8 text-center md:text-left">
          
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Safrizal Huda Kurniawan
              </span>
            </h3>

            <div className="h-8">
              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Beginner Web Developer
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Passionate about creating innovative solutions through code. Exploring the endless possibilities of
            technology and software development.
          </p>

          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              href="https://github.com/safrizal-hk"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              target="_blank"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/safrizal-huda-kurniawan-260208379"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
              target="_blank"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
            <Link
              href="#"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/CV_Safrizal Huda Kurniawan.pdf"
              download="CV_Safrizal Huda Kurniawan.pdf"
              className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              CV
            </Link>
            <Link
              href="https://youtube.com/shorts/xreupPDMhGM?feature=share"
              target="_blank"
              className="px-8 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Personal Branding
            </Link>
          </div>
        </div> {/* --- Akhir Kolom Kiri --- */}


        {/* ===== KOLOM KANAN: GAMBAR ===== */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
          {/* ===== PERUBAHAN BENTUK GAMBAR DI SINI =====
            1. 'rounded-full' diubah menjadi 'rounded-xl'
            2. 'w-64 h-64 sm:w-80 sm:h-80' (persegi) diubah menjadi
               'w-64 h-80 sm:w-80 sm:h-[400px]' (persegi panjang)
          */}
          <div 
            className="relative w-64 h-80 sm:w-80 sm:h-[400px] rounded-xl overflow-hidden 
                       shadow-lg border-4 border-gray-700
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/30 hover:border-gray-500"
          >
            <Image
              src="/safrizalprofile.jpg"
              alt="Foto Safrizal Huda Kurniawan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div> {/* --- Akhir Kolom Kanan --- */}

      </div>

      {/* Indikator scroll bawah (posisi tetap) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}