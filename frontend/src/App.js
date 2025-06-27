import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Menu from "./pages/Menu";
import logo from "./assets/images/tatumbakes.jpg";
import backgorundImg from "./assets/images/bakingbackground.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './styles/styles.css';

const App = () => {
  React.useEffect(() => {
    fetch('/api')
      .then((res) => {
        console.log('res - ', res.json())
      })
  })

  return (
    <div class="base-body"> 
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-evenly" style={{ padding: "0px"}}>
        <div class="container-fluid" style={{backgroundColor:"#6d8454", height: "80px"}}>
          <div class="collapse navbar-collapse" style={{justifyContent: "center"}}>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-option active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a className="nav-option active" aria-current="page" href="/gallery">Gallery</a>
              </li>
              <li class="nav-item">
                <a className="nav-option active" aria-current="page" href="/menu">Menu</a>
              </li>
              <li class="nav-item">
                <a className="nav-option active" aria-current="page" href="/pricing">Pricing</a>
              </li>
              <li class="nav-item">
                <a className="nav-option active" aria-current="page" href="/contact">Contact</a>
              </li>
              <li class="nav-item">
                <a className="nav-option active"  aria-current="page" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div class="footer">
        <div class="row">
          <div class="col col-auto">
            <a class="icons" href="https://www.facebook.com/profile.php?id=61568782852360" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div class="col col-auto">
            <a class="icons" href="https://www.instagram.com/tatumbakescakes?igsh=NDlyc2U5c3NuMmF5&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <div class="base-body">
    <div class="container home-body" style={{backgroundImage: `url(${backgorundImg})` }}>
      <div class="row center-font">
        <div class="col col-12">
          <img src={logo} class="img-fluid home-logo" href="/" alt="Tatumbakes"></img>
        </div>
        <div class="col col-12" style={{ backgroundColor: "#F9F6F0" }}>
          <h1 class="home-header">Tatum Bakes</h1>
          <p class="fancy-font">Homemade Treats. Freshly Baked. Always with Love.</p>
        </div>
        <div class="mt-5 col col-12" style={{ backgroundColor: "#F9F6F0" }}>
          <h1 class="home-header">About</h1>
          <p class="fancy-font">At Tatum Bakes, we believe every bite should feel like home. Handmade, fresh, and full of flavor.</p>
        </div>

        <div class="mt-5 col col-12" style={{ backgroundColor: "#F9F6F0" }}>
          <h1 class="home-header">About</h1>
          <p class="fancy-font">Homemade Treats. Freshly Baked. Always with Love.</p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
