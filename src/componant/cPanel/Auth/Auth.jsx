import React, {useState, useEffect, useContext, createContext} from 'react';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

const getUser = user => {
    const data = user;
    return data;
}

const Auth = () => {
    const [user, setUser] = useState(null);

    const signIn =(data) => {
        // const signedInUser = getUser(data);
        setUser(data);
        return data;
    }

    const signOut = () => {
        setUser(null);
        return ;
    }

    return {
        user,
        signIn,
        signOut,
    }
}

export default Auth;