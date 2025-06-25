import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Deskripsi from './pages/DeskripsiKota';

function App() {
  return (
    <Router>
      <>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deskripsi" element={<Deskripsi />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;