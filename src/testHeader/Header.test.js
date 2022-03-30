import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import FoodRecipeScreen from '../pages/FoodRecipeScreen';

const { render, screen } = require('@testing-library/react');

const searchButtonTestID = 'search-top-btn';
const profileButtonTestID = 'profile-top-btn';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};

describe('Monte um component Header', () => {
  test('9- Implemente os elementos do header na tela principal de receitas', () => {
    renderWithRouter(<FoodRecipeScreen />);

    const profileIcon = screen.getByTestId(profileButtonTestID);
    const titlePage = screen.getByTestId('page-title');
    const searchTopButton = screen.getByTestId(searchButtonTestID);

    expect(profileIcon).toBeInTheDocument();
    expect(titlePage).toBeInTheDocument();
    expect(searchTopButton).toBeInTheDocument();
  });

  test('10-Implemente um ícone para a tela de perfil', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const profileIcon = screen.getByTestId(profileButtonTestID);

    expect(profileIcon).toBeInTheDocument();
  });

  test('10.2-Implemente um título', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const titleHeader = screen.getByRole('heading', { name: /foods/i });

    expect(titleHeader).toBeInTheDocument();
  });

  test('10.3-Implemente um botão de pesquisa', () => {
    renderWithRouter(<FoodRecipeScreen />);
    const searchIcon = screen.getByTestId(searchButtonTestID);

    expect(searchIcon).toBeInTheDocument();
  });

  test.only(`11-Redirecione a pessoa usuária para a tela de perfil
  ao clicar no botão de perfil`, async () => {
    const { history } = renderWithRouter(<FoodRecipeScreen />);
    const profileIcon = screen.getByTestId(profileButtonTestID);
    expect(profileIcon).toBeInTheDocument();
    // history.location.pathname
    userEvent.click(profileIcon);
    expect(history.location.pathname).toEqual('/profile');
  });

  test(`12 - Desenvolva o botão de busca que, ao ser clicado,
  a barra de busca deve aparecer. O mesmo serve para escondê-la`, () => {
    renderWithRouter(<FoodRecipeScreen />);
    const searchTopButton = screen.getByTestId(searchButtonTestID);
    expect(searchTopButton).toBeInTheDocument();

    userEvent.click(searchTopButton);
    const searchPlace = screen.getByTestId('search-input');
    expect(searchPlace).toBeInTheDocument();
    userEvent.click(searchTopButton);
    expect(searchPlace).not.toBeInTheDocument();
  });

  test(`13 - Implemente os elementos da barra de busca respeitando
  os atributos descritos no protótipo`, () => {
    renderWithRouter(<FoodRecipeScreen />);
    const radioButtonIngredient = screen.getByTestId('ingredient-search-radio');
    expect(radioButtonIngredient).toBeInTheDocument();

    const radioButtonName = screen.getByTestId('name-search-radio');
    expect(radioButtonName).toBeInTheDocument('first-letter-search-radio');

    const searchButton = screen.getByTestId('exec-search-btn');
    expect(searchButton).toBeInTheDocument();
  });

/*   test(`14 - Posicione a barra logo abaixo do header e
  implemente 3 radio buttons: Ingredient, Name e First letter`, () => {
    renderWithRouter(<FoodRecipeScreen />);
    const radioButtonIngredient = screen.getByTestId('ingredient-search-radio');
    expect(radioButtonIngredient).toBeInTheDocument();

    const radioButtonName = screen.getByTestId('name-search-radio');
    expect(radioButtonName).toBeInTheDocument('first-letter-search-radio');

    const searcButton = screen.getByTestId('exec-search-btn');
    expect(searcButton).toBeInTheDocument();
  }); */
});
