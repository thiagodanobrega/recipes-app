import renderIngredients from './listIngredientsAndMeasures';

const FinishButton = (setEnabledButton, getStorage, id, data) => {
  if (renderIngredients
    && getStorage.meals[id].length === renderIngredients(data).length) {
    setEnabledButton(false);
  }
};

export default FinishButton;
