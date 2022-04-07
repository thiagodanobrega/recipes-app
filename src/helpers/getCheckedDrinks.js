const getChecked = (ingredients, id) => {
  const inProgressKey = localStorage.getItem('inProgressRecipes');
  //   console.log('localStorage key', JSON.parse(inProgressKey));
  //   console.log('localStorage key', JSON.parse(inProgressKey)
  //     .cocktails[id].includes(ingredients));
  //   console.log('localStorage Ingredientes', ingredients);
  if (inProgressKey) {
    console.log('localStorage key', JSON.parse(inProgressKey)
      .cocktails[id].includes(ingredients));
    return JSON.parse(inProgressKey).cocktails[id].includes(ingredients);
  }
};

export default getChecked;
