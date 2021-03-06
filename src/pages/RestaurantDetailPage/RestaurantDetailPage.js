import { Text, Box, useToast } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { TextContainerHeader } from './styled';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import { goToHomePage } from '../../routes/coordinator';
import { ButtonBack } from './styled';
import { useHistory } from 'react-router-dom';
import RestaurantDetailsCard from '../../components/RestaurantDetailsCard/RestaurantDetailsCard';
import RestaurantDetailsHeader from '../../components/RestaurantDetailsHeader/RestaurantDetailsHeader';
import { GlobalStateContext } from '../../Global/GlobalStateContext';

const RestaurantDetailPage = (props) => {

  const toast = useToast()

  useProtectedPage();
  const params = useParams();
  const history = useHistory();
  const [restaurant, setRestaurant] = useRequestData(
    {},
    `${BASE_URL}/restaurants/${params.id}`
  );
  
  const { states, setters } = useContext(GlobalStateContext);
   
  //pegar o ID do restaurant 
    setters.setId(params.id); 
  
    console.log("states id",states.id);

  const addItemToCart = (newItem) =>{
    const index = states.cart.findIndex((i)=> i.id === newItem.id);
    let newCart = [...states.cart]
    if(index === -1){
      newCart.push({...newItem,amount:1})
    }else{
      newCart[index].amount += 1;
    }
    setters.setCart(newCart)
    toast({
      title: `${newItem.name}`,
      variant: "left-accent",
      status: "success",
      description: `Foi adicionado ao seu carrinho!`,
      duration: 2000,
      position: "bottom-right",
      isClosable: true,
    });
  }

  {
    /* Map para puxar a info dos produtos do menu*/
  }
  const restaurantItems =
    restaurant.restaurant &&
    restaurant.restaurant.products.map((item) => {
      return (
        <RestaurantDetailsCard
          category={item.category}
          photoUrl={item.photoUrl}
          name={item.name}
          description={item.description}
          price={item.price}
          addItemToCart={()=>addItemToCart(item)}
        ></RestaurantDetailsCard>
      );
    });

  const restaurantScreen = () => {
    return (
      <RestaurantDetailsHeader
        logoUrl={restaurant.restaurant && restaurant.restaurant.logoUrl}
        name={restaurant.restaurant && restaurant.restaurant.name}
        category={restaurant.restaurant && restaurant.restaurant.category}
        deliveryTime={
          restaurant.restaurant && restaurant.restaurant.deliveryTime
        }
        shipping={restaurant.restaurant && restaurant.restaurant.shipping}
        address={restaurant.restaurant && restaurant.restaurant.address}
      />
    );
  };

  return (
    <Box>
      <TextContainerHeader>
        <Text fontSize="16px">Restaurante</Text>

        {/* Bot??o voltar para a HomePage*/}
        <ButtonBack onClick={() => goToHomePage(history)} />
      </TextContainerHeader>

      {/* DIV contendo as informa????es do do restaurante (topo da tela) */}
      <Box>
        {restaurantScreen()}
        <Box>{restaurantItems}</Box>
      </Box>
    </Box>
  );
};

export default RestaurantDetailPage;
