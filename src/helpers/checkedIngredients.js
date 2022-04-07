const getChecked = (ingredients, id) => {
  const inProgressKey = localStorage.getItem('inProgressRecipes');
  if (inProgressKey) {
    console.log('AQUI');
    return JSON.parse(inProgressKey).meals[id].includes(ingredients);
  }
};

export default getChecked;
