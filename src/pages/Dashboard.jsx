import React from "react";
import { Link } from "react-router-dom";

const cities = [
  {
    id: 1,
    title: 'Kota Padang',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kota Padang Provinsi Sumatera Barat...',
    imageUrl: '/src/img/logopadang.png', // Sesuaikan dengan path gambar yang benar
  },
  {
    id: 2,
    title: 'Kabupaten Solok',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/src/img/logosolok.png',
  },
  {
    id: 3,
    title: 'Kabupaten Solok Selatan',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/src/img/logosolsel.png',
  },
  {
    id: 4,
    title: 'Kota Padang Panjang',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/src/img/logopp.png',
  },
  {
    id: 5,
    title: 'Kota Padang',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/images/kota-padang-logo.png',
  },
  {
    id: 6,
    title: 'Kota Padang',
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/images/kota-padang-logo.png',
  },
];

// Komponen CityCard (nested di dalam App.jsx)
function CityCard({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
      <img src={imageUrl} alt={`${title} Logo`} className="w-24 h-24 mx-auto mb-4 object-contain" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href="/deskripsi" className="text-blue-600 hover:underline text-sm font-medium">Selengkapnya</a>
    </div>
  );
}

function Dashboard() {
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">Sumbarpedia itu apa sih?</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </p>
            </div>
            {/* Right Content (Logo Sumbarpedia with Rumah Gadang) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center">
              <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] bg-contain bg-no-repeat bg-center-right flex items-center justify-center">
                <img src="/src/img/logosumped.png" alt="Sumbarpedia Logo" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Yuk Jelajahi Daerah Sumatera Barat! */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Yuk Jelajahi Daerah Sumatera Barat!</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <CityCard
                  key={city.id}
                  title={city.title}
                  description={city.description}
                  imageUrl={city.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;