import React from 'react';
import './Portfolio.css';

import { portfolio } from '../../constants';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <div className='app__portfolio section_padding' id='portfolio' >
      <h1 className='app__portfolio-heading' >Latest <span className='app__span' >Project</span></h1>
      <div className='app__portfolio-container' >
        {
          portfolio.map((item, index) => (
            <PortfolioItem portfolio={item} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio;