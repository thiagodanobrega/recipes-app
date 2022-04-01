import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function CardDoneAndFavorites({ filterDoneRecipes }) {
  const [idCopied, setIdCopied] = useState('');
  const history = useHistory();
  const copyUrlToClipboard = (id, type) => {
    setIdCopied(id);
    // ref: https://www.w3schools.com/js/js_window_location.asp
    const url = window.location.href.replace('done-recipes', '');
    if (type === 'food') {
      // ref: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
      return navigator.clipboard.writeText(`${url}foods/${id}`);
    }
    return navigator.clipboard.writeText(`${url}/drinks/${id}`);
  };

  return (
    <div>
      {filterDoneRecipes.map((recipe, index) => (
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
              width="100px"
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

          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>

          {recipe.type === 'food' ? (recipe.tags.map((tag) => (
            <p data-testid={ `${index}-${tag}-horizontal-tag` } key={ tag }>
              {tag}
            </p>
          ))) : ''}

          <input
            type="image"
            src={ shareIcon }
            alt="Ícone de compartilhar"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyUrlToClipboard(recipe.id, recipe.type) }
          />

          {idCopied === recipe.id && <p>Link copied!</p>}
        </div>
      ))}
    </div>
  );
}

CardDoneAndFavorites.propTypes = {
  filterDoneRecipes: PropTypes.func.isRequired,
};

export default CardDoneAndFavorites;
