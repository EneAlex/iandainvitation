import React, { useState, useEffect } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {

    const [navbarBgColor, setNavbarBgColor] = useState('transparent');
    const [navbarTextColor, setNavbarTextColor] = useState('#5F574F');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = document.getElementById('story').offsetTop - 100;
        const newNavbarBgColor = scrollPosition > threshold ? 'white' : 'transparent';
        const newNavbarTextColor = scrollPosition > threshold ? 'gold' : '#5F574F';
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
        <nav className="navbar" style={{ backgroundColor: navbarBgColor }}>
            {/* <div className='invitaionLogo'>
          <div className='guestName'>Draga invitat</div>
          <div className='weddingDate'>21 Octombrie 2023</div>
        </div> */}
            <div className='nav-links'>
                <a style={{ color: navbarTextColor }} href="#ce" className="nav-link">Ce?</a>
                <a style={{ color: navbarTextColor }} href="#cand" className="nav-link">Când?</a>
                <a style={{ color: navbarTextColor }} href="#unde" className="nav-link">Unde?</a>
                <a style={{ color: navbarTextColor }} href="#confirmare" className="nav-link">Confirmare</a>
            </div>
        </nav>
    );
}

export default NavigationBar;