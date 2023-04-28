import React, { useEffect, useState } from 'react'

import './Contact.css'

const Contact = () => {
  
  const [ip, setIP] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [userNotification, setUserNotification] = useState(false);
  const [message, setMessage] = useState('Thanks for your email');



  //get ip address
  const ipDetails = async () => {
    await fetch(`https://api.ipify.org/?format=json`)
          .then(res => res.json())
          .then(data => {
            setIP(data);
          })
          .catch(error => {
            console.log(error);
            setIP(false);
          })
  }

  useEffect(() => {
     //get user geo info
    navigator.geolocation.getCurrentPosition( async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      
      await fetch(url)
      .then(res => res.json())
      .then(data => {
        setUserDetails( data.address);
      })
      .catch(error => {
        console.log(error);
        setUserDetails(false)
      });
    })

    ipDetails();

  }, []);

  // catch clint data
  const handleChange = (e) => {
    const value = e.target.name;

    if(value === 'name'){setUserMessage({name : e.target.value})}
    else if(value === 'email'){userMessage.email = e.target.value}
    else if(value === 'phone'){userMessage.phone = e.target.value}
    else if(value === 'subject'){userMessage.subject = e.target.value}
    else if(value === 'message'){userMessage.message = e.target.value}
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allData = ({...userMessage, ...userDetails, ...ip});

    //data fetch area
    

    //to show a notification in clint
    setUserNotification(true)
    setTimeout(() => setUserNotification(false), 5000);

    e.target.reset();
    console.table(allData);
    
  }
  
  return (
    <div className='app__contact section_padding' id='contact' >
      {userNotification && <div className='app__contact-warning opacity' >
                  <h2>{message}</h2>
              </div>
      }

      <h1 className='app__contact-heading' >Contact <span className='app__span' >Me!</span></h1>

      <form onSubmit={handleSubmit} className='app__contact-form' action="#">
        <div className='app__contact-input'>
          <input name='name' type="text" placeholder='Full Name' onChange={handleChange} />
          <input name='email' type="email" placeholder='Email Address' onChange={handleChange} />
        </div>
        <div className='app__contact-input'>
          <input name='phone' type="number" placeholder='Mobile Number' onChange={handleChange} />
          <input name='subject' type="text" placeholder='Email Subject' onChange={handleChange} />
        </div>
        <textarea name="message" id="" cols="30" rows="10" placeholder='Youe Message' onChange={handleChange} ></textarea>
        <button type='submit' className='app__btn'  >Send Message</button>
      </form>
    </div>
  )
}

export default Contact