import React from "react";
import { useParams, Link } from "react-router-dom";

const cityData = {
  padang: {
    title: "Kota Padang",
    imageUrl: "/src/img/logopadang.png",
    content: [
      "Kota Padang adalah ibu kota dari Provinsi Sumatera Barat yang terletak di pesisir barat Pulau Sumatera, Indonesia. Sebagai salah satu kota tertua di Sumatera Barat, Padang memiliki posisi strategis yang menghubungkan jalur perdagangan internasional sejak abad ke-16.",
      "Kota ini dikenal sebagai gerbang utama masuknya budaya dan peradaban ke wilayah Minangkabau melalui pelabuhan muat-rempah dan jaringan sungainya. Tak hanya menjadi pusat pemerintahan dan ekonomi, Padang juga kaya akan budaya, adat, dan tradisi Minangkabau yang masih terjaga kuat hingga kini.",
      "Kota ini memadukan suasana kota modern dengan kearifan lokal yang mendalam—tercermin dari kehidupan masyarakatnya, arsitektur Rumah Gadang, kuliner khas seperti rendang, serta perayaan budaya seperti Festival Siti Nurbaya.",
      "Dikelilingi oleh pegunungan dan laut, Padang juga menyimpan potensi wisata alam yang memukau. Pantai Air Manis, Gunung Padang, hingga kawasan Kota Tua menjadi saksi perjalanan panjang kota ini dari masa penjajahan, zaman kemerdekaan, hingga era modern."
    ],
    sejarahLink: "/sejarah/padang",
    budayaLink: "/budaya/padang"
  },
  solok: {
    title: "Kabupaten Solok",
    imageUrl: "/src/img/logosolok.png",
    content: [
      "Kabupaten Solok merupakan salah satu daerah di Sumatera Barat yang terkenal dengan Danau Singkarak dan keindahan alam pegunungan.",
      "Solok dikenal sebagai penghasil beras premium seperti beras Solok, serta potensi wisata alamnya seperti kebun teh, danau, dan perbukitan yang hijau.",
      "Budaya Minangkabau di Solok masih terjaga melalui tradisi adat, rumah gadang, dan kegiatan nagari.",
      "Kabupaten ini juga dikenal dengan keasrian lingkungannya dan ketenangan suasana pedesaan yang cocok untuk wisata alam dan budaya."
    ],
    sejarahLink: "/sejarah/solok",
    budayaLink: "/budaya/solok"
  },
  // Tambahkan kota lain di sini...
};

function DeskripsiKota() {
  const { slug } = useParams();
  const kota = cityData[slug];

  if (!kota) {
    return (
      <div className="text-center py-16 text-red-500">
        <h1 className="text-2xl font-bold">Oops! Kota tidak ditemukan.</h1>
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <main className="min-h-screen">
        <section className="relative py-16 md:py-24 bg-[url('/src/img/bgdash.png')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/80 before:via-white/50 before:to-white/0">
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            <div className="mb-8">
              <img src={kota.imageUrl} alt={kota.title} className="w-[200px] md:w-[250px] object-contain mx-auto" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">{kota.title}</h2>

            <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl text-justify">
              {kota.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to={kota.sejarahLink}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Sejarah
              </Link>
              <Link
                to={kota.budayaLink}
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

export default DeskripsiKota;
