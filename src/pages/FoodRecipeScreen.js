import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';

function FoodRecipeScreen() {
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Foods"
      />
      <Card
        name={ obj.strMeal }
        image={ obj.strMealThumb }
        typeCard="recipe-card"
        index={ index }
      />
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
