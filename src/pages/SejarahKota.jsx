import React from "react";
import { useParams, Link } from "react-router-dom";

const sejarahData = {
  padang: {
    title: "Sejarah Kota Padang",
    image: "/src/img/padangdulu.jpg",
    sections: [
      {
        heading: "Asal Mula dan Perkembangan Awal",
        content:
          "Kota Padang, sebagai ibu kota Provinsi Sumatera Barat, memiliki sejarah panjang sebagai pusat kehidupan dengan posisi strategis terhadap pengembangan Sumatera Barat. Nama “Padang” sendiri diyakini berasal dari kata yang berarti 'tanah lapang'.",
      },
      {
        heading: "Masa Kolonial Belanda",
        content:
          "Pada abad ke-17, Padang menjadi pusat perdagangan penting bagi VOC. Belanda mendirikan benteng dan pelabuhan, menjadikan kota ini pusat pemerintahan kolonial di pantai barat Sumatera.",
      },
      {
        heading: "Perjuangan Kemerdekaan",
        content:
          "Padang turut aktif dalam perjuangan kemerdekaan, termasuk saat Agresi Militer Belanda II. Banyak tokoh nasional berasal dari kota ini.",
      },
      {
        heading: "Perkembangan Modern",
        content:
          "Setelah kemerdekaan, Padang berkembang pesat menjadi kota metropolitan, dengan infrastruktur seperti Teluk Bayur, Bandara Minangkabau, dan Universitas Andalas.",
      },
      {
        heading: "Gempa 2009",
        content:
          "Pada 30 September 2009, gempa 7,6 SR mengguncang Padang. Ribuan bangunan hancur dan mendorong sistem mitigasi bencana ditingkatkan.",
      },
    ],
    timeline: [
      "1663: VOC aktif di Padang",
      "1797: Gempa besar merusak kota",
      "1942: Jepang menduduki Padang",
      "1945: Kemerdekaan Indonesia",
      "2009: Gempa 7.6 SR mengguncang Padang",
    ],
  },

  solok: {
    title: "Sejarah Kabupaten Solok",
    image: "/src/img/solokdulu.jpg",
    sections: [
      {
        heading: "Awal Mula Wilayah Solok",
        content:
          "Kabupaten Solok dikenal sejak zaman kerajaan Minangkabau sebagai daerah agraris dengan potensi alam melimpah seperti Danau Singkarak.",
      },
      {
        heading: "Kolonialisme dan Perkebunan",
        content:
          "Belanda membangun perkebunan dan rel kereta Padang–Solok untuk angkutan hasil bumi seperti teh dan kopi.",
      },
      {
        heading: "Kemerdekaan dan Kontribusi Rakyat",
        content:
          "Masyarakat Solok berperan aktif dalam perjuangan kemerdekaan. Banyak pejuang lahir dari daerah ini.",
      },
      {
        heading: "Era Modern",
        content:
          "Solok berkembang menjadi penghasil beras unggulan dan destinasi wisata dengan danau serta perbukitan yang indah.",
      },
    ],
    timeline: [
      "1800-an: Masuknya pengaruh kolonial",
      "1890: Jalur kereta Padang-Solok dibangun",
      "1945: Rakyat Solok menyambut kemerdekaan",
      "2009: Gempa Sumbar berdampak ke Solok",
    ],
  },

  // Tambahkan slug dan data kota lain di sini
};

function SejarahKota() {
  const { slug } = useParams();
  const data = sejarahData[slug];

  if (!data) {
    return (
      <div className="text-center py-16 text-red-500">
        <h1 className="text-2xl font-bold">Data sejarah tidak ditemukan.</h1>
      </div>
    );
  }

  return (
    <div className="font-poppins bg-gray-50">
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Gambar Header */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow mb-6">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Judul */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>

            {/* Sections */}
            {data.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading}</h2>
                <p className="text-gray-700 text-justify leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Timeline */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Garis Waktu Sejarah</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-8">
              {data.timeline.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Kembali */}
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

export default SejarahKota;
