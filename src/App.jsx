import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Deskripsi from './pages/DeskripsiKota';
import SejarahPadang from './pages/SejarahPadang';
import BudayaPage from './pages/BudayaPadang';

function App() {
  return (
    <Router>
      <>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deskripsi" element={<Deskripsi />} />
            <Route path="/sejarah-padang" element={<SejarahPadang />} />
            <Route path="/budaya-padang" element={<BudayaPage />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;