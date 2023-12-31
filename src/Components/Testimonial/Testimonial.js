import React from 'react'
import './testimonial.css'
import FIRST__OWNER__IMG from '../../Utils/icons/saurabh.jpeg'
import SECOND__OWNER__IMG from '../../Utils/icons/sambhav.jpeg'
const Testimonial = () => {
  return (
    <div className="testimonials-section">
    <div className="testimonial">
      <img src={FIRST__OWNER__IMG} className='owner-pic'/>
      <div className="testimonial-content">
        <h2>Kumar Saurabh Pal</h2>
        <p>
          Embark on a captivating exploration of chemistry with Kumar Saurabh Pal. My approach involves breaking down
          the intricacies of chemistry into understandable elements, making it an exciting and comprehensible
          experience. Join me on a journey where chemical concepts come to life.
        </p>
      </div>
    </div>

    <div className="testimonial">
      <img src={SECOND__OWNER__IMG} className='owner-pic'/>
      <div className="testimonial-content">
        <h2>Kumar Sambhav Pal</h2>
        <p>
          Venture into the fascinating realm of biology with me. I bring not only expertise but a passion for
          demystifying the wonders of life. My teaching style revolves around making biology an engaging and
          interactive journey, fostering a love for the subject.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Testimonial