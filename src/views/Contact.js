import React, { useState, useEffect, useContext } from "react";
function Contact(){
    useEffect(()=>{
        //setting page title
        document.title = 'Contact';
    },[])
    return(
        <>
         <div className="container mt-5">
  <h2>Contact Us</h2>
  <form>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="name" className="">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group col-md-6">
        <label for="email">Email address:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
    </div>
    <div className="form-group">
      <label for="message">Message:</label>
      <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
        </>
    )
}
export default Contact;