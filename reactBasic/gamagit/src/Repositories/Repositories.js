import React from 'react';
import PropTypes from 'prop-types';
import styles from './Repositories.module.css';

const Repositories = () => (
  <div className={styles.Repositories} data-testid="Repositories">
    Repositories Component
  </div>
);

Repositories.propTypes = {};

Repositories.defaultProps = {};

export default Repositories;
