import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';

test('Farewell, front-end', () => {
  render(<App />);
});

describe('Monte um component Header', () => {
  it('9- Implemente os elementos do header na tela principal de receitas', () => {
    render(<Header />);
  });
});
