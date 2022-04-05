// import { React, useEffect, useState } from 'react';
// // import { useLocation, useParams } from 'react-router-dom';
// import { useHistory, useLocation } from 'react-router-dom';
// import EmbedVideo from '../components/EmbedVideo';
// import Loading from '../components/Loading';
// import useFetch from '../hooks/useFetch';
// import Share from '../images/shareIcon.svg';
// import FavoriteWhite from '../images/whiteHeartIcon.svg';
// // import FavoriteBlack from '../images/whiteHeartIcon.svg';
// import '../styles/pages/FoodRecipesDetailScreen.css';

// const copy = require('clipboard-copy');

// const RECIPE_ID = '11007';
// const RECIPES_BY_ID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${RECIPE_ID}`;

// const DrinkRecipesDetailScreen = () => {
//   const { data, isLoading } = useFetch(RECIPES_BY_ID);
//   const [completeList, setCompleteList] = useState([]);

//   const history = useHistory();

//   const listIngredientsAndMeasures = (object) => {
//     const getallIngredients = Object.entries(object)
//       .filter(([key, value]) => (key.includes('strIngredient') && value))
//       .map((array) => array[1]);

//     const getAllMeasures = Object.entries(object)
//       .filter(([key, value]) => (key.includes('strMeasure') && value))
//       .map((array) => array[1]);

//     const getAllListRecipe = [];
//     getallIngredients.forEach((item, index) => (getAllListRecipe.push(
//       `- ${item} - ${getAllMeasures[index]}`,
//     )));

//     setCompleteList(getAllListRecipe);
//   };

//   console.log(data.drinks[0]);

//   useEffect(() => {
//     if (data) {
//       listIngredientsAndMeasures(data.drinks[0]);
//     }
//   }, [data]);

//   const location = useLocation();
//   const copyToClipboard = () => {
//     copy(location.pathname);
//     global.alert('Link copied!');
//   };

//   if (isLoading || !data) {
//     return <Loading />;
//   }

//   const {
//     idDrink,
//     strDrink,
//     strDrinkThumb,
//     strCategory,
//     strInstructions,
//     // strArea,
//     // strDrinkAlternate,
//     strYoutube,
//   } = data.Drinks[0];

//   const embedId = strYoutube.substring(strYoutube.indexOf('=') + 1, strYoutube.length);

//   return (
//     <main>
//       <section>
//         <figure>
//           <img
//             data-testid="recipe-photo"
//             src={ strDrinkThumb }
//             alt="{strDrink}"
//             height={ 250 }
//             width={ 250 }
//           />
//         </figure>

//         <div>
//           <h2 data-testid="recipe-title">
//             {strDrink}
//           </h2>

//           <input
//             type="image"
//             data-testid="favorite-btn"
//             alt="Favorite"
//             src={ FavoriteWhite }
//             height={ 50 }
//             width={ 50 }
//             onClick={ () => saveFavoriteRecipe() }
//           />

//           <input
//             type="image"
//             data-testid="share-btn"
//             alt="Share"
//             src={ Share }
//             height={ 50 }
//             width={ 50 }
//             onClick={ () => copyToClipboard() }
//           />
//         </div>

//         <p data-testid="recipe-category">
//           {strCategory}
//         </p>
//       </section>

//       <section>
//         <h2> Ingredients </h2>

//         <ul>
//           {
//             completeList.map((item, index) => (
//               <li key={ index }>
//                 {item}
//               </li>
//             ))
//           }
//         </ul>
//       </section>

//       <section>
//         <h2> Instructions </h2>
//         <p data-testid="instructions">
//           {strInstructions}
//         </p>
//       </section>

//       <section className="EmbedVideo">
//         <h2> Video </h2>
//         <EmbedVideo embedId={ embedId } />
//       </section>

//       <section>
//         <h2> Recommended </h2>
//         <div> RECOMENDA </div>
//       </section>

//       <button
//         type="button"
//         data-testid="start-recipe-btn"
//         onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
//       >
//         Start Recipe
//       </button>
//     </main>
//   );
// };
// export default DrinkRecipesDetailScreen;
