import React from "react";
import { Link } from "react-router-dom";


function Deskripsi() {
  return (
    // Body styling (font and background) applied to the main div wrapper
    <div className="font-poppins ">
      <main className="min-h-screen">
        {/* Section 1: Sumbarpedia itu apa sih? */}
        {/* Pseudo-element overlay menggunakan class Tailwind 'before:' */}
        <section className="relative py-16 md:py-24 bg-[url('/src/img/bgdash.png')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/80 before:via-white/50 before:to-white/0">
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">Kota Padang</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </p>

              {/* Tambahkan 2 tombol di sini */}
              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <Link
                  to="/sejarah-padang" // Ganti dengan rute yang sesuai untuk sejarah
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Sejarah
                </Link>
                <Link
                  to="/budaya-padang" // Ganti dengan rute yang sesuai untuk budaya
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Budaya
                </Link>
              </div>
            </div>
            {/* Right Content (Logo Kota Padang) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center">
              <div className="relative w-[300px] h-[100px] md:w-[300px] md:h-[250px] bg-contain bg-no-repeat bg-center-right flex items-center justify-center">
                <img src="/src/img/logopadang.png" alt="Logo Kota Padang" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}

export default Deskripsi;