import React, { useState, useContext } from 'react';

import {UserContext}  from '../Context/UserContext';
import './cPanel_login.css'

const CPanel_Login = () => {
    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');
    const {user, setUser} = useContext(UserContext);

    const warninghandle = (status, message) => {
        if(status){
            setWarningMessage(message);
            setWarning(status);
            setTimeout(() => setWarning(false), 5000);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = (e.target.username.value);
        const password = (e.target.password.value);
        if(username ==='' || password === '' || username.length<4 || password.length<4){
            warninghandle(true, 'Please enter user and password');
            return;
        }
        const data = {username, password};
        await fetch(`${process.env.REACT_APP_DB_URL}admin/login`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                setUser(data);
                // user.username = data.username;
            }
            if(!data.success){
                warninghandle(!data.success, data.message)
            }

        })
        .catch(error => {
            warninghandle(true, 'Error something');
            setUser('hello')
            console.log(error)
        });

        console.log(user);
        // e.target.reset();

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
                                <h1>{warningMessage}</h1>
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