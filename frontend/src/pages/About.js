import React from "react";
import tatumLogo from "../assets/images/tatumbakes.jpg";
import bakingBg from "../assets/images/bakingbackground.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-4" style={{color: '#6d8454', fontWeight: 'bold'}}>About Tatum Bakes</h1>
          <p className="lead fancy-font" style={{fontSize: '1.3rem', color: '#555'}}>
            Where passion meets perfection in every bite
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img 
            src={tatumLogo} 
            alt="Tatum Bakes Logo" 
            className="img-fluid rounded shadow-lg"
            style={{width: '100%', maxWidth: '400px'}}
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-4" style={{color: '#6d8454'}}>Our Story</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            Welcome to Tatum Bakes! What started as a passion for creating delicious treats 
            in a home kitchen has blossomed into a beloved custom bakery serving our wonderful community.
          </p>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            Every cake, cupcake, and cookie is crafted with premium ingredients and a whole lot of love. 
            We believe that life's special moments deserve something extraordinary, and we're honored 
            to be part of your celebrations.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow" style={{border: 'none', borderRadius: '15px'}}>
            <div className="card-body p-4">
              <h3 className="card-title mb-3" style={{color: '#6d8454'}}>
                <i className="bi bi-heart-fill me-2"></i>Our Philosophy
              </h3>
              <p className="card-text" style={{fontSize: '1.05rem'}}>
                We believe in using only the finest ingredients - real butter, pure vanilla extract, 
                farm-fresh eggs, and premium chocolate. No shortcuts, no artificial flavors, just 
                honest, homemade goodness that tastes as amazing as it looks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow" style={{border: 'none', borderRadius: '15px'}}>
            <div className="card-body p-4">
              <h3 className="card-title mb-3" style={{color: '#6d8454'}}>
                <i className="bi bi-star-fill me-2"></i>What Makes Us Special
              </h3>
              <p className="card-text" style={{fontSize: '1.05rem'}}>
                Every order is custom-made with your preferences in mind. From dietary restrictions 
                to design details, we work closely with you to create the perfect dessert for your 
                special occasion. Your vision, our expertise!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${bakingBg})`,
        backgroundSize: 'cover',
        borderRadius: '15px',
        padding: '3rem'
      }}>
        <div className="col-12">
          <h2 className="text-center mb-4" style={{color: '#6d8454'}}>What We Offer</h2>
          <div className="row">
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🎂 Custom Cakes</h4>
                <p>Beautifully designed cakes for weddings, birthdays, and all celebrations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🧁 Cupcakes</h4>
                <p>Individual treats perfect for parties, gifts, or just because</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🍪 Cookies</h4>
                <p>Classic and creative cookies that melt in your mouth</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🥧 Specialty Desserts</h4>
                <p>Brownies, bars, pies, and other sweet creations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🌾 Dietary Options</h4>
                <p>Gluten-free, vegan, and other dietary accommodations available</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 text-center">
              <div className="p-3">
                <h4 style={{color: '#6d8454'}}>🎨 Custom Designs</h4>
                <p>Bring your vision to life with personalized decorations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <div className="p-5" style={{backgroundColor: '#6d8454', borderRadius: '15px', color: 'white'}}>
            <h3 className="mb-3">Ready to Order?</h3>
            <p className="mb-4" style={{fontSize: '1.1rem'}}>
              Let's create something delicious together! Contact us today to discuss your custom order.
            </p>
            <a href="/contact" className="btn btn-light btn-lg" style={{fontWeight: 'bold', padding: '12px 40px'}}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;