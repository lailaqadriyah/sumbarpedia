import React from "react";
import { Link } from "react-router-dom";

const cities = [
  {
    id: 1,
    title: "Kota Padang",
    description:
      '"Kota Padang adalah ibu kota dari Provinsi Sumatera Barat yang terletak di pesisir barat Pulau Sumatera, Indonesia...',
    imageUrl: "/src/img/logopadang.png",
    link: "/deskripsi/padang",
  },
  {
    id: 2,
    title: "Kabupaten Solok",
    description: '"Kabupaten Solok merupakan salah satu daerah di Sumatera Barat yang terkenal dengan Danau Singkarak...',
    imageUrl: "/src/img/logosolok.png",
    link: "/deskripsi/solok",
  },
  {
    id: 3,
    title: "Kabupaten Solok Selatan",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: "/src/img/logosolsel.png",
    link: "/deskripsisoloksel",
  },
  {
    id: 4,
    title: "Kota Padang Panjang",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: "/src/img/logopp.png",
    link: "/deskripsipp",
  },
  {
    id: 5,
    title: "Kota Bukittinggi",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: "/src/img/logobkt.png",
    link: "/deskripsibkt",
  },
  {
    id: 6,
    title: "Kota Pariaman",
    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: "/src/img/logopariaman.png",
    link: "/deskripsipariaman",
  },
];

// Komponen CityCard (nested di dalam App.jsx)
function CityCard({ title, description, imageUrl, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
      <img src={imageUrl} alt={`${title} Logo`} className="w-24 h-24 mx-auto mb-4 object-contain" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link to={link} className="text-blue-600 hover:underline text-sm font-medium">
        Selengkapnya
      </Link>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Sumbarpedia itu apa sih?
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl text-justify">
                Sumbarpedia adalah platform digital yang menyajikan informasi
                seputar budaya, sejarah, pariwisata, dan kekayaan lokal Sumatera
                Barat. Melalui tampilan interaktif dan konten edukatif,
                Sumbarpedia hadir untuk memperkenalkan dan melestarikan warisan
                Minangkabau kepada generasi masa kini dan mendatang.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Yuk Jelajahi Daerah Sumatera Barat!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <CityCard
                  key={city.id}
                  title={city.title}
                  description={city.description}
                  imageUrl={city.imageUrl}
                  link={city.link} // ✅ ini yang belum kamu pasang
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
