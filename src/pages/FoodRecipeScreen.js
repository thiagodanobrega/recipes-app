import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from '../components/Card';
import Loading from '../components/Loading';

const INITIAL_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function FoodRecipeScreen() {
  const history = useHistory();
  const { foods, isLoading } = useContext(contextFoodRecipe);
  const [foodsInitialList, setFoodsInitialList] = useState([]);
  const [foodsList, setFoodsList] = useState([]);
  // const [isLoadingInitial, setIsLoadingInitial] = useState(false);
  const MAX_RECIPES = 12;

  useEffect(() => {
    (async () => {
      const response = await fetch(INITIAL_ENDPOINT);
      const mealsData = await response.json();
      setFoodsInitialList(mealsData.meals);
    })();
  }, []);

  const verifyRender = () => {
    if (!foods) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      setFoodsList(foodsInitialList);
    } else if (foods.length === 1) {
      return history.push(`/foods/${foods[0].idMeal}`);
    } else if (foods.length > 1) {
      setFoodsList(foods);
    } else {
      setFoodsList(foodsInitialList);
    }
  };

  useEffect(() => {
    verifyRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foods, foodsInitialList]);
  // if (isLoadingInitial) {
  //   return <Loading />;
  // }
  return (
    <div>

      <Header
        renderScreen
        nameScreen="Foods"
      />

      { isLoading ? (<Loading />)
        : (
          <section>
            {foodsList.slice(0, MAX_RECIPES).map((meal, index) => (
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

        )}

      <BottomMenu />

    </div>
  );
}

export default FoodRecipeScreen;
