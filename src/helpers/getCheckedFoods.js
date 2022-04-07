const getChecked = (ingredients, id) => {
  const inProgressKey = localStorage.getItem('inProgressRecipes');
  if (inProgressKey) {
    return JSON.parse(inProgressKey).meals[id].includes(ingredients);
  }
};

export default getChecked;
