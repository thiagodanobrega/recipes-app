import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CATEGORIES_FOODS_ENPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const CATEGORIES_DRINKS_ENPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
let CATEGORIES_TO_RENDER = '';
const FIVE = 5;

function CategoriesButtons() {
  // estado das categorias da pagina foods
  const [categories, setCategories] = useState([]); // array para ser renderizado de acordo com chamada API
  const { pathname } = useLocation();

  // verifica em qual pagina está e muda endPoints
  if (pathname === '/foods') {
    CATEGORIES_TO_RENDER = CATEGORIES_FOODS_ENPOINT;
  } else if (pathname === '/drinks') {
    CATEGORIES_TO_RENDER = CATEGORIES_DRINKS_ENPOINT;
  }

  // chamada da API de acordo com a pagina
  const { data } = useFetch(CATEGORIES_TO_RENDER);

  useEffect(() => {
    if (data && pathname === '/foods') {
      setCategories(data.meals.slice(0, FIVE));
    } else if (data && pathname === '/drinks') {
      setCategories(data.drinks.slice(0, FIVE));
    }
  }, [data, pathname]);

  return (
    <section>
      {
        categories.map((categoryButton) => (
          <button
            key={ categoryButton.strCategory }
            type="button"
            data-testid={ `${categoryButton.strCategory}-category-filter` }
          >
            { categoryButton.strCategory}
          </button>
        ))
      }
    </section>
  );
}

export default CategoriesButtons;
/* https://www.themealdb.com/api/json/v1/1/list.php?c=list */
