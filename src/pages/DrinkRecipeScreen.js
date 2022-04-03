import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header/Header';
import contextDrinks from '../context/contextDrinks/contextDrinks';
import Card from '../components/Card';
import Loading from '../components/Loading';

const INITIAL_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function DrinksRecipeScreen() {
  const history = useHistory();
  const { drinks, isLoading } = useContext(contextDrinks);
  const [drinksInitialList, setDrinksInitialList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const MAX_RECIPES = 12;

  useEffect(() => {
    (async () => {
      const response = await fetch(INITIAL_ENDPOINT);
      const drinksData = await response.json();
      setDrinksInitialList(drinksData.drinks);
    })();
  }, []);

  const verifyRender = () => {
    if (!drinks) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      setDrinksList(drinksInitialList);
    } else if (drinks.length === 1) {
      return history.push(`/drinks/${drinks[0].idDrink}`);
    } else if (drinks.length > 1) {
      setDrinksList(drinks);
    } else {
      setDrinksList(drinksInitialList);
    }
  };

  useEffect(() => {
    verifyRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinks, drinksInitialList]);

  return (
    <>

      <Header
        renderScreen
        nameScreen="Drinks"
      />

      { isLoading ? (<Loading />)
        : (
          <section>
            {drinksList.slice(0, MAX_RECIPES).map((drink, index) => (
              <button
                type="button"
                key={ index }
              >
                <Card
                  name={ drink.strDrink }
                  image={ drink.strDrinkThumb }
                  typeCard="recipe-card"
                  index={ index }
                />
              </button>
            ))}
          </section>
        )}
      <BottomMenu />

    </>
  );
}

export default DrinksRecipeScreen;
