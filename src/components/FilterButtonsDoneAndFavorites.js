import React from 'react';
import PropTypes from 'prop-types';

function FilterButtonsDoneAndFavorites({ setTypeFilter }) {
  return (
    <section>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setTypeFilter('all') }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setTypeFilter('food') }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setTypeFilter('drink') }
      >
        Drinks
      </button>
    </section>
  );
}

FilterButtonsDoneAndFavorites.propTypes = {
  setTypeFilter: PropTypes.func.isRequired,
};

export default FilterButtonsDoneAndFavorites;
