import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishesList from './FishesList';

describe('<FishesList />', () => {
  test('it should mount', () => {
    render(<FishesList />);
    
    const fishesList = screen.getByTestId('FishesList');

    expect(fishesList).toBeInTheDocument();
  });
});