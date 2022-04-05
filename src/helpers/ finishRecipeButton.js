import { useHistory } from 'react-router-dom';

const FinishButton = () => {
  const history = useHistory();
  const storage = JSON.parse(localStorage
    .getItem('inProgressRecipes')).meals[id];

  if (storage && .length === renderIngredients().length) {
    setEnabledButton(true);
    history.push('/done-recipes');
  }
};

export default FinishButton;
