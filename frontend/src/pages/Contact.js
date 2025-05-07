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
    <div class="container">
      <div class="row mt-2 center-font">
        <div class="col-12">
          <p class="fancy-font">Want to place an order? Fill out the form below to inquire</p>
        </div>
      </div>
      <form>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label class="form-label"><span class="required-field">*</span>First Name:</label>
            <input class="form-control" name="fname" value={user.fname} onChange={handleChange} type="text" id="nameEntry"  />
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label class="form-label"><span class="required-field">*</span>Last Name:</label>
            <input class="form-control" name="lname" value={user.lname} onChange={handleChange} type="text" id="nameEntry"  />
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label class="form-label"><span class="required-field">*</span>Email Address:</label>
            <input class="form-control" name="email" value={user.email} onChange={handleChange} type="email" id="exampleInputEmail1"  />
            <div class="form-text">We'll never share your email address with anyone else.</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label class="form-label"><span class="required-field">*</span>Phone Number:</label>
            <input class="form-control" name="phone" value={user.phone} onChange={handleChange} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 mb-3 align-self-center">
            <label class="form-label"><span class="required-field">*</span>Order Information or Special Requests:</label>
            <textarea class="form-control order-details" name="info" value={user.info} onChange={handleChange} placeholder="Please provide details such as desserts needed, date of the event, event type, etc." type="text" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col col-12 button-container">
            <button class="btn btn-lg btn-success" type="button" onClick={sendEmail}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;