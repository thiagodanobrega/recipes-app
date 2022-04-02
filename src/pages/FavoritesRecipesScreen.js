import React, { useState } from 'react';
import Header from '../components/Header/Header';
import useLocalStorage from '../hooks/useLocalStorage';
import CardDoneAndFavorites from '../components/CardDoneAndFavorites';
import FilterButtonsDoneAndFavorites from '../components/FilterButtonsDoneAndFavorites';

function DoneRecipesScreen() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [value, setValue] = useLocalStorage('favoriteRecipes', []);
  const [favoriteRecipes, setFavoriteRecipes] = useState(value);

  const filterFavoriteRecipes = () => {
    if (typeFilter === 'food') {
      return favoriteRecipes.filter((recipe) => recipe.type === 'food');
    }
    if (typeFilter === 'drink') {
      return favoriteRecipes.filter((recipe) => recipe.type === 'drink');
    }
    return favoriteRecipes;
  };

  const disfavorRecipe = (id) => {
    const newFavoriteList = favoriteRecipes.filter((recipe) => recipe.id !== id);
    setFavoriteRecipes(newFavoriteList);
    setValue(newFavoriteList);
  };

  return (
    <>
      <div>
        <Header
          renderScreen={ false }
          nameScreen="Favorite Recipes"
        />
      </div>

      <FilterButtonsDoneAndFavorites
        setTypeFilter={ setTypeFilter }
      />
      <CardDoneAndFavorites
        filterRecipes={ filterFavoriteRecipes() }
        disfavorRecipe={ disfavorRecipe }
        typeScreen="favorite"
      />
    </>
  );
}

export default DoneRecipesScreen;
