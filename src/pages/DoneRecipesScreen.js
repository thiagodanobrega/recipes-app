import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import useLocalStorage from '../hooks/useLocalStorage';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesScreen() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [value] = useLocalStorage('doneRecipes', []);

  useEffect(() => {
    setDoneRecipes(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Done Recipes</h1>

      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>

        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>

      {doneRecipes.map((recipe, index) => (
        <div key={ index }>
          <img
            src={ recipe.image }
            data-testid={ `${index}-horizontal-image` }
            alt="Imagem da receita pronta"
          />
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {recipe.type === 'food'
              ? `${recipe.nationality} ${recipe.category}` : `${recipe.alcoholicOrNot}`}
          </p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          {recipe.type === food ? (recipe.tags.map((tag) => (
            <p data-testid={ `${index}-${recipe.tags}-horizontal-tag` } key={ tag }>
              {tag}
            </p>
          ))) : ''}
          <img
            src={ shareIcon }
            data-testid={ `${index}-horizontal-share-btn` }
            alt="Ícone de compartilhar"
          />
        </div>
      ))}

    </div>
  );
}

export default DoneRecipesScreen;
