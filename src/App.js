import React, {useContext, createContext, useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Header, Layouts, SingleAbout, Error, ServicesList,Footer, CPanel_Login } from './componant'
import { UserContext } from './componant/Context/UserContext';


const App = () => {
  const [user, setUser] = useState([]);
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter >
        <Header /> 
        <Routes >
          <Route path='/' element={<Layouts />} />
          <Route path='/about' element={<SingleAbout/>} />
          <Route path='/services/:id' element={<ServicesList/>} />
          <Route path='/cPanel' element={<CPanel_Login/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
    
  )
}

export default App