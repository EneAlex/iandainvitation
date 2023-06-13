import React, { useState, useEffect, useRef } from 'react';
import Clock from 'react-clock';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-clock/dist/Clock.css';
import './SectionInvite.css';
import './SectionPresenter.css';
import mySvg from '../src/assets/imagefirst.jpg';
import eng from '../src/assets/engagment.jpg';
import ring from '../src/assets/ring-eng.jpg';
import corfu from '../src/assets/corfu.jpg';
import three from '../src/assets/3.jpg';
import church from '../src/assets/church.jpeg';
import glasses from '../src/assets/glasses.jpeg';
import confirmation from '../src/assets/bg2.jpg';
import './text.css';
import './fonts.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottie from 'lottie-web';
import animDecorData from '../src/lottie-animations/ornament-animation.json';
import animWeData from '../src/lottie-animations/alex&irina.json';
import animWeHuggingData from '../src/lottie-animations/marriage-couple-hugging.json';

import { TfiLocationPin } from "react-icons/tfi";
import { TfiTime } from "react-icons/tfi";
import { TfiDirection } from "react-icons/tfi";


const SectionInvite = () => {

    const latitudeChurch = 45.66562063195634;
    const longitudeChurch = 25.60868362016833;

    const latitudeParty = 45.60145732205793;
    const longitudeParty = 25.647198718633017;

    const openGoogleMaps = (latitude, longitude) => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = document.getElementById('ce').offsetTop - 1000;
        if (scrollPosition > threshold) { startAnimation(); }
    };

    const animDecorRef = useRef(null);
    let animDecor = null;

    const animDecorRef2 = useRef(null);
    let animDecor2 = null;

    const animWeRef = useRef(null);
    let animWe = null;

    const animHuggingRef = useRef(null);
    let animHugging = null;

    const [currentTime, setCurrentTime] = useState(new Date());


    //FORM

    const [name, setName] = useState('');
    const [numberOfPersons, setNumberOfPersons] = useState('');
    const [numberOfChildren, setNumberOfChildren] = useState('');
    const [menuType, setMenuType] = useState('');
    const [message, setMessage] = useState('');
    const [participate, setParticipate] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleNumberOfPersonsChange = (e) => {
        setNumberOfPersons(e.target.value);
    };

    const handleNumberOfChildrenChange = (e) => {
        setNumberOfChildren(e.target.value);
    };

    const handleMenuTypeChange = (e) => {
        setMenuType(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleParticipateChange = (e) => {
        setParticipate(e.target.value === 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Name:', name);
        console.log('Number of Persons:', numberOfPersons);
        console.log('Number of Children:', numberOfChildren);
        console.log('Menu Type:', menuType);
        console.log('Message:', message);
        console.log('Participate:', participate);

        const formData = {};
        formData.name = name;
        formData.message = message;
        formData.accept = participate;
      
          // Make a POST request
          fetch('http://localhost:8081/invitation/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from the server
              console.log(data);
            })
            .catch((error) => {
              // Handle any errors
              console.error(error);
            });
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        animDecor = lottie.loadAnimation({
            container: animDecorRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animDecorData,
        });

        animDecor.addEventListener('complete', () => {
            animDecor.goToAndStop(animDecor.totalFrames, true);
        });

        animDecor2 = lottie.loadAnimation({
            container: animDecorRef2.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animDecorData,
        });

        animDecor2.addEventListener('complete', () => {
            animDecor2.goToAndStop(animDecor2.totalFrames, true);
        });

        animWe = lottie.loadAnimation({
            container: animWeRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animWeData,
        });

        animHugging = lottie.loadAnimation({
            container: animHuggingRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animWeHuggingData,
        });

        //clock
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            animDecor.destroy();
            animDecor2.destroy();
            animWe.destroy();
            animHugging.destroy();
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const startAnimation = () => {
        animDecor.play();
        animDecor2.play();
    };

    return (
        <div style={{ backgroundColor: 'green' }} >

            <div className='section-list first'>

                <div className='section-contaioner'>
                    <div className='section special'>
                        {/* <div className='square'><div className='square-fill'></div> </div> */}
                        <div className='full-screen-image'>
                            <img src={corfu} alt="Section Image" className="section-container-full-image" />
                        </div>
                        <div className='section-content'>
                            <div className='content'>
                                <p className='dancingScript upperCase fontlarge textCollorWhite name'>
                                    Irina
                                    <span> & </span>
                                    Alex
                                </p>
                                <p className='dancingScript fontsmall textCollorWhite date'>
                                    21 Octombrie 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div >

                <div id="story" className='section-contaioner'>
                    <div className='section special'>
                        {/* <img src={eng} alt="eng" className="section-container-full-image eng" /> */}
                        {/* <div className='section-content'>
                            <div className='content'>
                                <Player
                                    autoplay
                                    loop={true}
                                    src="https://assets6.lottiefiles.com/packages/lf20_vf7vzf32.json"
                                    style={{ height: '80%', width: '80%' }}
                                >
                                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                </Player>
                                <div ref={animDecorRef} style={{ height: '30%', width:'70%', marginTop :'10px' }}></div>
                                <div className='anim-we' ref={animWeRef}></div>
                                <p className='dancingScript fontsmall'>
                                    In urma cu 3 ani ne-am logodit!
                                </p>
                            </div>
                        </div> */}
                        <div className='presenter-container'>

                            <div className='image-container devided'>
                                <img src={eng} alt="eng" className="image-eng" />
                            </div>

                            <div className="divider"></div>

                            <div className='presenter-info devided'>

                                <div className='anim-we' ref={animWeRef}></div>

                                <div className='title'>
                                    <p className='dancingScript fontsmall eng-label'>
                                        In urma cu 3 ani ne-am logodit!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >

                <div className='section-devider'>
                    <div className='black-devider'>
                        <div className='gold-devider'></div>
                    </div>
                </div>

                <div className='section-contaioner'>
                    <div className='section default white'>
                        {/* <div className='section-content'>
                            <div className='content'>
                                <div className='anim-hugging' ref={animHuggingRef}></div>
                                <p className='dancingScript fontsmall'>
                                    In urma cu un an am spus da in fata ofiterului de stare civila!
                                </p>
                            </div>
                        </div> */}
                        <div className='presenter-container'>

                            <div className='presenter-info devided'>

                                <div className='anim-hugging' ref={animHuggingRef}></div>

                                <div className='title'>
                                    <p className='dancingScript fontsmall eng-label'>
                                        In urma cu un an am spus da in fata ofiterului de stare civila!
                                    </p>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className='image-container devided'>
                                <img src={mySvg} alt="eng" className="image-eng" />
                            </div>
                        </div>
                    </div>
                </div >

                <div className='section-devider'>
                    <div className='black-devider'>
                        <div className='gold-devider'></div>
                    </div>
                </div>

                <div id="ce" className='section-contaioner'>
                    <div className='section default white'>
                        <div className='section-content'>
                            <div className='content'>
                                <div className='anim-decor' ref={animDecorRef}></div>
                                <p className='dancingScript fontsmall'>
                                    Acum, cu emotie si bucurie, va ivnitam sa ne fiti alaturi in momentul in care vom spune da in fata lui Dumnezeu.
                                </p>
                                <p className='dancingScript fontsmall'>
                                    Nunta noastra!
                                </p>
                                <div className='anim-decor' ref={animDecorRef2}></div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='section-devider'>
                    <div className='black-devider'>
                        <div className='gold-devider'></div>
                    </div>
                </div>

                <div className='section-contaioner'>
                    <div className='section default white'>
                        <div className='section-content'>
                            <div className='content'>
                                <p className='dancingScript fontsmall'>
                                    Impreuna cu Nanasii!
                                </p>
                                <p className='dancingScript fontsmall'>
                                    Alina & Alex Soare
                                </p>
                            </div>
                        </div>
                    </div>
                </div >

                <div className='section-devider'>
                    <div className='black-devider'>
                        <div className='gold-devider'></div>
                    </div>
                </div>

                <div id="cand" className='section-contaioner'>
                    <div className='section default white'>
                        <div className='section-content'>
                            <div className='content'>
                                {/* <Clock value={currentTime} /> */}
                                <p className='dancingScript fontsmall'>
                                    Vă așteptăm să fiți alături de noi!
                                </p>
                                <p className='dancingScript fontsmall'>
                                    21.09.2023
                                </p>

                            </div>
                        </div>
                    </div>
                </div >

                <div className='section-devider'>
                    <div className='black-devider'>
                        <div className='gold-devider'></div>
                    </div>
                </div>
                {/* sectiunea UNDE */}
                <div id="unde" className='section-contaioner'>
                    <div className='location-section'>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="location-subtitle">Locații</span>
                                    <h2 class="locaiton-title">Ora si locatie</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-sm">
                                            <div class="cununie-img"><img src={church} alt=""></img></div>
                                            <div class="location-details">
                                                <h5>Cununia religioasă</h5>
                                                <p><TfiLocationPin /> Oficiul stării civile
                                                    Blvd. Al. Averescu, nr 17, Sector 1
                                                    București, România
                                                </p>
                                                <p><TfiTime /> <span>10 Iulie 2023, 13:00</span></p>
                                                <p><TfiDirection /> <a class="location-button" onClick={() => openGoogleMaps(latitudeChurch, longitudeChurch)} >Vezi hartă</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-sm">
                                            <div class="cununie-img"><img src={glasses} alt=""></img></div>
                                            <div class="location-details">
                                                <h5>Petrecere</h5>
                                                <p><TfiLocationPin /> Oficiul stării civile
                                                    Blvd. Al. Averescu, nr 17, Sector 1
                                                    București, România
                                                </p>
                                                <p><TfiTime /> <span>10 Iulie 2023, 13:00</span></p>
                                                <p><TfiDirection /> <a class="location-button" onClick={() => openGoogleMaps(latitudeParty, longitudeParty)} >Vezi hartă</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div id="confirmare" className='section-contaioner'>
                    <div className='confimation-section'>
                        <div class="overlay"></div>
                        <div className='medium-screen-image'>
                            <img src={confirmation} alt="Section Image" className="section-container-full-image" />
                        </div>
                        <div className='container overlay-container'>
                            <div class="row">
                                <div class="col-md-12">
                                    <h2 class="oliven-subtitle-small text-center">Te așteptăm cu drag!
                                        <br />
                                        <span class="oliven-title-meta text-center">Vei participa?</span>
                                        Completează formularul de mai jos pentru a ne anunța decizia ta.
                                    </h2>

                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            Particip:
                                            <input type="radio" name="participate" value="true" checked={participate === true} onChange={handleParticipateChange} />
                                            Particip
                                        </label>
                                        <label>
                                            Nu particip:
                                            <input type="radio" name="participate" value="false" checked={participate === false} onChange={handleParticipateChange} />
                                            Nu particip
                                        </label>
                                        <br />
                                        {participate === true && (
                                            <div>
                                                <label>
                                                    Name:
                                                    <input type="text" value={name} onChange={handleNameChange} />
                                                </label>
                                                <br />
                                                <label>
                                                    Number of Persons:
                                                    <select value={numberOfPersons} onChange={handleNumberOfPersonsChange}>
                                                        <option value="">Select</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </label>
                                                <br />
                                                <label>
                                                    Number of Children:
                                                    <select value={numberOfChildren} onChange={handleNumberOfChildrenChange}>
                                                        <option value="">Select</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        {/* Add more options as needed */}
                                                    </select>
                                                </label>
                                                <br />
                                                <label>
                                                    Menu Type:
                                                    <select value={menuType} onChange={handleMenuTypeChange}>
                                                        <option value="">Select</option>
                                                        <option value="normal">Normal</option>
                                                        <option value="vegetarian">Vegetarian</option>
                                                    </select>
                                                </label>
                                                <br />
                                                <label>
                                                    Message:
                                                    <textarea value={message} onChange={handleMessageChange} />
                                                </label>
                                            </div>
                                        )}
                                        {participate === false && (
                                            <div>
                                                <label>
                                                    Name:
                                                    <input type="text" value={name} onChange={handleNameChange} />
                                                </label>
                                            </div>
                                        )}
                                        <br />
                                        <button type="submit">Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );
}

export default SectionInvite;
