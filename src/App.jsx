import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import About from './pages/About';
import Products from './pages/Products';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Organizations from './pages/Organizations';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
