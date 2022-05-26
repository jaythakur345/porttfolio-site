import React, { useState } from 'react';
import "./contact.scss";

export default function Contact() {
const [message, setMassege] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMassege(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
          <img src="Asset/contact.jpg" alt="" />
      </div>
      <div className="right">
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit}>
              <input type="email"  id="email" placeholder="Enter Your Email." />
              <textarea id="message" rows="3" placeholder='Message'></textarea>
            <button type="submit">Send</button>
            {message && <span>Thanks, I'll replay ASAP :)</span>}
          </form>
        </div>
      </div>
  )
}
