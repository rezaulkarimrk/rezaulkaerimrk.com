import React from 'react';

import './Services.css';
import { services } from '../../constants';
import ServicesItem from './Service/ServicesItem';

const Services = () => {
  return (
    <div className='app__services section_padding ' id='services' >

      <h1>Our <span className='app__span' > Services</span></h1>

      <div className='app__services-container' >
        {
            services.map((service, index) => (
              <ServicesItem data={service} icon={service.icon} key={service.title+index}/>
          ))
        }
      </div>
        
    </div>
  )
}

export default Services;