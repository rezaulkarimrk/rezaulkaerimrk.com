import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import Auth, { useAuth } from '../cPanel/Auth/Auth';
import Admin from '../Admin/Admin';

const Protected = ({user, children}) => {
    const auth = Auth()
    // const { auth } = useAuth(); 
    if (user){
        return children
    }
    if(true){
        console.log(auth);
        return <Admin />;
    }
  return <Navigate to='/cPanel' replace />;
}

export default Protected