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
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ meals: { [id]: [...getStorage, ingredients] } }));
    }
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { meals: { [id]: [ingredients] } },
    ));
  }
};

export default setLocalStorage;
