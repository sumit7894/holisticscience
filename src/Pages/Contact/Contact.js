import React from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import './contact.css'
import { SocialIcon } from 'react-social-icons'
const Contact = () => {
  return (
    <div>
        <NavBar/>
        <div className="contact-us-page">
      <h2>Contact Us</h2>
      <div className="social-links">
        <div className="social-link" onClick={(e) =>  {
          e.preventDefault();
          window.open('https://t.me/holisticsciencesgs', '_blank')}}>
          <SocialIcon url="https://telegram.com" style={{ height: 100, width: 100 }}/>
        </div>
        <div className="social-link" onClick={(e) => 
          {
          e.preventDefault();
          window.open('https://wa.me/8824812179', '_blank')}}>
          <SocialIcon url="https://whatsapp.com" style={{ height: 100, width: 100 }}/>
        </div>
        <div className="social-link" onClick={(e) => 
        {
        e.preventDefault();
        window.open('https://www.instagram.com/holistic_science_sgs', '_blank')}}>
        <SocialIcon url="https://instagram.com" style={{ height: 100, width: 100 }}/>
        </div>
        <div className="social-link" onClick={(e) =>
          {
            e.preventDefault();
          window.open('https://pin.it/5ap5592', '_blank')}}>
       <SocialIcon network="pinterest" style={{ height: 100, width: 100 }} />
        </div>

        <div className="social-link" onClick={(e) => 
          {
            e.preventDefault();
          window.open('https://youtube.com/@holisticsciencesgs', '_blank')}}>
          <SocialIcon url="https://youtube.com" style={{ height: 100, width: 100 }}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact