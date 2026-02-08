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
    <div className="base-body"> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-evenly" style={{ padding: "0px"}}>
        <div className="container-fluid" style={{backgroundColor:"#6d8454", height: "80px"}}>
          <div className="collapse navbar-collapse" style={{justifyContent: "center"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/contact">Contact</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-option active" aria-current="page" href="/about">About</a>
              </li> */}
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
      <div className="footer">
        <div className="row">
          <div className="col col-auto">
            <a className="icons" href="https://www.facebook.com/profile.php?id=61568782852360" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="col col-auto">
            <a className="icons" href="https://www.instagram.com/tatumbakescakes?igsh=NDlyc2U5c3NuMmF5&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="base-body">
    {/* Hero Section */}
    <div className="container-fluid p-0" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgorundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="text-center text-white">
        <img src={logo} className="img-fluid mb-4" style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '5px solid white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }} alt="Tatumbakes Logo" />
        <h1 className="display-2 fw-bold mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Tatum Bakes
        </h1>
        <p className="lead fs-3 fancy-font mb-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Homemade Treats. Freshly Baked. Always with Love.
        </p>
        <div className="mt-4">
          <a href="/menu" className="btn btn-lg btn-light me-3 px-5 py-3" style={{
            fontWeight: 'bold',
            borderRadius: '50px',
            fontSize: '1.2rem'
          }}>
            View Menu
          </a>
          <a href="/contact" className="btn btn-lg px-5 py-3" style={{
            backgroundColor: '#6d8454',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '50px',
            fontSize: '1.2rem',
            border: 'none'
          }}>
            Order Now
          </a>
        </div>
      </div>
    </div>

    {/* Welcome Section */}
    <div className="container py-5">
      <div className="row align-items-center my-5">
        <div className="col-md-6 mb-4">
          <h2 className="display-5 mb-4" style={{color: '#6d8454', fontWeight: 'bold'}}>
            Welcome to Tatum Bakes
          </h2>
          <p className="fs-5 mb-3" style={{lineHeight: '1.8'}}>
            At Tatum Bakes, we believe every bite should feel like home. Each dessert is 
            handcrafted with premium ingredients, baked fresh to order, and made with love.
          </p>
          <p className="fs-5 mb-4" style={{lineHeight: '1.8'}}>
            Whether you're celebrating a birthday, wedding, or just want to treat yourself, 
            we create custom desserts that are as beautiful as they are delicious.
          </p>
          <a href="/about" className="btn btn-outline-secondary btn-lg" style={{
            borderColor: '#6d8454',
            color: '#6d8454',
            fontWeight: 'bold',
            borderRadius: '10px',
            padding: '12px 30px'
          }}>
            Learn Our Story
          </a>
        </div>
        <div className="col-md-6 mb-4">
          <img src={logo} className="img-fluid rounded shadow-lg" alt="Tatum Bakes" style={{
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }} />
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-5" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <h2 className="text-center display-5 mb-5" style={{color: '#6d8454', fontWeight: 'bold'}}>
          Why Choose Tatum Bakes?
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '30px'
            }}>
              <div className="card-body">
                <div style={{fontSize: '4rem', marginBottom: '20px'}}>🧁</div>
                <h4 className="mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                  Made Fresh Daily
                </h4>
                <p style={{fontSize: '1.05rem', color: '#555'}}>
                  Every order is baked fresh using the finest ingredients. No shortcuts, 
                  no preservatives—just pure, delicious goodness.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '30px'
            }}>
              <div className="card-body">
                <div style={{fontSize: '4rem', marginBottom: '20px'}}>🎨</div>
                <h4 className="mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                  Custom Designs
                </h4>
                <p style={{fontSize: '1.05rem', color: '#555'}}>
                  Your imagination is our canvas. We work with you to create custom 
                  designs that match your vision perfectly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '30px'
            }}>
              <div className="card-body">
                <div style={{fontSize: '4rem', marginBottom: '20px'}}>💚</div>
                <h4 className="mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                  Special Diets Welcome
                </h4>
                <p style={{fontSize: '1.05rem', color: '#555'}}>
                  Gluten-free, vegan, nut-free? No problem! We accommodate dietary 
                  restrictions without sacrificing flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Popular Items Section */}
    <div className="container py-5">
      <h2 className="text-center display-5 mb-5" style={{color: '#6d8454', fontWeight: 'bold'}}>
        Customer Favorites
      </h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
            <div className="card-body p-4">
              <div className="text-center mb-3" style={{fontSize: '3.5rem'}}>🎂</div>
              <h4 className="card-title text-center mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Custom Celebration Cakes
              </h4>
              <p className="card-text text-center mb-3">
                Make your special day unforgettable with a stunning custom cake designed just for you.
              </p>
              <div className="text-center">
                <a href="/menu#cakes" className="btn" style={{
                  backgroundColor: '#6d8454',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '10px 25px'
                }}>
                  Explore Cakes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
            <div className="card-body p-4">
              <div className="text-center mb-3" style={{fontSize: '3.5rem'}}>🧁</div>
              <h4 className="card-title text-center mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Gourmet Cupcakes
              </h4>
              <p className="card-text text-center mb-3">
                Individual treats perfect for parties, gifts, or simply satisfying your sweet tooth.
              </p>
              <div className="text-center">
                <a href="/menu#cupcakes" className="btn" style={{
                  backgroundColor: '#6d8454',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '10px 25px'
                }}>
                  View Cupcakes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow" style={{border: 'none', borderRadius: '15px', overflow: 'hidden'}}>
            <div className="card-body p-4">
              <div className="text-center mb-3" style={{fontSize: '3.5rem'}}>🍪</div>
              <h4 className="card-title text-center mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Artisan Cookies
              </h4>
              <p className="card-text text-center mb-3">
                From classic chocolate chip to decorated sugar cookies, freshly baked to perfection.
              </p>
              <div className="text-center">
                <a href="/menu#cookies" className="btn" style={{
                  backgroundColor: '#6d8454',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '10px 25px'
                }}>
                  See Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="py-5" style={{backgroundColor: '#f0f4ed'}}>
      <div className="container">
        <h2 className="text-center display-5 mb-5" style={{color: '#6d8454', fontWeight: 'bold'}}>
          What Our Customers Say
        </h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '25px'
            }}>
              <div className="card-body">
                <div className="mb-3" style={{color: '#ffc107', fontSize: '1.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="mb-3 fancy-font" style={{fontSize: '1.1rem'}}>
                  "The wedding cake was absolutely stunning and tasted even better than it looked! 
                  Our guests are still raving about it. Thank you for making our day so special!"
                </p>
                <p className="mb-0" style={{fontWeight: 'bold', color: '#6d8454'}}>
                  - Sarah & Michael
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '25px'
            }}>
              <div className="card-body">
                <div className="mb-3" style={{color: '#ffc107', fontSize: '1.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="mb-3 fancy-font" style={{fontSize: '1.1rem'}}>
                  "Best cupcakes I've ever had! Ordered for my daughter's birthday and everyone 
                  loved them. The chocolate fudge and salted caramel were incredible!"
                </p>
                <p className="mb-0" style={{fontWeight: 'bold', color: '#6d8454'}}>
                  - Jennifer M.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm" style={{
              border: 'none',
              borderRadius: '15px',
              padding: '25px'
            }}>
              <div className="card-body">
                <div className="mb-3" style={{color: '#ffc107', fontSize: '1.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="mb-3 fancy-font" style={{fontSize: '1.1rem'}}>
                  "Professional, accommodating, and talented! Made gluten-free cookies for my son's 
                  party that were so good, nobody could tell the difference. Highly recommend!"
                </p>
                <p className="mb-0" style={{fontWeight: 'bold', color: '#6d8454'}}>
                  - David R.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12">
          <div className="text-center p-5" style={{
            backgroundColor: '#6d8454',
            borderRadius: '20px',
            color: 'white'
          }}>
            <h2 className="display-5 mb-3" style={{fontWeight: 'bold'}}>
              Ready to Order Something Delicious?
            </h2>
            <p className="lead mb-4" style={{fontSize: '1.3rem'}}>
              Let's create the perfect dessert for your next celebration!
            </p>
            <p className="mb-4">
              Custom orders require advance notice. Contact us today to discuss your vision 
              and secure your date.
            </p>
            <div className="mt-4">
              <a href="/contact" className="btn btn-light btn-lg me-3 px-5 py-3" style={{
                fontWeight: 'bold',
                borderRadius: '50px',
                fontSize: '1.2rem'
              }}>
                Place an Order
              </a>
              <a href="/gallery" className="btn btn-outline-light btn-lg px-5 py-3" style={{
                fontWeight: 'bold',
                borderRadius: '50px',
                fontSize: '1.2rem'
              }}>
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
