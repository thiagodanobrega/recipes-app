import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import useLocalStorage from '../hooks/useLocalStorage';

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
    </div>
  );
}

export default DoneRecipesScreen;
