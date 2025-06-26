import React from "react";
import { Link } from "react-router-dom";

function SejarahPadang() {
  return (
    <div className="font-poppins bg-gray-50">
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Gambar Header */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow mb-6">
              <img
                src="/src/img/padangdulu.jpg"
                alt="Foto Kota Padang tempo dulu"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 1. Asal Mula */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Asal Mula dan Perkembangan Awal
            </h1>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Kota Padang, sebagai ibu kota Provinsi Sumatera Barat, memiliki sejarah panjang sebagai pusat kehidupan dengan posisi strategis terhadap pengembangan Sumatera Barat. Nama “Padang” sendiri diyakini berasal dari kata yang berarti "tanah lapang", yang dahulu merupakan area pertanian dan perdagangan masyarakat Minangkabau.
            </p>

            {/* 2. Kolonial Belanda */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Masa Kolonial Belanda
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Pada abad ke-17, Padang menjadi pusat perdagangan penting bagi VOC (Belanda). Belanda mendirikan benteng dan pelabuhan, menjadikan kota ini pusat pemerintahan kolonial di pantai barat Sumatera. Aktivitas ekspor hasil bumi seperti rempah-rempah menjadikan Padang kota strategis di masa penjajahan.
            </p>

            {/* 3. Perjuangan Kemerdekaan */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Masa Perjuangan Kemerdekaan
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Kota Padang turut aktif dalam perjuangan melawan penjajah, termasuk saat Agresi Militer Belanda II. Banyak tokoh nasional berasal dari atau menempuh pendidikan di Padang, yang juga menjadi basis penting dalam diplomasi dan perlawanan terhadap kolonialisme.
            </p>

            {/* 4. Perkembangan Modern */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Perkembangan Pasca Kemerdekaan
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Setelah kemerdekaan, Padang berkembang pesat menjadi kota metropolitan. Pembangunan infrastruktur seperti jalan, pelabuhan Teluk Bayur, bandara Internasional Minangkabau, dan pusat pendidikan seperti Universitas Andalas menjadikan Padang pusat ekonomi, budaya, dan pendidikan di Sumatera Barat.
            </p>

            {/* 5. Gempa Bumi 2009 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Gempa Besar Tahun 2009
            </h2>
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Pada 30 September 2009, Padang diguncang gempa berkekuatan 7,6 SR. Ribuan bangunan runtuh dan korban jiwa berjatuhan. Peristiwa ini menjadi catatan penting dalam sejarah kota dan mendorong peningkatan sistem mitigasi bencana di wilayah Sumatera Barat.
            </p>

            {/* 6. Timeline Sejarah */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Garis Waktu Sejarah Padang
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-8">
              <li><strong>1663:</strong> VOC mulai aktif di Padang dan membangun pelabuhan</li>
              <li><strong>1797:</strong> Gempa besar merusak banyak bangunan di kota</li>
              <li><strong>1942:</strong> Pendudukan Jepang dimulai</li>
              <li><strong>1945:</strong> Proklamasi Kemerdekaan Indonesia</li>
              <li><strong>2009:</strong> Gempa besar 7.6 SR mengguncang Padang</li>
            </ul>

            {/* Link kembali */}
            <div className="mt-4">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                ← Kembali ke Beranda
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SejarahPadang;
