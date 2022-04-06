import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import contextFoodRecipe from '../context/contextFoodRecipe/contextFoodRecipe';
import Card from './Card';

function CarouselTest() {
  const { allFoodsData } = useContext(contextFoodRecipe);
  const history = useHistory();
  const redirectOnClick = ({ target }) => {
    history.push(`/foods/${target.id}`);
  };
  return (
    <Carousel>
      { allFoodsData.map((food, index) => (
        <Carousel.Item key={ index }>
          <Card
            id={ food.idMeal }
            name={ food.strMeal }
            image={ food.strMealThumb }
            typeCard="recipe-card"
            index={ index }
            funcOnClick={ redirectOnClick }
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
          />
        </Carousel.Item>
      ))}

      {/*  <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>  */}
    </Carousel>

  );
}
export default CarouselTest;
