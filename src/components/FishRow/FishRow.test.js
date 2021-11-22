import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishRow from './FishRow';

describe('<FishRow />', () => {
  test('it should mount', () => {
    render(<FishRow />);
    
    const fishRow = screen.getByTestId('FishRow');

    expect(fishRow).toBeInTheDocument();
  });
});