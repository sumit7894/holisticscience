import React from 'react'
import './hero.css'
import LOGO from '../../Utils/icons/logo.png'
const Hero = () => {
  const importantBlogs = [
    { title: 'Syllabus for written examination for PGT (Biology)', link: 'https://www.holistic-science.org/blogs/4' },
  ];
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="profile-pic"></div>
        <img src={LOGO} className='logo__img' alt='holistic__science'/>
        <div className="content">
          <h1>Welcome to the dynamic world of biology and chemistry education</h1>
          <p>
            Brought to you by Kumar Sambhav Pal and Kumar Saurabh Pal. I'm Kumar Sambhav Pal, specializing in Biology,
            while my brother Kumar Saurabh Pal is your guide in Chemistry. Together, we redefine the learning experience
            through our unique teaching methods.
          </p>
        </div>
      </div>
      <div className='featured-blogs'>
        <h2>Featured Blogs</h2>
        <ul>
          {importantBlogs.map((blog, index) => (
            <li key={index}>
              <a href={blog.link}>{blog.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero