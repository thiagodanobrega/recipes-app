import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/myProvider';
import LoginScreen from './pages/LoginScreen';
import FoodRecipeScreen from './pages/FoodRecipeScreen';
import DinkRecipeScreen from './pages/DinkRecipeScreen';
import FoodRecipesDetailScreen from './pages/FoodRecipesDetailScreen';
import DrinkRecipesDetailScreen from './pages/DrinkRecipesDetailScreen';
import FoodProgressRecipesScreen from './pages/FoodProgressRecipesScreen';
import DrinkProgressRecipesScreen from './pages/DrinkProgressRecipesScreen';
import ExploreScreen from './pages/ExploreScreen';
import FoodExploreScreen from './pages/FoodExploreScreen';
import DrinkExploreScreen from './pages/DrinkExploreScreen';
import ExploreFoodIngredientsScreen from './pages/ExploreFoodIngredientsScreen';
import ExploreDrinkIngredientsScreen from './pages/ExploreDrinkIngredientsScreen';
import ExploreNationalitiesScreen from './pages/ExploreNationalitiesScreen';
import ProfileScreen from './pages/ProfileScreen';
import DoneRecipesScreen from './pages/DoneRecipesScreen';
import FavoritesRecipesScreen from './pages/FavoritesRecipesScreen';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ LoginScreen } />
          <Route exact path="/foods" component={ FoodRecipeScreen } />
          <Route exact path="/drinks" component={ DinkRecipeScreen } />
          <Route exact path="/foods/:id" component={ FoodRecipesDetailScreen } />
          <Route exact path="/drinks/:id" component={ DrinkRecipesDetailScreen } />
          <Route
            exact
            path="/foods/:id/in-progress"
            component={ FoodProgressRecipesScreen }
          />
          <Route
            exact
            path="/drinks/:id/in-progress"
            component={ DrinkProgressRecipesScreen }
          />
          <Route exact path="/explore" component={ ExploreScreen } />
          <Route exact path="/explore/foods" component={ FoodExploreScreen } />
          <Route exact path="/explore/drinks" component={ DrinkExploreScreen } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodIngredientsScreen }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinkIngredientsScreen }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreNationalitiesScreen }
          />
          <Route path="/profile" component={ ProfileScreen } />
          <Route path="/done-recipes" component={ DoneRecipesScreen } />
          <Route path="/favorite-recipes" component={ FavoritesRecipesScreen } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
