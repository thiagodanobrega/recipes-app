import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function CardDoneAndFavorites({ filterRecipes, disfavorRecipe, typeScreen }) {
  const [idCopied, setIdCopied] = useState('');
  const history = useHistory();
  const copyUrlToClipboard = (id, type) => {
    setIdCopied(id);
    // ref: https://www.w3schools.com/js/js_window_location.asp
    const url = window.location.href.replace(typeScreen === 'favorite'
      ? 'favorite-recipes'
      : 'done-recipes', '');
    if (type === 'food') {
      // ref: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
      return navigator.clipboard.writeText(`${url}foods/${id}`);
    }
    return navigator.clipboard.writeText(`${url}drinks/${id}`);
  };

  return (
    <div>
      {filterRecipes.map((recipe, index) => (
        <div key={ index }>
          <button
            type="button"
            onClick={ () => (recipe.type === 'food'
              ? history.push(`/foods/${recipe.id}`)
              : history.push(`/drinks/${recipe.id}`)) }
          >
            <img
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt="Imagem da receita pronta"
            />
          </button>

          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {recipe.type === 'food'
              ? `${recipe.nationality} - ${recipe.category}` : `${recipe.alcoholicOrNot}`}
          </p>

          <Link
            to={ recipe.type === 'food' ? `/foods/${recipe.id}` : `/drinks/${recipe.id}` }
          >
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>

          {typeScreen === 'done'
            && <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>}

          {typeScreen === 'done' && (recipe.tags.map((tag) => (
            <p data-testid={ `${index}-${tag}-horizontal-tag` } key={ tag }>
              {tag}
            </p>
          ))) }

          <input
            type="image"
            src={ shareIcon }
            alt="Ícone de compartilhar"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyUrlToClipboard(recipe.id, recipe.type) }
          />

          {idCopied === recipe.id && <p>Link copied!</p>}

          {typeScreen === 'favorite'
            && <input
              type="image"
              src={ blackHeartIcon }
              alt="Ícone de coração para favoritar"
              data-testid={ `${index}-horizontal-favorite-btn` }
              onClick={ () => disfavorRecipe(recipe.id) }
            />}
        </div>
      ))}
    </div>
  );
}

CardDoneAndFavorites.propTypes = {
  filterRecipes: PropTypes.func.isRequired,
  disfavorRecipe: PropTypes.func.isRequired,
  typeScreen: PropTypes.string.isRequired,
};

export default CardDoneAndFavorites;
