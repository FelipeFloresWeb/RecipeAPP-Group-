import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UserProvider from './context/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import MainRecipes from './pages/MainRecipes';
import MainCocktails from './pages/MainCocktails';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';
import FoodDetails from './pages/FoodDetails';
import FoodByIngredient from './pages/FoodByIngredient';
import FoodByArea from './pages/FoodByArea';
import DrinkDetails from './pages/DrinkDetails';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import DrinkByIngredient from './pages/DrinkByIngredient';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/bebidas" component={ MainCocktails } />
            <Route exact path="/comidas" component={ MainRecipes } />
            <Route exact path="/bebidas/:id" component={ DrinkDetails } />
            <Route exact path="/comidas/:id" component={ FoodDetails } />
            <Route exact path="/comidas/:id/in-progress" component={ FoodInProgress } />
            <Route exact path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
            <Route exact path="/explorar" component={ Explore } />
            <Route exact path="/explorar/comidas" component={ ExploreFood } />
            <Route
              exact
              path="/explorar/comidas/ingredientes"
              component={ FoodByIngredient }
            />
            <Route exact path="/explorar/comidas/area" component={ FoodByArea } />
            <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
            <Route
              exact
              path="/explorar/bebidas/ingredientes"
              component={ DrinkByIngredient }
            />
            <Route exact path="/perfil" component={ Profile } />
            <Route exact path="/receitas-feitas" component={ DoneRecipes } />
            <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
