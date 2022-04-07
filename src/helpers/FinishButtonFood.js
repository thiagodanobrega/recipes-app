import renderIngredients from './listIngredientsDrinks';

const FinishButtonFood = (setEnabledButton, getStorage, id, data) => {
  if (renderIngredients
    && getStorage.meals[id].length === renderIngredients(data).length) {
    setEnabledButton(false);
  }
};

export default FinishButtonFood;
