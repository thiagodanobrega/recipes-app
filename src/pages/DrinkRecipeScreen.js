import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import CategoriesButtons from '../components/CategoriesButtons';
import Header from '../components/Header/Header';
import contextDrinks from '../context/contextDrinks/contextDrinks';
import Card from '../components/Card';
import Loading from '../components/Loading';

const MAX_RECIPES = 12;

function DrinksRecipeScreen() {
  const history = useHistory();
  const { allDrinksData, drinks, isLoading } = useContext(contextDrinks);// chegam os dados do provider para renderizar.

  const [drinksList, setDrinksList] = useState([]);// seta qual tipo de dado vai rederizar

  // ---------Função que faz as verificações para escolher qual tipo de dado vai ser renderizado
  const verifyRender = () => {
    if (!drinks) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      setDrinksList(allDrinksData);
    } else if (drinks.length === 1) {
      return history.push(`/drinks/${drinks[0].idDrink}`);
    } else if (drinks.length > 1) {
      setDrinksList(drinks);
    } else {
      setDrinksList(allDrinksData);
    }
  };

  useEffect(() => {
    verifyRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinks, allDrinksData]);

  return (
    <>

      <Header
        renderScreen
        nameScreen="Drinks"
      />
      <CategoriesButtons />
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
