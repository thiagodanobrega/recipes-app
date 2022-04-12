import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FilterButtonsDoneAndFavorites.css';

function FilterButtonsDoneAndFavorites({ setTypeFilter }) {
  return (
    <section className="container-filters">
      <button
        type="button"
        data-testid="filter-by-all-btn"
        className="filters-done-favorite"
        onClick={ () => setTypeFilter('all') }
      >
        All
      </button>

      <button
        type="button"
        data-testid="filter-by-food-btn"
        className="filters-done-favorite"
        onClick={ () => setTypeFilter('food') }
      >
        Food
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        className="filters-done-favorite"
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
