import React from 'react';
import { NavLink } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/BottomMenu.css';

function BottomMenu() {
  return (
    <footer data-testid="footer" className="footer-container">
      <NavLink
        to="/drinks"
        data-testid="drinks-bottom-btn"
      >
        <img
          src={ drinkIcon }
          alt="Ícone de bebida"
        />
      </NavLink>
      <NavLink
        to="/explore"
        data-testid="explore-bottom-btn"
      >
        <img src={ exploreIcon } alt="Ícone de explorar" />
      </NavLink>
      <NavLink
        to="/foods"
        data-testid="food-bottom-btn"
      >
        <img src={ mealIcon } alt="Ícone de explorar" />
      </NavLink>
    </footer>
  );
}

export default BottomMenu;
