import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishCard from './FishCard';

describe('<FishCard />', () => {
  test('it should mount', () => {
    render(<FishCard />);
    
    const fishCard = screen.getByTestId('FishCard');

    expect(fishCard).toBeInTheDocument();
  });
});