import React, { useContext, useEffect, useState } from 'react';
import { Radio, RadioGroup, Center } from "@chakra-ui/react"
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
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
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
      <CartItemPrincipal>
        <Box mt='10px'>
          <Text color='brand.100'><b>{RestaurantFitler && RestaurantFitler[0].name}</b></Text>
          <Text color='#b8b8b8'>{RestaurantFitler && RestaurantFitler[0].address}</Text>
          <Text color='#b8b8b8'>{(RestaurantFitler && RestaurantFitler[0].deliveryTime)}-{(RestaurantFitler && RestaurantFitler[0].deliveryTime) + 15}min</Text>
        </Box>
      </CartItemPrincipal>
    )
  }

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
      <RadioGroup mt='15px' onChange={setValue} value={value}>
        <Stack>
          <Radio colorScheme="green" value="money">Dinheiro</Radio>
          <Radio colorScheme="green" value="creditcard">cartão de crédito</Radio>
        </Stack>
        <Center>
          <Button
            type='submit'
            onClick={placeOrder}
            _hover={{ bg: "brand.100" }}
            mt='22px' w='328px'
            bg='brand.100'>Enviar</Button>
        </Center>
      </RadioGroup>
    );
  }

  return (
    <Box border='1px solid' borderColor='#C4C4C4' minW="360px" minH="640px">
      <Center p={2}>
        <Text><b>Meu Carrinho</b></Text>
      </Center>
      <CardInfo>
        <CardInfoPerson>
          <Text color='#b8b8b8' ml='10px' mt='10px'>Endereço de entrega</Text>
          <Text ml='10px' mb='10px'><b>{profile.user && profile.user.address}</b></Text>
        </CardInfoPerson>
        <Box>
          {RestaurantFitler && states.cart && states.cart.length > 0 ? cartItens() : <Text></Text>}
        </Box>
        <CardInfoOrder>
          <Flex flexDirection='column' mt='10px'>
            {states.cart && states.cart.length > 0 ? produtList : <Text>Carrinho vazio</Text>}
          </Flex>
        </CardInfoOrder>
        <Center w='90%' justifyContent='space-between'>
          <Text><b>SUBTOTAL</b></Text> 
          <Text color='brand.100'>R${priceToPay.toFixed(2)}</Text>
        </Center>
        <CardInfoPay>
          <Text><b>Forma de Pagamento</b></Text>
          {RadioExample()}
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
