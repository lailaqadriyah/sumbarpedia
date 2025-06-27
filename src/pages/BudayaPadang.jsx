import React from "react";

function BudayaPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl space-y-12 bg-white p-8 rounded-lg shadow">
        
        {/* Bagian 1: Adat dan Falsafah Hidup */}
        <div>
          <div className="w-full h-120 overflow-hidden rounded border mb-6">
            <img
              src="/src/img/budayapadang.jpg"
              alt="Adat dan Falsafah Hidup"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-red-600 mb-2">Adat dan Falsafah Hidup</h2>
          <p className="text-gray-700 text-justify text-sm">
            Sebagai bagian dari kebudayaan Minangkabau, Kota Padang sangat kental dengan adat dan falsafah “Adat Basandi Syarak, Syarak Basandi Kitabullah” (Adat bersendikan syarak, syarak bersendikan Kitabullah/Al-Qur’an). Falsafah ini menjadi landasan dalam setiap aspek kehidupan masyarakat, mulai dari sistem kekerabatan Matrilineal yang unik hingga norma-norma sosial.
            <br /><br />
            Sistem Matrilineal, di mana garis keturunan dan harta pusaka diturunkan melalui ibu, adalah ciri khas yang membedakan Minangkabau dari kebanyakan suku lain di dunia. Peran mamak (paman dari pihak ibu) juga sangat sentral dalam pengambilan keputusan adat.
          </p>
        </div>

        {/* Bagian 2: Seni Pertunjukan Tradisional */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="w-full  overflow-hidden rounded border">
            <img
              src="/src/img/taripiring.webp"
              alt="Seni Tradisional"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Seni Pertunjukan Tradisional</h2>
            <p className="text-gray-700 text-justify text-sm">
              Kota Padang kaya akan seni pertunjukan yang menggambarkan keunikan budaya Minangkabau:
              <br /><br />
              <strong>• Tari Piring:</strong> Tarian tradisional yang menggunakan piring sebagai properti utama, melambangkan kegembiraan dan rasa syukur.
              <br />
              <strong>• Tari Indang:</strong> Tarian kelompok yang diiringi rebana, biasa ditarikan oleh laki-laki secara kompak dan dinamis.
              <br />
              <strong>• Randai:</strong> Perpaduan seni bela diri (Silat), teater, dan musik. Menyampaikan kisah-kisah rakyat melalui dialog dan nyanyian.
              <br />
              <strong>• Salawat Dulang:</strong> Kesenian bernuansa vokal dengan iringan dulang (nampan logam), seringkali berisi nasihat agama dan humor.
            </p>
          </div>
        </div>

        {/* Bagian 3: Kuliner Khas Minangkabau */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="md:order-2 w-full overflow-hidden rounded border">
            <img
              src="/src/img/rendang.webp"
              alt="Kuliner Padang"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-xl font-bold text-red-600 mb-2">Kuliner Khas Minangkabau</h2>
            <p className="text-gray-700 text-justify text-sm">
              Tak lengkap rasanya bicara budaya Padang tanpa membahas kulinernya yang mendunia. Masakan Padang dikenal dengan rempah-rempah yang kaya dan cita rasa yang kuat:
              <br /><br />
              <strong>• Rendang:</strong> Masakan daging bersantan yang dimasak perlahan hingga kering dan rempahnya meresap sempurna.
              <br />
              <strong>• Sate Padang:</strong> Sate daging sapi dengan kuah kental kekuningan atau kemerahan.
              <br />
              <strong>• Gulai Kepala Ikan Kakap:</strong> Hidangan ikan kakap dengan kuah gulai kental kaya rempah.
              <br />
              <strong>• Dendeng Balado:</strong> Daging sapi digoreng kering, disajikan dengan sambal balado merah atau hijau.
            </p>
          </div>
        </div>

        {/* Bagian 4: Pakaian Adat dan Arsitektur */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="w-full overflow-hidden rounded border">
            <img
              src="/src/img/bajupadang.webp"
              alt="Pakaian Adat"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Pakaian Adat dan Arsitektur</h2>
            <p className="text-gray-700 text-justify text-sm">
              Pakaian adat Minangkabau, seperti Baju Kurung Basiba untuk wanita dan pakaian penghulu untuk pria, mencerminkan nilai-nilai kesopanan dan keagungan. Kain songket dengan motif khas Minang juga merupakan bagian penting dari busana tradisional.
              <br /><br />
              Arsitektur Rumah Gadang, rumah adat Minangkabau dengan atap gonjong (menyerupai tanduk kerbau), adalah simbol kebesaran dan identitas budaya. Rumah Gadang bukan hanya tempat tinggal, tapi pusat kegiatan adat dan sosial keluarga besar.
            </p>
          </div>
        </div>

        {/* Bagian 5: Festival dan Perayaan Budaya */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="md:order-2 w-full overflow-hidden rounded border">
            <img
              src="/src/img/festival.jpg"
              alt="Festival Budaya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-xl font-bold text-red-600 mb-2">Festival dan Perayaan Budaya</h2>
            <p className="text-gray-700 text-justify text-sm">
              Kota Padang juga sering menjadi tuan rumah berbagai festival budaya yang menampilkan kekayaan seni dan tradisi Minangkabau, seperti Festival Siti Nurbaya, Festival Bahari, dan perayaan hari besar adat lainnya. Acara-acara ini menjadi wadah pelestarian nilai budaya sekaligus hiburan masyarakat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudayaPage;
