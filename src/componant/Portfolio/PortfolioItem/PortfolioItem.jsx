import React from 'react'
import {FiExternalLink}  from 'react-icons/fi';

const PortfolioItem = ({portfolio}) => {

    const {img , title, desc, link} = portfolio;

    return (
        <div className='app__portfolio-container_box' >
            <img src={img} alt="images" />
            <div className='app__portfolio-container_box-content' >
                <h4>{title}</h4>
                <p>{desc}</p>
                <a href={link} target='__blank' className='' ><FiExternalLink /></a>
            </div>
        </div>
    )
}

export default PortfolioItem