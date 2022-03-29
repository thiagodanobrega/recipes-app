import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import FoodRecipeScreen from '../pages/FoodRecipeScreen';

const { render, screen } = require('@testing-library/react');

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

describe('Monte um component Header', () => {
  test('9- Implemente os elementos do header na tela principal de receitas', () => {
    renderWithRouter(<FoodRecipeScreen />);

    const profileIcon = screen.getByTestId('profile-top-btn');
    const titlePage = screen.getByTestId('page-title');
    const searchTopButton = screen.getByTestId('search-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(titlePage).toBeInTheDocument();
    expect(searchTopButton).toBeInTheDocument();
  });

  test('10-Implemente um ícone para a tela de perfil', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const profile = screen.getByRole('img', { name: /desenho de uma silhueta humana/i });

    expect(profile).toBeInTheDocument();
  });

  test('10.2-Implemente um título', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const titleHeader = screen.getByRole('heading', { name: /foods/i });

    expect(titleHeader).toBeInTheDocument();
  });

  test('10.3-Implemente um título', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const searchIcon = screen.getByRole('img', { name: /desenho de uma lupa/i });

    expect(searchIcon).toBeInTheDocument();
  });

  test(`11-Redirecione a pessoa usuária para a tela de perfil
  ao clicar no botão de perfil`, () => {
    renderWithRouter(<FoodRecipeScreen />);
    const profile = screen.getByRole('img', { name: /desenho de uma silhueta humana/i });

    expect(profile).toBeInTheDocument();
    const profileLink = screen.getByRole('link', { name: /profile/i });
    expect(profileLink).toBeInTheDocument();
  });

  test(`12 - Desenvolva o botão de busca que, ao ser clicado,
  a barra de busca deve aparecer. O mesmo serve para escondê-la`, () => {
    renderWithRouter(<FoodRecipeScreen />);
    const searchTopButton = screen.getByTestId('search-top-btn');
    expect(searchTopButton).toBeInTheDocument();

    userEvent.click(searchTopButton);
    const searchPlace = screen.getByTestId('search-input');
    expect(searchPlace).toBeInTheDocument();
  });
});
