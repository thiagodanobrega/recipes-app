import React from 'react';
// import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function FoodProgressRecipesScreen() {
  const history = useHistory();
  // const { id } = useParams();
  const id = 52772;
  const endPointFood = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = useFetch(endPointFood);

  return (
    <div>
      <p>Tela de receita em progresso de comida</p>
    </div>
  );
}

export default FoodProgressRecipesScreen;
