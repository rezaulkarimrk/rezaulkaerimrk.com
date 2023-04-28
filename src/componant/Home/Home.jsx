import React, {useEffect, useRef} from 'react';

import {FaFacebook, FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa';
import Typed from 'typed.js';

import './Home.css';
import {file, images, data} from '../../constants';

const Home = () => {
  const el = useRef(null);
  const spanData = ['Web Developer', 'Frontend Developer', 'Backend Developer']
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [...spanData],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      // loopCount: Infinity,
      // showCursor: fyalse,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className='app__home section_padding' id='home'>
      <div className='app__home-content'>
         <h3>Hello, It's Me</h3>
         <h1>Rezaul Karim</h1>
         <h3>And i'm a <span ref={el} className="app__span"></span ></h3>
         <p>{data.description}</p>
         <div className='app__home-content_social-icons' >
          <a href="https://www.facebook.com/mrk99rk" target='__blank' > <FaFacebook className='icon' /> </a>
          <a href="https://github.com/rezaulkarimrk" target='__blank' > <FaGithub className='icon' /> </a>
          <a href="https://www.linkedin.com/in/rezaul-karim-rk-055386167/" target='__blank' > <FaLinkedin className='icon' /> </a>
          <a href="https://twitter.com/RezaulKarimRKa" target='__blank' > <FaTwitter className='icon' /> </a>
         </div>
         <a href ={file} className='app__btn'  download > Download CV </a>
      </div>
      <div className='app__home-img' >
        <img src={images.portfolio} alt="Photo" />
      </div>
    </section>
  )
}

export default Home