import React, { useState, useEffect } from 'react';
import backgroundImage from '../src/assets/background.jpg';
import './App.css';

const App = () => {
  const getUniqueColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  };

  const [navbarBgColor, setNavbarBgColor] = useState('transparent');
  const [navbarTextColor, setNavbarTextColor] = useState('#5F574F');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = document.getElementById('ce').offsetTop - 100;
    const newNavbarBgColor = scrollPosition > threshold ? 'white' : 'transparent';
    const newNavbarTextColor = scrollPosition > threshold ? '#000000' : '#5F574F';
    setNavbarBgColor(newNavbarBgColor);
    setNavbarTextColor(newNavbarTextColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: navbarBgColor }}>
        <div className='invitaionLogo'>
          <div className='guestName'>Draga invitat</div>
          <div className='weddingDate'>21 Octombrie 2023</div>
        </div>
        <div className='nav-links'>
          <a style={{ color: navbarTextColor }} href="#ce" className="nav-link">Ce?</a>
          <a style={{ color: navbarTextColor }} href="#cand" className="nav-link">Când?</a>
          <a style={{ color: navbarTextColor }} href="#unde" className="nav-link">Unde?</a>
          <a style={{ color: navbarTextColor }} href="#confirmare" className="nav-link">Confirmare</a>
        </div>
      </nav>
      <div >
        <div className="container">
        <section id="InvitationStart" className="section"  style={{ backgroundImage: {backgroundImage} }}>
            <h1>Section: Invitation Start?</h1>
            <div className='details'>
            </div>
            {/* Insert content for the "Ce?" section */}
          </section>
          <section id="ce" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Ce?</h1>
            {/* Insert content for the "Ce?" section */}
          </section>
          <section id="InvitationStart" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Invitation Start?</h1>
            {/* Insert content for the "Ce?" section */}
          </section>
          <section id="ce" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Ce?</h1>
            {/* Insert content for the "Ce?" section */}
          </section>
          <section id="cand" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Când?</h1>
            {/* Insert content for the "Când?" section */}
          </section>
          <section id="unde" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Unde?</h1>
            {/* Insert content for the "Unde?" section */}
          </section>
          <section id="confirmare" className="section" style={{ backgroundColor: getUniqueColor() }}>
            <h1>Section: Confirmare</h1>
            {/* Insert content for the "Confirmare" section */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
