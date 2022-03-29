 import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Farewell, front-end', () => {
  render(<App />)
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/TRYBE/i);
  // expect(linkElement).toBeInTheDocument();
});

