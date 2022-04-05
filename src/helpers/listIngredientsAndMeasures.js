const renderIngredients = (data) => {
  const arrIngredientMeasure = [];
  const arrAllKeysWithValue = data.meals
    .map((element) => Object.keys(element)
      .filter((key) => element[key] !== '' && element[key] !== null));
  const ingredient = arrAllKeysWithValue[0]
    .filter((element) => element.includes('strIngredient'));
  const measure = arrAllKeysWithValue[0]
    .filter((key) => key
      .includes('strMeasure'));
  const ingredientsValues = ingredient
    .map((key) => data.meals[0][key]);
  const measureValues = measure
    .map((key) => data.meals[0][key]);
  ingredientsValues
    .map((ingredientValue, index) => (arrIngredientMeasure
      .push(`${ingredientValue} - ${measureValues[index]}`)
    ));
  return (arrIngredientMeasure);
};

export default renderIngredients;
