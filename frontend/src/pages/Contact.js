import React from "react";

const Contact = () => {
  return (
    <div class="container ">
      <div class="row" style={{textAlign: "center"}}>
        <div class="col-12">
          <p>Want to place an order? Fill out the form below to inquire</p>
        </div>
      </div>
      <form>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label for="nameEntry" class="form-label">First & Last Name:</label>
            <input type="name" class="form-control" id="nameEntry"  />
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label for="exampleInputEmail1" class="form-label">Email Address:</label>
            <input type="email" class="form-control" id="exampleInputEmail1"  />
            <div class="form-text">We'll never share your email with anyone else.</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3 align-self-center">
            <label class="form-label">Phone Number:</label>
            <input type="tel" class="form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 mb-3 align-self-center">
            <label class="form-label">Order Information or Special Requests:</label>
            <textarea type="text" class="form-control" style={{width: "50%", height: "200px"}} />
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;