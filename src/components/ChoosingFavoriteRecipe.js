import React, { useEffect, useState } from 'react';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ChoosingFavoriteRecipe(localMeal) {
  const [isFavourites, setIsFavourites] = useState(false);

  const { localMeal: {
    idMeal,
    strArea,
    strCategory,
    strMealThumb,
    strMeal,
  } } = localMeal;

  const chosenFavoriteRecipe = () => {
    setIsFavourites(!isFavourites);
  };

  const initialValue = [{
    id: idMeal,
    type: 'food',
    nationality: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
  }];

  const saveFavoriteRecipe = () => {
    if (isFavourites) {
      localStorage.setItem('favoriteRecipes', JSON
        .stringify(initialValue));
    }
    if (isFavourites === false) {
      const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      console.log(favoriteStorage);
      /*  favoriteStorage
        ? favoriteStorage = favoriteStorage.filter((favorite) => favorite.id !== idMeal)
        : console.log('oi'); */
    }
  };
  useEffect(() => {
    saveFavoriteRecipe();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavourites]);
  return (
    <div>
      { isFavourites
        ? (
          <input
            type="image"
            data-testid="favorite-btn"
            alt="Favorite"
            src={ blackHeartIcon }
            height={ 50 }
            width={ 50 }
            onClick={ chosenFavoriteRecipe }
          />)
        : (
          <input
            type="image"
            data-testid="favorite-btn"
            alt="Favorite"
            src={ whiteHeartIcon }
            height={ 50 }
            width={ 50 }
            onClick={ chosenFavoriteRecipe }
          />)}
    </div>
  );
}

export default ChoosingFavoriteRecipe;
