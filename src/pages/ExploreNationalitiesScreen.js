import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header/Header';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from '../components/Card';

const NATIONALITIES_API = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const MAX_RECIPES = 12;

function ExploreNationalitiesScreen() {
  const {
    allFoodsData,
  } = useContext(contextFoodRecipe);
  const { history } = useHistory();
  console.log(useHistory());
  console.log(history);
  // estado local para o select
  const [nationalities, setNationalities] = useState([]);
  const [chosenNationalities, setChosenNationalities] = useState('All');
  /*  const [filteredNationalities, setFilteredNationalities] = useState([]); */

  const { data, isLoading } = useFetch(NATIONALITIES_API);
  useEffect(() => {
    if (data) setNationalities(data.meals);
  }, [data]);

  // ---- Função para redirecionar para tela de detalhes
  const redirectOnClick = ({ target }) => {
    history.push(`/foods/${target.id}`);
  };

  const filteringByNationalities = () => {
    if (chosenNationalities === 'All') {
      return allFoodsData;
    }
    const fileteredFoods = allFoodsData
      .filter((foodData) => foodData.strArea === chosenNationalities);
    return fileteredFoods;
  };
  filteringByNationalities();
  return (
    <div>
      <Header
        renderScreen
        nameScreen="Explore Nationalities"
      />
      { isLoading
        ? <Loading />
        : (
          <form>
            <label htmlFor="select-Nationalities">
              <select
                id="select-Nationalities"
                data-testid="explore-by-nationality-dropdown"
                onChange={ (e) => setChosenNationalities(e.target.value) }
              >
                <option
                  data-testid="All-option"
                >
                  All
                </option>
                {
                  nationalities.map((nationality) => (
                    <option
                      key={ nationality.strArea }
                      data-testid={ `${nationality.strArea}-option` }
                      value={ nationality.strArea }
                    >
                      {nationality.strArea}
                    </option>
                  ))
                }

              </select>
            </label>
          </form>
        )}
      <section>
        {filteringByNationalities().slice(0, MAX_RECIPES).map((meal, index) => (
          <div
            type="button"
            key={ index }
          >
            <Card
              id={ meal.idMeal }
              name={ meal.strMeal }
              image={ meal.strMealThumb }
              typeCard="recipe-card"
              index={ index }
              funcOnClick={ redirectOnClick }
            />
          </div>
        ))}
      </section>
      <BottomMenu />
    </div>
  );
}

export default ExploreNationalitiesScreen;
