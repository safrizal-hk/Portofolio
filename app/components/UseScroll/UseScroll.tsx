"use client";

import { useState, useEffect } from "react";

/**
 * Hook untuk mendeteksi apakah halaman sudah di-scroll melewati threshold tertentu
 * @param threshold Jumlah pixel scroll sebelum dianggap "sudah di-scroll"
 * @returns boolean
 */
export function useScrollPosition(threshold: number = 10): boolean {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan sekali di awal

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return hasScrolled;
}
