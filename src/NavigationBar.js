import React, { useState, useEffect } from 'react';
import './NavigationBar.css';
import './text.css';

const NavigationBar = () => {

    const [navbarBgColor, setNavbarBgColor] = useState('transparent');
    const [navbarTextColor, setNavbarTextColor] = useState('#5F574F');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = document.getElementById('story').offsetTop;
        const newNavbarBgColor = scrollPosition > threshold ? 'antiquewhite' : 'antiquewhite';
        const newNavbarTextColor = scrollPosition > threshold ? '#5F574F' : '#5F574F';
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
        <nav className="navbar-alex" style={{ backgroundColor: navbarBgColor }}>
            {/* <div className='invitaionLogo'>
          <div className='guestName'>Draga invitat</div>
          <div className='weddingDate'>21 Octombrie 2023</div>
        </div> */}
            <div className='nav-links-alex'>
                <a style={{ color: navbarTextColor }} href="#ce" className="nav-link-alex caveat fontsmall">Ce?</a>
                <a style={{ color: navbarTextColor }} href="#cand" className="nav-link-alex caveat fontsmall">Când?</a>
                <a style={{ color: navbarTextColor }} href="#unde" className="nav-link-alex caveat fontsmall">Unde?</a>
                <a style={{ color: navbarTextColor }} href="#confirmare" className="nav-link-alex caveat fontsmall">Confirmare</a>
            </div>
        </nav>
    );
}

export default NavigationBar;