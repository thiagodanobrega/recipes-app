import React, { useState } from 'react';
import searchIcon from '../../images/searchIcon.svg';

const FormHeader = () => {
  const [showSearch, setShowSearch] = useState(false);

  const showSearchOnClick = (e) => {
    e.preventDefault();
    setShowSearch(!showSearch);
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
          />
        )
      }
    </form>
  );
};

export default FormHeader;
