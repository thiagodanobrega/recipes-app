const setLocalStorage = (event, id) => {
  const ingredients = event.target.parentElement.innerText;

  if (localStorage.getItem('inProgressRecipes')) {
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes')).meals[id];

    if (getStorage.some((element) => ingredients === element)) {
      const newLocalStorage = getStorage
        .filter((element) => element !== ingredients);

      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: { [id]: newLocalStorage } }));
    } else {
      const keyMeals = JSON.parse(localStorage.getItem('inProgressRecipes')).meals;
      keyMeals[id] = [...getStorage, ingredients];
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: keyMeals }));

      console.log(keyMeals);
      // localStorage.setItem('inProgressRecipes', JSON
      //   .stringify({ meals: { ...keyMeals, [id]: [...getStorage, ingredients] } }));
    }
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { meals: { [id]: [ingredients] } },
    ));
  }
};

export default setLocalStorage;
