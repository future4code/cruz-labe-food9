import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RestaurantDetailPage from '../pages/RestaurantDetailPage/RestaurantDetailPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/restaurants/:id">
          <RestaurantDetailPage />
        </Route>
        <Route>
          <p>Erro</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
