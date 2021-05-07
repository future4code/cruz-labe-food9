import { Text } from '@chakra-ui/layout';
import React from 'react';
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

const RestaurantDetailPage = (props) => {
  useProtectedPage();
  const params = useParams();
  const history = useHistory();
  const [restaurant, setRestaurant] = useRequestData(
    {},
    `${BASE_URL}/restaurants/${params.id}`
  );

  console.log(restaurant);

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
    <div>
      <TextContainerHeader>
        <Text fontSize="16px">Restaurante</Text>

        {/* Botão voltar para a HomePage*/}
        <ButtonBack onClick={() => goToHomePage(history)} />
      </TextContainerHeader>

      {/* DIV contendo as informações do do restaurante (topo da tela) */}
      <div>
        {restaurantScreen()}
        <div>{restaurantItems}</div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
