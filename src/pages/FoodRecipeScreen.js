import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from '../components/Card';
import Loading from '../components/Loading';
import CategoriesButtons from '../components/CategoriesButtons';

const MAX_RECIPES = 12;

function FoodRecipeScreen() {
  const history = useHistory();
  const {
    isCategoryByFoods,
    allFoodsData,
    setUserChoiceFoods,
    foods,
    isLoading,
  } = useContext(contextFoodRecipe); // chegam os dados do provider para renderizar.

  const [foodsList, setFoodsList] = useState([]); // seta qual tipo de dado vai rederizar

  // ---------Função que faz as verificações para escolher qual tipo de dado vai ser renderizado
  const verifyRender = () => {
    if (!foods) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      setFoodsList(allFoodsData);
    } else if (isCategoryByFoods && foods.length === 1) {
      setFoodsList(foods);
    } else if (foods.length === 1 && !isCategoryByFoods) {
      return history.push(`/foods/${foods[0].idMeal}`);
    } else if (foods.length > 1) {
      setFoodsList(foods);
    } else {
      setFoodsList(allFoodsData);
    }
  };

  useEffect(() => {
    verifyRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foods, allFoodsData]);

  // ---- Função para redirecionar para tela de detalhes
  const redirectOnClick = ({ target }) => {
    setUserChoiceFoods((prevState) => ({
      ...prevState,
      recipeID: target.id,
    }));
    history.push(`/foods/${target.id}`);
  };

  return (
    <div>

      <Header
        renderScreen
        nameScreen="Foods"
      />
      <CategoriesButtons />
      { isLoading ? (<Loading />)
        : (
          <section>
            {foodsList.slice(0, MAX_RECIPES).map((meal, index) => (
              <div
                type="button"
                key={ index }
              >
                <Card
                  id={ meal.idMeal }
                  name={ meal.strMeal }
                  image={ meal.strMealThumb }
                  typeCard="recipe-card"
                  index={ index }
                  funcOnClick={ redirectOnClick }
                />
              </div>
            ))}
          </section>

        )}

      <BottomMenu />

    </div>
  );
}

export default FoodRecipeScreen;
