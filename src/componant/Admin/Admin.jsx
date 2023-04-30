import React, { useState, useEffect } from 'react';

import './Admin.css';

const Admin = () => {
  const [allContent, setAllContent] = useState(true);
  const [singleContent, setSingleContent] = useState(false);
  const [allData, setAlldata] = useState(null);
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB_URL}message`)
    .then(res => res.json())
    .then(data => {
      setAlldata(data);
      console.table(data)
    })
    .catch(error => console.log(error) );
  }, []);

  const handleAllContent = () => {
    setSingleContent(false);
    setAllContent(true);
  }

  const handleSingleContent = () => {
    setSingleContent(true);
    setAllContent(false);
  }

  return (
    <div className='app__admin' >
      <div className="app__admin-sideber">
        <h3>All Menu</h3>
        <button type='button' className='app__btn' onClick={handleAllContent} >All Message</button>
      </div>
      <div className="app__admin-content">
        {allContent && 
          <div className='app__admin-content_all' >
            <h3>All Menu</h3>
            <button type='button' className='app__button' >All Message</button>
          </div>
        }
        {
          <div className='app__admin-content_single' >
              hello
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Admin