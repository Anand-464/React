import React from 'react';
import Navbar from './Navbar';

function Contact() {

  const headingColor = "lightblue";

  function showEnthusiasm() {
    document.getElementById("message").innerHTML = "Hello from React! I love this page!";
    document.getElementById("heading").style.backgroundColor = headingColor;
  }

  return (
    <>
    <Navbar/>
    <div className="card p-4 mb-4">
      <h1 id="heading">Contact</h1>
      <p>This is the Contact Page</p>
      <p id="message">
        Click the button to see my enthusiasm!
      </p>
      <button className="btn btn-primary" onClick={showEnthusiasm}>Show Enthusiasm</button>
    </div>
    </>
  );
}

export default Contact;