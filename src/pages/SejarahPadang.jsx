import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Eye } from "lucide-react";

function SejarahPadang() {
  return (
    <div className="font-poppins bg-gray-50">
      <main className="min-h-screen">
        {/* Section: Sejarah Kota Padang */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Judul dan deskripsi */}
            <div className="mb-8">
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                
              </div>
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center border mb-6">
                <span className="text-gray-400 font-medium">Foto</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Asal Mula dan Perkembangan Awal</h1>
              <p className="text-gray-700 text-justify leading-relaxed">
                Kota Padang, sebagai ibu kota Provinsi Sumatera Barat, memiliki sejarah panjang sebagai pusat kehidupan dengan posisi strategis berhadap dari pengembangan Sumatera Barat. Kota Padang telah mengalami berbagai periode penting dalam sejarah Indonesia, mulai dari masa Kerajaan Pagaruyung hingga era modern. Sejarah perkembangan kota ini tidak dapat dipisahkan dari peran sebagai pintu gerbang utama Sumatera Barat, baik dalam hal perdagangan, pendidikan, maupun pemerintahan. Perkembangan awal Padang sangat dipengaruhi oleh aktivitas perdagangan, khususnya melalui pelabuhan yang telah ada sejak abad ke-16. Hal ini menjadikan Padang sebagai pusat aktivitas ekonomi dan budaya yang penting bagi wilayah Sumatera Barat secara keseluruhan.
              </p>

              <div className="mt-6">
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  ← Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    
  );
}

export default SejarahPadang;
