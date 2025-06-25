import React from 'react';
// import { Link } from 'react-router-dom'; // Opsional jika Anda ingin tautan di footer

function Footer() {
  // Mendapatkan tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto"> {/* mt-auto untuk mendorong ke bawah */}
      <div className="container mx-auto px-4 text-center">
        {/* Contoh informasi hak cipta */}
        <p className="text-sm">
          &copy; {currentYear} Sumbarpedia. All rights reserved.
        </p>

        {/* Opsional: Tautan cepat atau informasi tambahan */}
        {/*
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/privacy" className="hover:text-white text-sm">Kebijakan Privasi</Link>
          <Link to="/terms" className="hover:text-white text-sm">Syarat & Ketentuan</Link>
          <Link to="/contact" className="hover:text-white text-sm">Kontak Kami</Link>
        </div>
        */}

        {/* Opsional: Logo kecil atau tagline */}
        {/*
        <div className="mt-4">
          <img src="/images/sumbarpedia-footer-logo.png" alt="Sumbarpedia Logo" className="h-6 mx-auto opacity-75" />
        </div>
        */}
      </div>
    </footer>
  );
}

export default Footer;