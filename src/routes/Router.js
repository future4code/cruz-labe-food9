import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartPage from '../pages/CartPage/CartPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RestaurantDetailPage from '../pages/RestaurantDetailPage/RestaurantDetailPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import AdressPage from '../pages/AdressPage/AdressPage'
import ProfileUpdatePage from '../pages/ProfileUpdatePage/ProfileUpdatePage';
import IndiqueUmAmigo from '../components/MenuItens/IndiqueUmAmigo';
import Cupons from '../components/MenuItens/Cupons';
import Pedidos from '../components/MenuItens/Pedidos';
import Pagamento from '../components/MenuItens/Pagamento';
import Ajuda from '../components/MenuItens/Ajuda';
import Avaliacoes from '../components/MenuItens/Avaliacoes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/adress">
          <AdressPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/profileUpdate">
          <ProfileUpdatePage/>
        </Route>
        <Route exact path="/indiqueUmAmigo">
          <IndiqueUmAmigo/>
        </Route>
        <Route exact path="/cupons">
          <Cupons/>
        </Route>
        <Route exact path="/pedidos">
          <Pedidos/>
        </Route>
        <Route exact path="/pagamento">
          <Pagamento/>
        </Route>
        <Route exact path="/help">
          <Ajuda/>
        </Route>
        <Route exact path="/avaliacoes">
          <Avaliacoes/>
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
