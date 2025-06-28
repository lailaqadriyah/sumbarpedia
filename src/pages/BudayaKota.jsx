import React from "react";
import { useParams } from "react-router-dom";

const budayaData = {
  padang: {
    title: "Kebudayaan Kota Padang",
    sections: [
      {
        title: "Adat dan Falsafah Hidup",
        image: "/src/img/budayapadang.jpg",
        content: `Sebagai bagian dari kebudayaan Minangkabau, Kota Padang sangat kental dengan adat dan falsafah “Adat Basandi Syarak, Syarak Basandi Kitabullah” (Adat bersendikan syarak, syarak bersendikan Kitabullah/Al-Qur’an). Falsafah ini menjadi landasan dalam setiap aspek kehidupan masyarakat, mulai dari sistem kekerabatan Matrilineal yang unik hingga norma-norma sosial.

Sistem Matrilineal, di mana garis keturunan dan harta pusaka diturunkan melalui ibu, adalah ciri khas yang membedakan Minangkabau dari kebanyakan suku lain di dunia. Peran mamak (paman dari pihak ibu) juga sangat sentral dalam pengambilan keputusan adat.`
      },
      {
        title: "Seni Pertunjukan Tradisional",
        image: "/src/img/taripiring.webp",
        content: `Kota Padang kaya akan seni pertunjukan yang menggambarkan keunikan budaya Minangkabau:

• Tari Piring: Tarian tradisional yang menggunakan piring sebagai properti utama, melambangkan kegembiraan dan rasa syukur.
• Tari Indang: Tarian kelompok yang diiringi rebana, biasa ditarikan oleh laki-laki secara kompak dan dinamis.
• Randai: Perpaduan seni bela diri (Silat), teater, dan musik. Menyampaikan kisah-kisah rakyat melalui dialog dan nyanyian.
• Salawat Dulang: Kesenian bernuansa vokal dengan iringan dulang (nampan logam), seringkali berisi nasihat agama dan humor.`
      },
      {
        title: "Kuliner Khas Minangkabau",
        image: "/src/img/rendang.webp",
        content: `Tak lengkap rasanya bicara budaya Padang tanpa membahas kulinernya yang mendunia. Masakan Padang dikenal dengan rempah-rempah yang kaya dan cita rasa yang kuat:

• Rendang: Masakan daging bersantan yang dimasak perlahan hingga kering dan rempahnya meresap sempurna.
• Sate Padang: Sate daging sapi dengan kuah kental kekuningan atau kemerahan.
• Gulai Kepala Ikan Kakap: Hidangan ikan kakap dengan kuah gulai kental kaya rempah.
• Dendeng Balado: Daging sapi digoreng kering, disajikan dengan sambal balado merah atau hijau.`
      },
      {
        title: "Pakaian Adat dan Arsitektur",
        image: "/src/img/bajupadang.webp",
        content: `Pakaian adat Minangkabau, seperti Baju Kurung Basiba untuk wanita dan pakaian penghulu untuk pria, mencerminkan nilai-nilai kesopanan dan keagungan. Kain songket dengan motif khas Minang juga merupakan bagian penting dari busana tradisional.

Arsitektur Rumah Gadang, rumah adat Minangkabau dengan atap gonjong (menyerupai tanduk kerbau), adalah simbol kebesaran dan identitas budaya. Rumah Gadang bukan hanya tempat tinggal, tapi pusat kegiatan adat dan sosial keluarga besar.`
      },
      {
        title: "Festival dan Perayaan Budaya",
        image: "/src/img/festival.jpg",
        content: `Kota Padang juga sering menjadi tuan rumah berbagai festival budaya yang menampilkan kekayaan seni dan tradisi Minangkabau, seperti Festival Siti Nurbaya, Festival Bahari, dan perayaan hari besar adat lainnya. Acara-acara ini menjadi wadah pelestarian nilai budaya sekaligus hiburan masyarakat.`
      }
    ]
  },
  solok: {
    title: "Kebudayaan Kabupaten Solok",
    sections: [
      {
        title: "Adat dan Struktur Sosial",
        image: "/src/img/budayasolok.jpg",
        content: `Kabupaten Solok memiliki adat yang berakar kuat pada budaya Minangkabau. Struktur masyarakat adat terbagi atas suku-suku dengan sistem kekerabatan matrilineal, di mana garis keturunan ditarik dari pihak ibu. Setiap nagari (desa adat) memiliki balai adat sebagai pusat musyawarah dan pengambilan keputusan adat.`
      },
      {
        title: "Seni dan Tradisi Lisan",
        image: "/src/img/rabab.jpg",
        content: `Kesenian tradisional seperti Rabab Pesisir dan Pantun Adat sering ditampilkan dalam upacara adat maupun perhelatan nagari. Selain sebagai hiburan, seni ini berfungsi sebagai media pendidikan dan pewarisan nilai-nilai leluhur.`
      },
      {
        title: "Kuliner Tradisional",
        image: "/src/img/budayasolok2.jpeg",
        content: `Solok dikenal dengan kuliner khas seperti Bareh Solok (beras Solok) yang terkenal pulen dan wangi. Hidangan seperti gulai itiak lado mudo dan lamang tapai menjadi simbol kekayaan rasa lokal.`
      },
      {
        title: "Rumah Adat dan Lingkungan Alam",
        image: "/src/img/singkarak.jpg",
        content: `Rumah adat di Solok mengikuti bentuk Rumah Gadang Minangkabau yang dihiasi ukiran khas. Kabupaten Solok juga dikenal dengan Danau Singkarak dan Danau Diatas-Dibawah yang menjadi bagian dari identitas budaya dan alam yang harmonis.`
      },
      {
        title: "Festival Nagari dan Tradisi Pertanian",
        image: "/src/img/panen.jpeg",
        content: `Festival panen dan pacu jawi (balapan sapi sawah) merupakan tradisi masyarakat petani Solok yang masih dilestarikan. Acara ini memperkuat kebersamaan dan rasa syukur kepada alam.`
      }
    ]
  }
};

function BudayaKota() {
  const { slug } = useParams();
  const data = budayaData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Data budaya untuk kota ini belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl space-y-12 bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {data.title}
        </h1>

        {data.sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-6 items-start ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-full overflow-hidden rounded border">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-red-600 mb-2">{section.title}</h2>
                  <p className="text-gray-700 text-justify text-sm whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-xl font-bold text-red-600 mb-2">{section.title}</h2>
                  <p className="text-gray-700 text-justify text-sm whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
                <div className="w-full overflow-hidden rounded border">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudayaKota;
