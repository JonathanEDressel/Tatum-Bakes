import React, { useEffect, useState } from "react";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import styles from '../styles/styles.css';

const Contact = () => {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    info: ''
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function checkFieldValid(data) {
    if(data && data.length > 0)
      return true;
    return false;
  }

  const canSendEmail = () => {
    if(user && checkFieldValid(user.fname) && checkFieldValid(user.lname) && user.email && isValidEmail(user.email)
       && checkFieldValid(user.phone) && checkFieldValid(user.info))
      return true;
    return false;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!canSendEmail()) {
      alert('Please fill out all fields with a red * next to them!')
      return;
    }

    var userId = process.env.REACT_APP_USER_ID;
    var receiptEmail = process.env.REACT_APP_DESIGNATED_EMAIL;
    var serviceId = process.env.REACT_APP_SERVICE_ID;
    var templateId = process.env.REACT_APP_TEMPLATE_ID;
    
    const templateParams = {
      user_email: user.email,
      receipt_email: receiptEmail,
      fname: user.fname,
      lname: user.lname,
      pnumber: user.phone,
      information: user.info
    };

    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: userId,
      blockHeadless: true,
      blockList: {
        list: [],
        watchVariable: 'user_email'
      },
      limitRate: {
        id: 'app',
        throttle: 50000
      }
    })
      .then((result) => {
        alert('Email sent! You will be contacted shortly!');
        console.log('EmailJS result:', result);
      }, (error) => {
        console.log('EmailJS error:', error.status)
        alert('Error: ' + error.status + ' - ' + error.text);
    });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prevDta) => ({
      ...prevDta,
      [name]: value,
    }));
  }

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>Contact Us</h1>
          <p className="lead fancy-font" style={{fontSize: '1.2rem', color: '#555'}}>
            Let's create something delicious together!
          </p>
          <p className="text-muted">
            Fill out the form below and we'll get back to you within 24-48 hours
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg" style={{border: 'none', borderRadius: '15px'}}>
            <div className="card-body p-5">
              <form>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" style={{fontWeight: 'bold', color: '#6d8454'}}>
                      <span className="required-field">*</span> First Name
                    </label>
                    <input 
                      className="form-control form-control-lg" 
                      name="fname" 
                      value={user.fname} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="John"
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" style={{fontWeight: 'bold', color: '#6d8454'}}>
                      <span className="required-field">*</span> Last Name
                    </label>
                    <input 
                      className="form-control form-control-lg" 
                      name="lname" 
                      value={user.lname} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="Doe"
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" style={{fontWeight: 'bold', color: '#6d8454'}}>
                      <span className="required-field">*</span> Email Address
                    </label>
                    <input 
                      className="form-control form-control-lg" 
                      name="email" 
                      value={user.email} 
                      onChange={handleChange} 
                      type="email" 
                      placeholder="john.doe@example.com"
                      style={{borderRadius: '10px'}}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" style={{fontWeight: 'bold', color: '#6d8454'}}>
                      <span className="required-field">*</span> Phone Number
                    </label>
                    <input 
                      className="form-control form-control-lg" 
                      name="phone" 
                      value={user.phone} 
                      onChange={handleChange} 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      style={{borderRadius: '10px'}}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{fontWeight: 'bold', color: '#6d8454'}}>
                    <span className="required-field">*</span> Order Details & Special Requests
                  </label>
                  <textarea 
                    className="form-control order-details" 
                    name="info" 
                    value={user.info} 
                    onChange={handleChange} 
                    placeholder="Please provide details such as:&#10;• Type of dessert (cake, cupcakes, cookies, etc.)&#10;• Flavor preferences&#10;• Event date and type&#10;• Number of servings needed&#10;• Design ideas or themes&#10;• Any dietary restrictions&#10;• Delivery or pickup preference"
                    rows="8"
                    style={{borderRadius: '10px', fontSize: '1rem'}}
                  />
                </div>

                <div className="text-center">
                  <button 
                    className="btn btn-lg px-5" 
                    type="button" 
                    onClick={sendEmail}
                    style={{
                      backgroundColor: '#6d8454',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '10px',
                      padding: '15px 60px',
                      fontSize: '1.1rem',
                      border: 'none'
                    }}
                  >
                    Submit Order Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center shadow-sm" style={{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#f8f9fa'
          }}>
            <div className="card-body p-4">
              <div className="mb-3" style={{fontSize: '3rem', color: '#6d8454'}}>
                📧
              </div>
              <h5 className="card-title mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Email Us
              </h5>
              <p className="card-text">
                Prefer email? Send us a message anytime and we'll respond within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center shadow-sm" style={{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#f8f9fa'
          }}>
            <div className="card-body p-4">
              <div className="mb-3" style={{fontSize: '3rem', color: '#6d8454'}}>
                📱
              </div>
              <h5 className="card-title mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Call or Text
              </h5>
              <p className="card-text">
                Need a quick answer? Give us a call or send a text during business hours.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center shadow-sm" style={{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: '#f8f9fa'
          }}>
            <div className="card-body p-4">
              <div className="mb-3" style={{fontSize: '3rem', color: '#6d8454'}}>
                💬
              </div>
              <h5 className="card-title mb-3" style={{color: '#6d8454', fontWeight: 'bold'}}>
                Social Media
              </h5>
              <p className="card-text">
                Follow us on Instagram and Facebook for daily updates and to see our latest creations!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="alert" style={{
            backgroundColor: '#f0f4ed',
            border: '2px solid #6d8454',
            borderRadius: '15px'
          }}>
            <h5 className="alert-heading" style={{color: '#6d8454'}}>
              <i className="bi bi-clock-fill me-2"></i>Response Time & Ordering
            </h5>
            <p className="mb-2">
              <strong>We typically respond within 24-48 hours.</strong> Please note that custom orders require advance notice:
            </p>
            <ul className="mb-0">
              <li>Custom Cakes: 2-3 weeks preferred</li>
              <li>Cupcakes: 1 week minimum</li>
              <li>Cookies & Other Items: 3-5 days minimum</li>
              <li>Rush orders may be accommodated with additional fees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;