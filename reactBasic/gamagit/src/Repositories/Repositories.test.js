import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Repositories from './Repositories';

describe('<Repositories />', () => {
  test('it should mount', () => {
    render(<Repositories />);
    
    const repositories = screen.getByTestId('Repositories');

    expect(repositories).toBeInTheDocument();
  });
});