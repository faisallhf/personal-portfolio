import React from "react";
import ContactCSS from "./Contact.module.css";

function Contact(){
  return(
      <>
      <section id="contact">
        <div className={ContactCSS.contact}>
          <div className={ContactCSS.proclass}>
            <h2>Contact Me</h2>
          </div>
          <form data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">

              <label>Name :</label>
              <input type="text" placeholder="Enter Name *" id="name" required/>

              <label>Email :</label>
              <input type="email" placeholder="Enter Email *" id="email" required/>

              <label>Phone :</label>
              <input type="phone" placeholder="Enter Phone *" id="phone" required/>

              <button>Submit </button>
          </form>
        </div>
      </section>
      </>
  );
}

export default Contact;