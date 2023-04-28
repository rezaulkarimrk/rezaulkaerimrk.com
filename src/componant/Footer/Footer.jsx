import React from 'react'
import {GrLinkUp} from 'react-icons/gr';

import './Footer.css';
const Footer = () => {
  return (
    <div  className='app__footer' >

      <div className='app__footer-text' >
        <p>Copyright &copy; 2023 by <span>rezaulkarimrk.com</span> | All Rights Reserved</p>
      </div>
      <div className="app__footer-iconTop">
        <a href="#home"> <GrLinkUp /> </a>
      </div>
    </div>
  )
}

export default Footer