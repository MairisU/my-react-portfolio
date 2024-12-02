import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Global styles
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import DataTable from './components/DataTable';

function App() {
  const [color, setColor] = useState("cyan");

  // Set the background color based on the selected color
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <Router>
      <div className="App">
        <Header color={color} setColor={setColor} />

        {/* Navigation Links */}
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/datatable">Data Table</Link>
            </li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <main>
          <Routes>
            <Route path="/" element={<Content color={color} />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/datatable" element={<DataTable />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
