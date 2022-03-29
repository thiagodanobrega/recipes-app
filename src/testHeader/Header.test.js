import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/header';

test('Farewell, front-end', () => {
  render(<App />);
});

describe('Monte um component Header', () => {
  test('9- Implemente os elementos do header na tela principal de receitas', () => {
    render(<Header />);
    const profileIcon = screen.getByTestId('profile-top-btn');
    const titlePage = screen.getByTestId('page-title');
    const searchTopButton = screen.getByTestId('search-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(titlePage).toBeInTheDocument();
    expect(searchTopButton).toBeInTheDocument();
  });

  test('10-Implemente um ícone para a tela de perfil', () => {
    render(<Header />);
    const profile = screen.getByRole('img', { name: /desenho de uma silhueta humana/i });

    expect(profile).toBeInTheDocument();
  });

  test('10.2-Implemente um título', () => {
    render(<Header />);
    const titleHeader = screen.getByRole('heading', { name: /foods/i });

    expect(titleHeader).toBeInTheDocument();
  });

  test('10.3-Implemente um título', () => {
    render(<Header />);
    const searchIcon = screen.getByRole('img', { name: /desenho de uma lupa/i });

    expect(searchIcon).toBeInTheDocument();
  });
});
