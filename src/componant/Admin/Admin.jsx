import React, { useState, useEffect } from 'react';

import './Admin.css';

const Admin = () => {
  const [allContent, setAllContent] = useState(true);
  const [singleContent, setSingleContent] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB_URL}message`)
    .then(res => res.json())
    .then( async (data) => {
      if(data.success){
        setAlldata(Object.keys(data.data).reverse());
      }
      setTimeout(() => console.log(allData), 5000);
    })
    .catch(error => console.log(error) );
  }, []);

  const handleAllContent = () => {
    setSingleContent(false);
    setAllContent(true);
  }

  const handleSingleContent = (id) => {
    setSingleContent(true);
    setAllContent(false);
    console.log('single', id)
  }

  const handleDelete = (id) => {
    console.log('deleted', id);
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
            <h3>All Message</h3>
            <div className="app_admin-content_all-box">
              <div className='app_admin-content_all-box_item'>
                <table>
                  <thead>
                    <tr>
                      <td><h5>Name</h5></td>
                      <td><h5>Email</h5></td>
                      <td><h5>Mobile</h5></td>
                      <td><h5>subject</h5></td>
                      <td><h5>Action</h5></td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allData.map((item) => (
                        <tr>
                          <td><p>{item.name}</p></td>
                          <td><p>{item.email}</p></td>
                          <td><p>{item.phone}</p></td>
                          <td><p>{item.subject.slice(0, 20)}...</p></td>
                          <td>
                            <button type='button' className='app__message-btn show_more-btn' onClick={() => handleSingleContent(item._id)} >More</button>
                            <button type='button' className='app__message-btn delete-btn' onClick={()=> handleDelete(item._id)} >Delete</button>
                          </td>
                        </tr>
                      ))
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        }
        { singleContent &&
          <div className='app__admin-content_single' >
              hello
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Admin