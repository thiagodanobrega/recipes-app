const getChecked = (ingredients, id) => {
  const inProgressKey = localStorage.getItem('inProgressRecipes');
  if (inProgressKey && JSON.parse(inProgressKey).meals[id]) {
    return JSON.parse(inProgressKey).meals[id].some((item) => item === ingredients);
  }
  return false;
};

export default getChecked;
// const getChecked = (ingredients, id) => {
//   const inProgressKey = localStorage.getItem('inProgressRecipes');
//   if (inProgressKey) {
//     const ingName = ingredients.split('-')[0];
//     const ingred = new RegExp(ingName, 'ig');
//     return JSON.parse(inProgressKey).meals[id].some((item) => ingred.test(item));
//   }
// };

// export default getChecked;
