import React from 'react';
import {
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile
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


  // const RestaurantFitler =  restaurant.restaurants && restaurant.restaurants.filter((rest)=>{
  //     if(rest.name === orderActive.order && orderActive.order.restaurantName){
  //       return true;
  //     }
  // })

  // console.log(RestaurantFitler && RestaurantFitler.restaurant);

  const cartItens = () => {
    return (
      <>
        <p>{orderActive.order && orderActive.order.restaurantName}</p>
        <p>{orderActive.order && orderActive.order.totalPrice}</p>
      </>
    )
  }


  return (
    <Box border='1px solid' borderColor='#C4C4C4' w="360px" minH="640px">
      <p>Meu Carrinho </p>
      <div>
        <h2>Endereço de entrega</h2>
        <p>{profile.user && profile.user.address}</p>
      </div>
      <div>
        {orderActive.order ? cartItens() : <p>Carrinho vazio</p>}
      </div>
      <div>
        <p>Forma de Pagamento</p>
        <hr/>
        <form>
          <input type={"radio"} id="male" name="gender" value="male"/>
          <label>Dinheiro</label>
          <input type={"radio"} id="female" name="gender" value="male"/>
          <label>Cartão de crédito</label>
        </form>
      </div>


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
