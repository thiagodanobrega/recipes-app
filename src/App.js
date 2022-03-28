import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Provider from './context/myProvider';
import DetailScreen from './pages copy/DetailScreen';
import ExploreDrinksOrFoodScreen from './pages/ExploreDrinksOrFoodScreen';
import ExploreIngredientsScreen from './pages/ExploreIngredientsScreen';
import ExploreNationalitiesScreen from './pages/ExploreNationalitiesScreen';
import ExploreScreen from './pages/ExploreScreen';
import FavoritesRecipesScreen from './pages/FavoritesRecipesScreen';
import LoginScreen from './pages copy/LoginScreen';
import MadeRecipesScreen from './pages/MadeRecipesScreen';
import ProfileScreen from './pages/ProfileScreen';
import RecipeScreen from './pages copy/RecipeScreen ';
import RecipesProgressScreen from './pages/RecipesProgressScreen';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ LoginScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/drinks" component={ RecipeScreen } />
          <Route path="/explore" component={ ExploreScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
          <Route path="/foods" component={ RecipeScreen } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
