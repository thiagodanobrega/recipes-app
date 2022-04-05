import React, { useState } from 'react';
import Header from '../components/Header/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import CardDoneAndFavorites from '../components/CardDoneAndFavorites';
import FilterButtonsDoneAndFavorites from '../components/FilterButtonsDoneAndFavorites';

function DoneRecipesScreen() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [value] = useLocalStorage('doneRecipes', []);

  const filterDoneRecipes = () => {
    if (typeFilter === 'food') {
      return value.filter((recipe) => recipe.type === 'food');
    }
    if (typeFilter === 'drink') {
      return value.filter((recipe) => recipe.type === 'drink');
    }
    return value;
  };

  return (
    <>
      <Header
        renderScreen={ false }
        nameScreen="Done Recipes"
      />
      <FilterButtonsDoneAndFavorites
        setTypeFilter={ setTypeFilter }
      />
      <CardDoneAndFavorites
        filterRecipes={ filterDoneRecipes() }
        typeScreen="done"
      />
    </>
  );
}

export default DoneRecipesScreen;
