import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from "react-router-dom";
import { services } from '../../constants';

import './ServicesList.css';

const ServicesList = () => {
        const {id}=useParams();
        const [data, setData] = useState([]);

    useEffect(() => {
        setData(services[id]);
      }, []);

  return (
    <div className='app__single-services' >
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <NavLink to={'/'} className='app__btn' >Go to Home</NavLink>
    </div>
  )
}

export default ServicesList