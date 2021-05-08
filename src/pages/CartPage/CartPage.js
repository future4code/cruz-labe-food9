import React, { useContext, useEffect, useState } from 'react';
import {
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile,
  CardInfo,
  CardInfoOrder,
  CardInfoPay,
  FormPay,
  TextContainer,
  TextContainerHeader,
  Path,
  EnderecoRest,
  Title2,
  EnderecoCliente,
  TotalContainer,
  Total
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
import { Button } from '@chakra-ui/react';
import { GlobalStateContext } from '../../Global/GlobalStateContext';
import CartCard from '../../components/CartCard/CartCard';
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
  const [restaurant, getRestaurant] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );

  const { states, setters, requests } = useContext(GlobalStateContext);
  const [priceToPay, setPriceToPay] = useState(0);

  useEffect(() => {
    let currentTotal = 0;
    states.cart.forEach((item) => {
      currentTotal += item.price * item.amount;
    });
    setPriceToPay(currentTotal);
  }, [states.cart]);

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
    );
  });

  const RestaurantFitler =
    restaurant.restaurants &&
    restaurant.restaurants.filter((rest) => {
      if (rest.id === states.id) {
        return true;
      }
    });

  console.log(RestaurantFitler);

  const cartItens = () => {
    return (
      <EnderecoRest>
        <p>{RestaurantFitler && RestaurantFitler[0].name}</p>
        <Title2>{RestaurantFitler && RestaurantFitler[0].address}</Title2>
        <Title2>
          {RestaurantFitler && RestaurantFitler[0].deliveryTime}-
          {(RestaurantFitler && RestaurantFitler[0].deliveryTime) + 15}min
        </Title2>
      </EnderecoRest>
    );
  };

  console.log('id', states.id);
  return (
    <Box border="1px solid" borderColor="#C4C4C4" minW="360px" minH="640px">
      <TextContainerHeader>
        <p>Meu Carrinho </p>
      </TextContainerHeader>
      <EnderecoCliente>
        <Title2>Endereço de entrega</Title2>
        {profile.user && profile.user.address}
      </EnderecoCliente>
      {cartItens()}
      <CardInfo>
        <CardInfoOrder>
          {states.cart && states.cart.length > 0 ? (
            produtList
          ) : (
            <TextContainerHeader>Carrinho vazio</TextContainerHeader>
          )}
        </CardInfoOrder>
        <TotalContainer>
          <p>FRETE</p>
          <Total>R${RestaurantFitler && RestaurantFitler[0].shipping},00</Total>
        </TotalContainer>
        <TotalContainer>
          <p>SUBTOTAL</p>
          <Total>R${priceToPay.toFixed(2)}</Total>
        </TotalContainer>
        <CardInfoPay>
          <TextContainer>Forma de Pagamento</TextContainer>
          <Path />
          <FormPay>
            <TextContainer>
              <input type={'radio'} id="male" name="gender" value="male" />
              <label>Dinheiro</label>
            </TextContainer>
            <TextContainer>
              <input type={'radio'} id="female" name="gender" value="male" />
              <label>Cartão de crédito</label>
            </TextContainer>
            <Button
              type="submit"
              _hover={{ bg: 'brand.100' }}
              mt="22px"
              w="328px"
              bg="brand.100"
            >
              Enviar
            </Button>
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
