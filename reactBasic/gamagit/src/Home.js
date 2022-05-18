import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Repositories from './Repositories/Repositories';

function Home(props) {
  const [user, setUser] = useState('');
  function handleSearch() {
    axios.get(`https://api.github.com/users/${ user }/repos`).then(response => console.log(response.data));
  }
  return (
    <>
      {/* <h1>{ props.title + " " + user}</h1>   */}
    <input className='userInput' placeholder='user' value={ user } onChange={e => setUser(e.target.value)}/>
    <button type='button' onClick={ handleSearch }>Search</button>
    {/* <Repositories/> */}
    </> 
  );
}

export default Home;
