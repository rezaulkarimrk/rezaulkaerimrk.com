import React from 'react'
import { data } from '../../constants';
import { NavLink } from 'react-router-dom';

import './SingleAbout.css'

const SingleAbout = () => {
  return (
    <div className='app__single-about' >
      <h2 className='app__singleAbout-content_heading app__span' >About Me</h2>
        <h2>Web Developer</h2>
        <p>{data.aboutMore}</p>
        <NavLink to={'/'} className='app__btn' >
          Back To Home
        </NavLink>
    </div>
  )
}

export default SingleAbout;