import React from 'react';

import userEvent from '@testing-library/user-event';
import FoodRecipeScreen from '../pages/FoodRecipeScreen';
import renderWithRouter from '../helpers/renderWithRouter';
import ProviderFoods from '../context/contextFoodRecipe/ProviderFoods';
import ProviderDrinks from '../context/contextDrinks/ProviderDrinks';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';

const { screen } = require('@testing-library/react');

const searchButtonTestID = 'search-top-btn';
const profileButtonTestID = 'profile-top-btn';
afterEach(() => jest.clearAllMocks());

describe('Monte um component Header', () => {
  test('9- Implemente os elementos do header na tela principal de receitas', () => {
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
    const profileIcon = screen.getByTestId(profileButtonTestID);
    const titlePage = screen.getByTestId('page-title');
    const searchTopButton = screen.getByTestId(searchButtonTestID);

    expect(profileIcon).toBeInTheDocument();
    expect(titlePage).toBeInTheDocument();
    expect(searchTopButton).toBeInTheDocument();
  });

  test('10-Implemente um ícone para a tela de perfil', () => {
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
    const profileIcon = screen.getByTestId(profileButtonTestID);

    expect(profileIcon).toBeInTheDocument();
  });

  test('10.2-Implemente um título', () => {
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
    const titleHeader = screen.getByRole('heading', { name: /foods/i });

    expect(titleHeader).toBeInTheDocument();
  });

  test('10.3-Implemente um botão de pesquisa', () => {
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
    const searchIcon = screen.getByTestId(searchButtonTestID);

    expect(searchIcon).toBeInTheDocument();
  });

  test(`11-Redirecione a pessoa usuária para a tela de perfil
  ao clicar no botão de perfil`, async () => {
    const { history } = renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
    const profileIcon = screen.getByTestId(profileButtonTestID);
    expect(profileIcon).toBeInTheDocument();
    // history.location.pathname
    userEvent.click(profileIcon);
    expect(history.location.pathname).toEqual('/profile');
  });

  test(`12 - Desenvolva o botão de busca que, ao ser clicado,
  a barra de busca deve aparecer. O mesmo serve para escondê-la`, () => {
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );
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
    renderWithRouter(
      <ProviderFoods>
        <ProviderDrinks>
          <FoodRecipeScreen />
        </ProviderDrinks>
      </ProviderFoods>,
    );

    const searchButton = screen.getByTestId(searchButtonTestID);
    expect(searchButton).toBeInTheDocument();
    userEvent.click(searchButton);

    const radioButtonIngredient = screen.getByText(/ingredient/i);
    const radioButtonName = screen.getByText(/name/i);
    const radioButtonFirstLetter = screen.getByText(/first letter/i);
    const execSearchButton = screen.getByTestId('exec-search-btn');
    /* const searchButton = screen.getByTestId('exec-search-btn'); */

    expect(radioButtonFirstLetter).toBeInTheDocument();
    expect(radioButtonIngredient).toBeInTheDocument();
    expect(radioButtonName).toBeInTheDocument();
    expect(execSearchButton).toBeInTheDocument();
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
