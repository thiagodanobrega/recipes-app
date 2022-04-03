import React, { useContext, useEffect, useState } from 'react';
import { /* useHistory, */ /* Redirect, */ Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from '../components/Card';
// import Loading from '../components/loading';

const INITIAL_RENDER = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function FoodRecipeScreen() {
  // const { history } = useHistory();
  const { foods } = useContext(contextFoodRecipe);
  const [foodsInitalRender, setFoodsScreen] = useState([]);
  const [renderTest, setRenderTest] = useState([]);
  const MAX_INGREDIENTS = 12;

  useEffect(() => {
    (async () => {
      const response = await fetch(INITIAL_RENDER);
      const mealsData = await response.json();
      setFoodsScreen(mealsData.meals);
    })();
  }, []);
  // idMeal

  const verifyRender = () => {
    if (!foods) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      setRenderTest(foodsInitalRender);
    } else if (foods.length === 1) {
      return <Link to={ `/foods/${foods[0].idMeal}` } />;
    } else if (foods.length > 1) {
      setRenderTest(foods);
    } else {
      setRenderTest(foodsInitalRender);
    }
  };

  useEffect(() => {
    verifyRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foods, foodsInitalRender]);

  return (

    <div>

      <Header
        renderScreen
        nameScreen="Foods"
      />

      <section>
        {renderTest.slice(0, MAX_INGREDIENTS).map((meal, index) => (
          <button
            type="button"
            key={ index }
          >
            <Card
              name={ meal.strMeal }
              image={ meal.strMealThumb }
              typeCard="recipe-card"
              index={ index }
            />
          </button>
        ))}
      </section>
      <BottomMenu />

    </div>
  );
}

export default FoodRecipeScreen;
