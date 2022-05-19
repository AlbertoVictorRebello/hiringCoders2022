// import logo from '../logo.svg';
import '../../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Repositories from '../../Repositories/Repositories';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  function handleSearch() {
    axios.get(`https://api.github.com/users/${ user }/repos`).then(response => {
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repository) =>
    {
      repositoriesName.push(repository.name)
    });
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    navigate('/repositories');

  });
  }
  return (
    <>      
    <input className='userInput' placeholder='user' value={ user } onChange={e => setUser(e.target.value)}/>
    <Button onClick={ handleSearch }>Search</Button>    
    </> 
  );
}

export default Home;
