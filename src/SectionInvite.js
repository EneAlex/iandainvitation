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
import church5 from '../src/assets/church5.jpg';
import glasses from '../src/assets/glasses.jpeg';
import glasses5 from '../src/assets/glasses5.jpg';
import sun from '../src/assets/sun.jpg';
import wheatBackgrund from '../src/assets/wheat-backgrund.webp';
import wallpaper from '../src/assets/wallpaper.png';
import confirmationImg from '../src/assets/bg2.jpg';
import './text.css';
import './fonts.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import lottie from 'lottie-web';
import animDecorData from '../src/lottie-animations/ornament-animation.json';
import animWeData from '../src/lottie-animations/alex&irina.json';
import animWeHuggingData from '../src/lottie-animations/marriage-couple-hugging.json';
import animeSunData from '../src/lottie-animations/sun-god-parrent.json';
import 'bootstrap/dist/css/bootstrap.css';


import { TfiLocationPin } from "react-icons/tfi";
import { TfiTime } from "react-icons/tfi";
import { TfiDirection } from "react-icons/tfi";
import { TbBuildingCircus } from "react-icons/tb";
import { TbBuildingChurch } from "react-icons/tb";

import DateTimeDisplay from './DateTimeDisplay';
import CountdownTimer from './CountdownTimer';
import TimerHelper from './TimerHelper';

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

    const animSunRef = useRef(null);
    let animSun = null;

    const [currentTime, setCurrentTime] = useState(new Date());

    const THREE_DAYS_IN_MS = 119 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


    //FORM

    const [name, setName] = useState('');
    const [numberOfPersons, setNumberOfPersons] = useState('');
    const [numberOfChildren, setNumberOfChildren] = useState('');
    // const [menuType, setMenuType] = useState('');
    const [message, setMessage] = useState('');
    const [participate, setParticipate] = useState(true);
    const [accomodation, setAccomodation] = useState(null);
    const [confirmation, setConfirmation] = useState(false);

    const [personNumnerAlert, setPersonNumnerAlert] = useState(false);
    const [nameAlert, setNameAlert] = useState(false);
    const [childrenAlert, setChildrenAlert] = useState(false);
    const [menuAlert, setMenuAlert] = useState(false);
    const [accomodationAlert, setAccomodationAlert] = useState(false);


    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!e.target.value) {
            //setNameAlert(true);
        }
        else {
            setNameAlert(false);
        }
    };

    const handleNumberOfPersonsChange = (e) => {
        setNumberOfPersons(e.target.value);
        if (!e.target.value) {
            //setNameAlert(true);
        }
        else {
            setPersonNumnerAlert(false);
        }
    };

    const handleNumberOfChildrenChange = (e) => {
        setNumberOfChildren(e.target.value);
        if (!e.target.value) {
            //setNameAlert(true);
        }
        else {
            setChildrenAlert(false);
        }
    };

    // const handleMenuTypeChange = (e) => {
    //     setMenuType(e.target.value);
    //     if (!e.target.value) {
    //         //setNameAlert(true);
    //     }
    //     else {
    //         setMenuAlert(false);
    //     }
    // };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleParticipateChange = (e) => {
        setParticipate(e.target.value === 'true');
    };

    const handleAccomodationChange = (e) => {
        setAccomodation(e.target.value);
        if (!e.target.value) {
            //setNameAlert(true);
        }
        else {
            setAccomodationAlert(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Name:', name);
        console.log('Number of Persons:', numberOfPersons);
        console.log('Number of Children:', numberOfChildren);
        // console.log('Menu Type:', menuType);
        console.log('Message:', message);
        console.log('Accomodation:', accomodation);
        console.log('Participate:', participate);


        if (!name) {
            setNameAlert(true);
            return;
        }
        else {
            setNameAlert(false);
        }


        if (participate) {

            if (!numberOfPersons) {
                setPersonNumnerAlert(true);
                return;
            }
            else {
                setPersonNumnerAlert(false);
            }

            if (!numberOfChildren) {
                setChildrenAlert(true);
                return;
            }
            else {
                setChildrenAlert(false);
            }

            // if (!menuType) {
            //     setMenuAlert(true);
            //     return;
            // }
            // else {
            //     setMenuAlert(false);
            // }

            if (!accomodation) {
                setAccomodationAlert(true);
                return;
            }
            else {
                setAccomodationAlert(false);
            }
        }

        const formData = {};
        formData.name = name;
        formData.message = message;
        formData.status = participate;
        formData.accommodation = accomodation === 'true';
        formData.menuType = '';
        formData.childrenNumber = Number(numberOfChildren);
        formData.personNumber = numberOfPersons;

        // Make a POST request
        fetch('http://www.spacesfor2.com:8081/invitation/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => { setConfirmation(true); response.json() })
            .then((data) => {
                setConfirmation(true);
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

        animSun = lottie.loadAnimation({
            container: animSunRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animeSunData,
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
            animSun.destroy();
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const startAnimation = () => {
        animDecor.play();
        animDecor2.play();
    };

    return (
        <div className='main' style={{ backgroundColor: 'green' }} >

            <div className='section-list minus-top'>

                {/* welcome section */}

                <div className='section-contaioner welcom-section' style={{ backgroundColor: 'antiquewhite' }}>

                    <div class="container container-centered">
                        <div class="row">
                            <div class="col">
                                <div className='welcome-section-we'>
                                    <h3 className='caveat fontmedium textCollorWhite'>
                                        Noi,
                                    </h3>
                                    <h2 className='caveat upperCase fontlarge textCollorWhite'>
                                        Irina & Alex
                                    </h2>
                                    <h3 className='caveat fontmedium textCollorWhite'>
                                        <p>NE CĂSĂTORIM!</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="row align-self-center">
                            <div class="col">
                                <div className='welcome-section-we'>
                                    <h3 className='caveat fontmedium textCollorWhite'>
                                        <p>21 Octombrie 2023</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/*sectiunea povesti*/}

                <div id="story" className='section-contaioner'>
                    <div className='location-section'>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm centered">
                                    <h2 class="story-title caveat fontlarge textCollorWhite">Povestea noastră</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-sm">
                                            <div class="cununie-img"><img className='rounded' src={corfu} alt=""></img></div>
                                            <div class="story-details centered">
                                                <h7 class='caveat fontsmall textCollorWhite'>Ne-am cunoscut acum 9 ani</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-md-12">
                                            <div class="cununie-img"><img className='rounded' src={eng} alt=""></img></div>
                                            <div class="story-details centered">
                                                <h7 class='caveat fontsmall textCollorWhite'>Ne-am logodit acum 3 ani</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-md-12">
                                            <div class="cununie-img"><img className='rounded' src={mySvg} alt=""></img></div>
                                            <div class="story-details centered">
                                                <h7 class='caveat fontsmall textCollorWhite'>Ne-am căsătorit civil acum un an</h7>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* sectiunea CE */}

                <div id="ce" className='section-contaioner' style={{ backgroundColor: 'antiquewhite' }}>
                    <div className='content'>
                        <div className='anim-decor' ref={animDecorRef}></div>
                        <div className='content-text'>
                            <p className='caveat fontmedium textCollorWhite'>
                                Acum, cu emoție și bucurie, vă invităm să ne fiți alături în unul dintre cele mai importante, unice și frumoase momente din viața noastră.
                            </p>
                            <p className='caveat fontmedium textCollorWhite'>
                                Nunta noastră!
                            </p>
                        </div>
                        <div className='anim-decor' ref={animDecorRef2}></div>
                    </div>
                </div >

                {/* sectiunte nasi */}

                <div className='section-contaioner centered'>
                    <div className='content godParents'>
                        <p className='caveat fontmedium textCollorWhite'>
                            Împreună cu nănașii
                        </p>

                        <p className='caveat fontmedium textCollorWhite horizontaly-orientation'>
                            Alina
                            {/* <img src={sun} alt="eng" className="image-eng-false" /> */}
                            <div className='image-eng-false' ref={animSunRef}></div>
                            Alex Soare
                        </p>

                    </div>
                </div >

                {/* sectiunea CAND */}

                <div id="cand" className='section-contaioner vertical-orientation' style={{ backgroundColor: 'antiquewhite' }}>
                    {/* <Clock value={currentTime} /> */}
                    {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
                    <h2 style={{ display: 'block' }}>
                        <span
                            className="char1 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(3px) rotate(-8deg)',
                            }}
                        >
                            N
                        </span>
                        <span
                            className="char2 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(2px) rotate(-6deg)',
                            }}
                        >
                            e
                        </span>
                        <span
                            className="char3 empty caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(1px) rotate(-5deg)',
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="char4 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(1px) rotate(-4deg)',
                            }}
                        >
                            c
                        </span>
                        <span
                            className="char5 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(-3deg)',
                            }}
                        >
                            ă
                        </span>
                        <span
                            className="char6 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(-2deg)',
                            }}
                        >
                            s
                        </span>
                        <span
                            className="char7 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(0deg)',
                            }}
                        >
                            ă
                        </span>
                        <span
                            className="char8 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(0deg)',
                            }}
                        >
                            t
                        </span>
                        <span
                            className="char9 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(1deg)',
                            }}
                        >
                            o
                        </span>
                        <span
                            className="char10 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(2deg)',
                            }}
                        >
                            r
                        </span>
                        <span
                            className="char11 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(0px) rotate(3deg)',
                            }}
                        >
                            i
                        </span>
                        <span
                            className="char12 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(1px) rotate(5deg)',
                            }}
                        >
                            m
                        </span>
                        <span
                            className="char13 empty caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(2px) rotate(6deg)',
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="char14 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(2px) rotate(7deg)',
                            }}
                        >
                            î
                        </span>
                        <span
                            className="char15 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(3px) rotate(8deg)',
                            }}
                        >
                            n
                        </span>
                        <span
                            className="char16 caveat fontlarge textCollorWhite"
                            style={{
                                display: 'inline-block',
                                transition: 'none 0s ease 0s',
                                transform: 'translateX(0px) translateY(4px) rotate(9deg)',
                            }}
                        >
                            :
                        </span>
                    </h2>
                    <TimerHelper />
                    <p className='caveat fontmedium textCollorWhite'>
                        Vă așteptăm să fiți alături de noi!
                    </p>
                    <p className='caveat fontmedium textCollorWhite'>
                        21.10.2023
                    </p>
                </div >

                {/* sectiunea UNDE */}

                <div id="unde" className='section-contaioner'>
                    <div className='location-section'>
                        <div class="container">
                            <div class="row">
                                <div class="item col-sm">
                                    <h2 class="locaiton-title centered caveat fontlarge textCollorWhite">Oră și locație</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-sm">
                                            <div class="cununie-img"><img className='rounded' src={church5} alt=""></img></div>
                                            <div class="location-details">
                                                <h5>Cununia religioasă</h5>
                                                <p><TfiLocationPin /> Strada Independenței 1, Brașov
                                                </p>
                                                <p><TbBuildingChurch /> Biserica Sf. Mc. Mina și Sf. Vasile cel mare
                                                </p>
                                                <p><TfiTime /> <span>21 Octombrie 2023, 11:45</span></p>
                                                <p><TfiDirection /> <a class="location-button" onClick={() => openGoogleMaps(latitudeChurch, longitudeChurch)} >Vezi hartă</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="owl-theme row">
                                        <div class="item col-md-12">
                                            <div class="cununie-img"><img className='rounded' src={glasses5} alt=""></img></div>
                                            <div class="location-details">
                                                <h5>Petrecere</h5>
                                                <p><TfiLocationPin /> DN1, Timișu de Jos, Brașov, Romania
                                                </p>
                                                <p><TbBuildingCircus /> Restaurant Castle Events (The Castle)
                                                </p>
                                                <p><TfiTime /> <span>21 Octombrie 2023, 15:30</span></p>
                                                <p><TfiDirection /> <a class="location-button" onClick={() => openGoogleMaps(latitudeParty, longitudeParty)} >Vezi hartă</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                {/* sectiunea CONFIRMARE */}

                <div id="confirmare" className='section-contaioner'>
                    <div className='confimation-section'>
                        <div className='container confirmation-container'>
                            <div class="row">
                                <div class="col-md-12 vertical-orientation" style={{ display: confirmation ? 'block' : 'none' }}>
                                    <h2 class="centered">Vă mulțumim!</h2>
                                </div>
                                <div class="col-md-12 vertical-orientation" style={{ display: confirmation ? 'none' : 'block' }}>
                                    <h2 class="centered">Doriți să participați?</h2>
                                    <h4 class="centered title-spaces fontsmall">
                                        Vă așteptăm cu drag!
                                    </h4>
                                    <h4 class="centered title-spaces fontmedium">
                                        Completează formularul de mai jos pentru a ne anunța decizia voastră.
                                    </h4>
                                    <form className='confirmation-wrapper row' onSubmit={handleSubmit}>
                                        <div className='col-md-12'>
                                            <div className="form-check">
                                                <input type="checkbox" class="form-check-input" name="participate" value="true" checked={participate === true} onChange={handleParticipateChange} />
                                                <label> Particip la eveniment  </label>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div className="form-check">
                                                <input type="checkbox" class="form-check-input" name="participate" value="false" checked={participate === false} onChange={handleParticipateChange} />
                                                <label> Nu pot participa la eveniment</label>
                                            </div>
                                        </div>
                                        <div className='confirmation-form-data' style={{ display: participate ? 'none' : 'block' }}>
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">Numele tău</label>
                                                    <input type="text" class="form-control" value={name} onChange={handleNameChange} id="exampleFormControlInput1" placeholder="Numele și prenumele tău" />
                                                </div>
                                                <div class="alert alert-danger" style={{ display: nameAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm să iți introduci numele.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='confirmation-form-data' style={{ display: participate ? 'block' : 'none' }}>
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="numberOfPersons">Câte persoane</label>
                                                    <select name="numberOfPersons" className="form-control" onChange={handleNumberOfPersonsChange} id="numberOfPersons">
                                                        <option disabled selected value=""> Alege număr persoane </option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                    </select>
                                                </div>
                                                <div class="alert alert-danger" style={{ display: personNumnerAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm să alegi numărul de persoane.
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">Numele tău</label>
                                                    <input type="text" class="form-control" value={name} onChange={handleNameChange} id="exampleFormControlInput1" placeholder="Numele și prenumele tău/vostru" />
                                                </div>
                                                <div class="alert alert-danger" style={{ display: nameAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm să iți introduci numele.
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect1">Numărul copiilor</label>
                                                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleNumberOfChildrenChange}>
                                                        <option disabled selected value="">Alege numărul copiilor</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <div class="alert alert-danger" style={{ display: childrenAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm să alegi numărul copiilor.
                                                </div>
                                            </div>
                                            {/* <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect1">Tipul meniului</label>
                                                    <select class="form-control" id="exampleFormControlSelect1" value={menuType} onChange={handleMenuTypeChange}>
                                                        <option disabled selected value="">Alege meniul</option>
                                                        <option value="normal">Normal</option>
                                                        <option value="vegetarian">Vegetarian</option>
                                                        <option value="vegetarian">Meniu copil</option>
                                                    </select>
                                                </div>
                                                <div class="alert alert-danger" style={{ display: menuAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm să alegi tipul meniului dorit.
                                                </div>
                                            </div> */}
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect1">Dorești cazare pentru noaptea evenimentului?</label>
                                                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleAccomodationChange}>
                                                        <option disabled selected value="">Alege răspunsul</option>
                                                        <option value="true">Da</option>
                                                        <option value="false">Nu</option>
                                                    </select>
                                                </div>
                                                <div class="alert alert-danger" style={{ display: accomodationAlert ? 'block' : 'none' }}>
                                                    <i class="icon-remove-sign"></i>Te rugăm sa ne transmiți dacă dorești cazare.
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Vrei să ne transmiți ceva?</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" value={message} onChange={handleMessageChange} rows="5" placeholder='Ex: Ne poți transmite dacă dorești meniu vegetarian/copil sau....' ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div class="form-group centered">
                                                <input type="submit" value="Confirmare" class="btn confirmation button btn-secondary" data-value="true" />
                                            </div>
                                        </div>
                                        <div className='col-md-12'>
                                            <div class="form-group centered">
                                                <p className='caveat fontmedium' >Vă rugăm să ne confirmați prezența până la 21 Septembrie 2023</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div id="contact" className='section-contaioner'>
                    <div className='container contact-container fontsmall'>
                        <p>Pentru confirmare telefonică sau pentru alte detalii legate de eveniment, vă rugăm să ne contactați:</p>
                        <p>Irina: 0784 840 724 </p>
                        <p>Alex: 0769 115 120 </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SectionInvite;
