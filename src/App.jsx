import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BudayaPage from './pages/BudayaKota';
import TentangSaya from './pages/About';
import DeskripsiKota from './pages/DeskripsiKota';
import SejarahKota from './pages/SejarahKota';

function App() {
  return (
    <Router>
      <>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deskripsi/:slug" element={<DeskripsiKota />} />
            <Route path="/sejarah/:slug" element={<SejarahKota />} />
            <Route path="/budaya/:slug" element={<BudayaPage />} />
            <Route path="/about" element={<TentangSaya />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;