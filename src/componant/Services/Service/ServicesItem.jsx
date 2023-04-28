import React from 'react'
import {BiCodeAlt } from 'react-icons/bi';
import {MdOutlineEqualizer } from 'react-icons/md';
import {GrVmMaintenance } from 'react-icons/gr';
import {SiFrontendmentor , SiBackendless} from 'react-icons/si';

import {NavLink } from 'react-router-dom'

const servicesItem = (data) => {
  return (
    <div className='app__services-item' >
         <i class={data.data.icon}></i>
         <h3>{data.data.title}</h3>
         <p>{data.data.sortDesc}</p>

         <NavLink to={`/services/${data.data.id}`} className={'app__btn'} >Read More</NavLink>
    </div>
  )
}

export default servicesItem