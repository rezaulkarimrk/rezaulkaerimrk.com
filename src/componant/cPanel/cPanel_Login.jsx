import React, { useState, useContext } from 'react';

import {UserContext}  from '../Context/UserContext';
import './cPanel_login.css'

const CPanel_Login = () => {
    const [warning, setWarning] = useState(false);
    const user = useContext(UserContext);

    const warninghandle = () => {
        if(true){
            setWarning(true);
            setTimeout(() => setWarning(false), 5000);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = (e.target.username.value);
        const password = (e.target.password.value);
        if(username ==='' || password === '' || username.length<4 || password.length<4){
            warninghandle();
        }
        const data = {username, password};
        // fetch()
        console.log(process.env.REACT_APP_USER_URL);
        console.log(user);
        e.target.reset();

    }


    return (
    <div className='app__cpanel' >
        <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} action="#">
                <div class="user-box">
                    <input type="text" name="username" id="username" required=""/>
                    <label for="username">Username</label>
                </div>
                { warning && <div className="app__warning">
                                <h1>Wrong User or Password</h1>
                            </div>
                }
                
                <div class="user-box">
                    <input type="password" name="password" id="password" required=""/>
                    <label for="password">Password</label>
                </div>
                
                <button class="btn" type="submit" >
                    Submit
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </form>
        </div>
    </div>
  )
}

export default CPanel_Login;