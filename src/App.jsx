// Di App.js atau file routing utama
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;