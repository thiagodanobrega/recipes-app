import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from '../components/Card';
// import Loading from '../components/loading';

const INITIAL_RENDER = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function FoodRecipeScreen() {
  const { foods } = useContext(contextFoodRecipe);
  const history = useHistory();
  const [foodsInitalRender, setFoodsScreen] = useState([]);
  console.log(foods);
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
    if (foods.length === 1) {
      history.push(`/foods/${foods[0].idMeal}`);
    }
    if (foods.length > 1) return foods;
    if (foods.length === 0) return foodsInitalRender;
    if (foods === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return foodsInitalRender;
    }
  };

  return (
    <div>
      <Header
        renderScreen
        nameScreen="Foods"
      />

      <section>
        {verifyRender().slice(0, MAX_INGREDIENTS).map((meal, index) => (
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
