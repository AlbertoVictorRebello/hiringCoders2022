import React from "react";
import { useState } from 'react';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        //Fetch is a native browser API
        fetch('http://localhost:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json' 
            },
            body: JSON.stringify({
                email,
                password
            })

        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success', data);
        });
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    return (
        <form  onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="email">E-mail</label>
                <input 
                 id="email" 
                 type="email" 
                 value= {email}    
                 onChange={handleEmailChange}              
                 inputMode="email" 
                 autoComplete="username"
                 />            
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password</label>
                <input 
                id="password"                 
                type="password" 
                value={password}
                autoComplete="current-password"
                onChange={handlePasswordChange}                
                />            
        </fieldset>
        <button type="submit">Sign in</button>
    </form>
    )
}