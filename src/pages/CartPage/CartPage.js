import React from 'react';
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
  const [orderActive, getOrderActive] = useRequestData([], `${BASE_URL}/active-order`)
  const [restaurant, getRestaurant] = useRequestData([], `${BASE_URL}/restaurants`);


  const RestaurantFitler = restaurant.restaurants && restaurant.restaurants.filter((rest) => {
    if (rest.name === orderActive.order && orderActive.order.restaurantName) {
      return true;
    }
  })

  console.log(RestaurantFitler);

  const cartItens = () => {
    return (
      <CartItemPrincipal>
        <div>
          <p>Loja: {RestaurantFitler && RestaurantFitler[0].name}</p>
          <p>Endereço: {RestaurantFitler && RestaurantFitler[0].address}</p>
          <p>Tempo entrega: {(RestaurantFitler && RestaurantFitler[0].deliveryTime)}-{(RestaurantFitler && RestaurantFitler[0].deliveryTime)+15}min</p>
          {/* <p>{orderActive.order && orderActive.order.restaurantName}</p>
        <p>{orderActive.order && orderActive.order.totalPrice}</p> */}
        </div>
        <div>
          <h2>Array com produtos</h2>
        </div>
      </CartItemPrincipal>
    )
  }


  return (
    <Box border='1px solid' borderColor='#C4C4C4' w="360px" minH="640px">
      <p>Meu Carrinho </p>
      <CardInfo>
        <CardInfoPerson>
          <h2>Endereço de entrega</h2>
          <p>{profile.user && profile.user.address}</p>
        </CardInfoPerson>
        <CardInfoOrder>
          {orderActive.order ? cartItens() : <p>Carrinho vazio</p>}
        </CardInfoOrder>
        <div>
          <p>Frete: R${RestaurantFitler && RestaurantFitler[0].shipping},00</p>
          <p>Subtotal: R${orderActive.order && orderActive.order.totalPrice},00</p>
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
