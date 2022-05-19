import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Repositories.module.css';
import { Link, useNavigate } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]); 
  let colored = false;
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
      <h2>List of Repositories</h2>
      <ListGroup>       
        {repositories.map(repository => {
          colored = !colored;
          if (colored) {
            return (
              <ListGroupItem className='list-group-item-primary'>{ repository }</ListGroupItem>
              )
          } else {            
              return (
                <ListGroupItem>{ repository }</ListGroupItem>
                )
          }          
          })
        }
      </ListGroup>
      < Link to="/">Home</Link>
    </div>
  )
}
