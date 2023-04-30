import React, {useContext, createContext, useState} from 'react'
import {BrowserRouter, Route, Routes, Router} from 'react-router-dom';

import {Header, Layouts, SingleAbout, Error, ServicesList, Footer, CPanel_Login, Admin, Protected } from './componant'
import { UserContext } from './componant/Context/UserContext';
import Auth, { AuthContextProvider, } from './componant/cPanel/Auth/Auth';


const App = () => {
  const auth = Auth();
  return (
    <AuthContextProvider>
      <BrowserRouter >
        <Header /> 
        <Routes >
          <Route path='/' element={<Layouts />} />
          <Route path='/about' element={<SingleAbout/>} />
          <Route path='/services/:id' element={<ServicesList/>} />
          <Route path='/cPanel' element={<CPanel_Login/>} />
          <Route path='/admin' element={<Protected user={auth.user} > <Admin/> </Protected> } />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </AuthContextProvider>
    
  )
}

export default App