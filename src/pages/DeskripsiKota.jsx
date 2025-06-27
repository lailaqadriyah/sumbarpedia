import React from "react";
import { Link } from "react-router-dom";

function Deskripsi() {
  return (
    <div className="font-poppins">
      <main className="min-h-screen">
        {/* Section: Deskripsi Kota Padang */}
        <section className="relative py-16 md:py-24 bg-[url('/src/img/bgdash.png')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/80 before:via-white/50 before:to-white/0">
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            {/* Logo di atas */}
            <div className="mb-8">
              <img
                src="/src/img/logopadang.png"
                alt="Logo Kota Padang"
                className="w-[200px] md:w-[250px] object-contain mx-auto"
              />
            </div>

            {/* Judul */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Kota Padang
            </h2>

            {/* Paragraf Deskripsi */}
            <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl text-justify">
              <p>
                Kota Padang adalah ibu kota dari Provinsi Sumatera Barat yang terletak di pesisir barat Pulau Sumatera, Indonesia. Sebagai salah satu kota tertua di Sumatera Barat, Padang memiliki posisi strategis yang menghubungkan jalur perdagangan internasional sejak abad ke-16.
              </p>
              <p>
                Kota ini dikenal sebagai gerbang utama masuknya budaya dan peradaban ke wilayah Minangkabau melalui pelabuhan muat-rempah dan jaringan sungainya. Tak hanya menjadi pusat pemerintahan dan ekonomi, Padang juga kaya akan budaya, adat, dan tradisi Minangkabau yang masih terjaga kuat hingga kini.
              </p>
              <p>
                Kota ini memadukan suasana kota modern dengan kearifan lokal yang mendalam—tercermin dari kehidupan masyarakatnya, arsitektur Rumah Gadang, kuliner khas seperti rendang, serta perayaan budaya seperti Festival Siti Nurbaya.
              </p>
              <p>
                Dikelilingi oleh pegunungan dan laut, Padang juga menyimpan potensi wisata alam yang memukau. Pantai Air Manis, Gunung Padang, hingga kawasan Kota Tua menjadi saksi perjalanan panjang kota ini dari masa penjajahan, zaman kemerdekaan, hingga era modern.
              </p>
            </div>

            {/* Tombol Navigasi */}
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/sejarah-padang"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Sejarah
              </Link>
              <Link
                to="/budaya-padang"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Budaya
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Deskripsi;
