// const getChecked = (ingredients, id) => {
//   const inProgressKey = localStorage.getItem('inProgressRecipes');
//   if (inProgressKey) {
//     const ingName = ingredients.split('-')[0];
//     const ingred = new RegExp(ingName, 'ig');
//     return JSON.parse(inProgressKey).meals[id].some((item) => ingred.test(item));
//   }
// };

const getChecked = (ingredients, id) => {
  const inProgressKey = localStorage.getItem('inProgressRecipes');
  console.log(ingredients);
  if (inProgressKey) {
    console.log(JSON.parse(inProgressKey).cocktails[id]);
    console.log(JSON.parse(inProgressKey).cocktails[id].includes(ingredients));
    return JSON.parse(inProgressKey).cocktails[id].includes(ingredients);
  }
};

export default getChecked;
