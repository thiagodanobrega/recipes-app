import React, { useContext, useState } from 'react';
import contextFoodRecipe from '../../context/contextFoodRecipe/contextFoodRecipe';
import searchIcon from '../../images/searchIcon.svg';

const InputText = () => {
  const { setUserTypedText } = useContext(contextFoodRecipe);
  const [showSearch, setShowSearch] = useState(false);

  const showSearchOnClick = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
  };

  const onChangeInputText = ({ target: { value } }) => {
    setUserTypedText(value);
  };

  return (
    <form>
      <input
        type="image"
        src={ searchIcon }
        alt="desenho de uma lupa"
        data-testid="search-top-btn"
        onClick={ showSearchOnClick }
      />
      {
        showSearch && (
          <input
            type="text"
            name="searchInput"
            data-testid="search-input"
            onChange={ onChangeInputText }
          />
        )
      }
    </form>
  );
};

export default InputText;
