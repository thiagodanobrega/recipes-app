const setLocalStorage = (event, id) => {
  const ingredients = event.target.parentElement.innerText;

  if (localStorage.getItem('inProgressRecipes')) {
    const getStorage = JSON.parse(localStorage.getItem('inProgressRecipes'))
      .cocktails[id];

    if (getStorage.some((element) => ingredients === element)) {
      const newLocalStorage = getStorage
        .filter((element) => element !== ingredients);

      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ cocktails: { [id]: newLocalStorage } }));
    } else {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ cocktails: { [id]: [...getStorage, ingredients] } }));
    }
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { cocktails: { [id]: [ingredients] } },
    ));
  }
};

export default setLocalStorage;
