import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Repositories.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]); 
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {     
      repositoriesName = JSON.parse(repositoriesName);    
      setRepositories(repositoriesName);
      // localStorage.clear();
    } else {
      navigate("/")
    }
  },[]);

  return (
    <div class='container'>
      <h2>List of Repositories {typeof repositoriesName}</h2>
      <ul>       
        {repositories.map(repository => {
          return (
            <li>{ repository }</li>
            )
          })
        }
      </ul>
      < Link to="/">Home</Link>
    </div>
  )
}
