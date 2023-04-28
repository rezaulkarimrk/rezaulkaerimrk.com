import React from 'react'

import './About.css'
import { images, data } from '../../constants'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='app__about section_padding' id='about' >
      <div className='app__about-img'>
         <img src={images.about} alt="about image" />
      </div>
      <div className='app__about-content' >
        <h2 className='app__about-content_heading' >About <span className='app__span' >Me</span></h2>
        <h3>Web Developer</h3>
        <p>{data.about}</p>
        <NavLink to={'/about'} className="app__btn" >
          Read More
        </NavLink>
      </div>
    </div>
  )
}

export default About