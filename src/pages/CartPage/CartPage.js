import React, { useContext, useEffect, useState } from 'react';
import {
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile,
  CardInfo,
  CardInfoPerson,
  CardInfoOrder,
  CardInfoPay,
  FormPay,
  CartItemPrincipal
} from './styled';
import AppBar from '@material-ui/core/AppBar';
import avatar from '../../assets/avatar.svg';
import cart from '../../assets/cart.svg';
import home from '../../assets/home.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  goToHomePage,
  goToCartPage,
  goToProfilePage
} from '../../routes/coordinator';
import { Box } from '@chakra-ui/layout';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { Button } from '@chakra-ui/react'
import { GlobalStateContext } from '../../Global/GlobalStateContext'
import CartCard from '../../components/CartCard/CartCard'
const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'sticky'
  }
}));

const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, getProfile] = useRequestData({}, `${BASE_URL}/profile`);
  const [restaurant, getRestaurant] = useRequestData([], `${BASE_URL}/restaurants`);

  const { states, setters, requests } = useContext(GlobalStateContext);
  const [priceToPay, setPriceToPay] = useState(0);

  useEffect(() => {
    let currentTotal = 0;
    states.cart.forEach((item) => {
      currentTotal += item.price * item.amount
    })
    setPriceToPay(currentTotal)
  }, [states.cart])



  const removeItemFromCart = (itemToRemove) => {
    const index = states.cart.findIndex((i) => i.id === itemToRemove.id);
    let newCart = [...states.cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setters.setCart(newCart);
  };

  const produtList = states.cart.map((item) => {
    return (
      <CartCard
        name={item.name}
        price={item.price}
        amount={item.amount}
        photoUrl={item.photoUrl}
        removeItemFromCart={() => removeItemFromCart(item)}
        description={item.description}
      />
    )
  })


  const RestaurantFitler = restaurant.restaurants && restaurant.restaurants.filter((rest) => {
    if(rest.id === states.id){
      return true;
    }
  })

  console.log(RestaurantFitler);

  const cartItens = () => {
    return (
      <CartItemPrincipal>
        <div>
          <p>Loja: {RestaurantFitler && RestaurantFitler[0].name}</p>
          <p>Endereço: {RestaurantFitler  && RestaurantFitler[0].address}</p>
          <p>Tempo entrega: {(RestaurantFitler && RestaurantFitler[0].deliveryTime)}-{(RestaurantFitler && RestaurantFitler[0].deliveryTime)+15}min</p>
          </div>
      </CartItemPrincipal>
    )
  }

  console.log("id",states.id);
  return (
    <Box border='1px solid' borderColor='#C4C4C4' w="360px" minH="640px">
      <p>Meu Carrinho </p>
      <CardInfo>
        <CardInfoPerson>
          <h2>Endereço de entrega</h2>
          <p>{profile.user && profile.user.address}</p>
        </CardInfoPerson>
        <div>
          {RestaurantFitler && states.cart && states.cart.length > 0 ? cartItens() : <p>Sem nada</p>}
        </div>
        <CardInfoOrder>
          {states.cart && states.cart.length > 0 ? produtList : <p>Carrinho vazio</p>}
        </CardInfoOrder>
        <div>
          <h1>Total: R${priceToPay.toFixed(2)}</h1>
        </div>
        <CardInfoPay>
          <p>Forma de Pagamento</p>
          <FormPay>
            <div>
              <input type={"radio"} id="male" name="gender" value="male" />
              <label>Dinheiro</label>
            </div>
            <div>
              <input type={"radio"} id="female" name="gender" value="male" />
              <label>Cartão de crédito</label>
            </div>
            <Button
              type='submit'
              _hover={{ bg: "brand.100" }}
              mt='22px' w='328px'
              bg='brand.100'>Enviar</Button>
          </FormPay>
        </CardInfoPay>
      </CardInfo>


      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <StyledToolBar>
          <StyledHome onClick={() => goToHomePage(history)} src={home} />
          <StyledCart onClick={() => goToCartPage(history)} src={cart} />
          <StyledProfile
            onClick={() => goToProfilePage(history)}
            src={avatar}
          />
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default CartPage;
