import React, { useContext, useEffect, useState } from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react';
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
import axios from 'axios';
import useForm from '../../hooks/useForm';

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
  const [value, setValue] = useState('money');

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

  const placeOrder = async () => {
    const body = {
      products: [{ id: states.cart[0].id, quantity: states.cart[0].amount }],
      paymentMethod: value
    };
    console.log(body);
    try {
      const response = await axios.post(
        `${BASE_URL}/restaurants/${states.id}/order`,
        body,
        {
          headers: {
            auth: localStorage.getItem('token')
          }
        }
      );
      console.log(response.data);
      alert('Pedido enviado com sucesso');
      setters.setCart([]);
    } catch (erro) {
      console.log('Erro', erro);
    }
  };

  function RadioExample() {
    return (
      <RadioGroup onChange={setValue} value={value}>
        <TextContainer>
          <Radio value="money">Dinheiro</Radio>
        </TextContainer>
        <TextContainer>
          <Radio value="creditcard">cartão de crédito</Radio>
        </TextContainer>
        <Button
          type="submit"
          onClick={placeOrder}
          _hover={{ bg: 'brand.100' }}
          mt="22px"
          w="328px"
          bg="brand.100"
        >
          Enviar
        </Button>
      </RadioGroup>
    );
  }

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
          <FormPay>{RadioExample()}</FormPay>
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
