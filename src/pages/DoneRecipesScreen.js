import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import useLocalStorage from '../hooks/useLocalStorage';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesScreen() {
  const [isCopied, setIsCopied] = useState(false);
  const [typeFilter, setTypeFilter] = useState('all');
  const [value] = useLocalStorage('doneRecipes', []);

  const copyUrlToClipboard = (id, type) => {
    setIsCopied(true);
    // ref: https://www.w3schools.com/js/js_window_location.asp
    const url = window.location.href.replace('done-recipes', '');
    if (type === 'food') {
      // ref: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
      return navigator.clipboard.writeText(`${url}foods/${id}`);
    }
    return navigator.clipboard.writeText(`${url}/drinks/${id}`);
  };

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
    <div>
      <Header />
      <h1 data-testid="page-title">Done Recipes</h1>

      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setTypeFilter('all') }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setTypeFilter('food') }
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setTypeFilter('drink') }
        >
          Drinks
        </button>
      </section>

      {filterDoneRecipes().map((recipe, index) => (
        <div key={ index }>
          <Link
            to={ recipe.type === 'food' ? `/foods/${recipe.id}` : `/drinks/${recipe.id}` }
          >
            <img
              src={ recipe.image }
              data-testid={ `${index}-horizontal-image` }
              alt="Imagem da receita pronta"
            />
          </Link>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {recipe.type === 'food'
              ? `${recipe.nationality} ${recipe.category}` : `${recipe.alcoholicOrNot}`}
          </p>
          <Link
            to={ recipe.type === 'food' ? `/foods/${recipe.id}` : `/drinks/${recipe.id}` }
          >
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          {recipe.type === 'food' ? (recipe.tags.map((tag) => (
            <p data-testid={ `${index}-${recipe.tags}-horizontal-tag` } key={ tag }>
              {tag}
            </p>
          ))) : ''}
          <input
            type="image"
            src={ shareIcon }
            alt="share icon"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyUrlToClipboard(recipe.id, recipe.type) }
          />
          {isCopied && <p>Link copied!</p>}
        </div>
      ))}

    </div>
  );
}

export default DoneRecipesScreen;
