import React from 'react';
import Header from '../components/Header/Header';
import BottomMenu from '../components/BottomMenu';

function FoodRecipeScreen() {
  // const MAX_INGREDIENTS = 12;
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Foods"
      />

      {/* <section>
        {array.slice(0, MAX_INGREDIENTS).map((obj, index) => (
          <button
            type="button"
            key={ index }
          >
            <Card
              name={ obj.strMeal }
              image={ obj.strMealThumb }
              typeCard="recipe-card"
              index={ index }
            />
          </button>
        ))}
      </section> */}
      <BottomMenu />
    </div>
  );
}

export default FoodRecipeScreen;
