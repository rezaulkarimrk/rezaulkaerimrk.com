import React, { useState, useEffect } from 'react';

import './Admin.css';

const Admin = () => {
  const [allContent, setAllContent] = useState(true);
  const [singleContent, setSingleContent] = useState(false);
  const [singleContentData, setSingleContentData] = useState(null);
  const [allData, setAlldata] = useState([]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_DB_URL}message`)
    .then(res => res.json())
    .then( async (data) => {
      if(data.success){
        setAlldata((data.data).reverse());
      }
    })
    .catch(error => console.log(error) );
  }, [singleContent, allContent]);

  const handleAllContent = () => {
    setSingleContent(false);
    setAllContent(true);
  }

  const handleSingleContent = (id) => {
    setSingleContent(true);
    setAllContent(false);

    setSingleContentData(allData.filter(item => item._id ===id));
    console.log(singleContentData, id);
  }

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_DB_URL}message/${id}`,{
      method: 'Delete'
    })
    .then(res => res.json())
    .then( async (data) => {
    })
    .catch(error => console.log(error) );
    setAlldata(allData.filter((item) => id!==item._id));
    handleAllContent()
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
        <div>
          <button type='button' className='app__message-btn delete-btn' onClick={()=> handleDelete(singleContentData[0]._id)} >Delete</button>
          <div className='app__admin-content_single' >
              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Name: </h4>
                </div>
                <h5>{singleContentData[0].name}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Email: </h4>
                </div>
                <h5>{singleContentData[0].email}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Phone: </h4>
                </div>
                <h5>{singleContentData[0].phone}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Subject: </h4>
                </div>
                <h5>{singleContentData[0].subject}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Message: </h4>
                </div>
                <h5>{singleContentData[0].message}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Railway: </h4>
                </div>
                <h5>{singleContentData[0].railway}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Road: </h4>
                </div>
                <h5>{singleContentData[0].road}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Town: </h4>
                </div>
                <h5>{singleContentData[0].town}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> County: </h4>
                </div>
                <h5>{singleContentData[0].county}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> State_District: </h4>
                </div>
                <h5>{singleContentData[0].state_district}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> ISO3166_2_lvl4: </h4>
                </div>
                <h5>{singleContentData[0].ISO3166_2_lvl4}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> ZIP Code: </h4>
                </div>
                <h5>{singleContentData[0].postcode}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Country Code: </h4>
                </div>
                
                <h5>{singleContentData[0].country_code}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Country: </h4>
                </div>
                <h5>{singleContentData[0].country}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> IP: </h4>
                </div>
                <h5>{singleContentData[0].ip}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Mail Date: </h4>
                </div>
                <h5>{singleContentData[0].date}</h5>
              </div>

              <div className='app__admin-content_single-per' >
                <div>
                  <h4> Total Mail: </h4>
                </div>
                <h5>0{singleContentData[0].mailCount}</h5>
              </div>

          </div>

        </div>
        }
      </div>
    </div>
  )
}

export default Admin