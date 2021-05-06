import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile,
  TextContainerHeader
} from './styled';
import AppBar from '@material-ui/core/AppBar';
import avatar from '../../assets/avatar.svg';
import cart from '../../assets/cart.svg';
import home from '../../assets/home.svg';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import RestaurantCard from '../../components/restaurantCard/restaurantCard';
import {
  goToHomePage,
  goToCartPage,
  goToProfilePage
} from '../../routes/coordinator';
import useForm from '../../hooks/useForm';
import CardScrollCaregory from '../../components/CardScrollCategory/CardScrollCategory';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'sticky'
  }
}));

const HomePage = () => {
  useProtectedPage();
  const classes = useStyles();
  const history = useHistory();
  const [restaurant, getRestaurant] = useRequestData(
    [],
    `${BASE_URL}/restaurants`
  );

  const restaurantScreen =
    restaurant.restaurants &&
    restaurant.restaurants.map((restaurants) => {
      return (
        <RestaurantCard
          key={restaurants.id}
          id={restaurants.id}
          name={restaurants.name}
          shipping={restaurants.shipping}
          deliveryTime={restaurants.deliveryTime}
          logoUrl={restaurants.logoUrl}
        />
      );
    });

  const [form, onChange, clear] = useForm({ name: '' });

  return (
    <div>
      <TextContainerHeader>
        <Text fontSize="16px">FutureEats</Text>
      </TextContainerHeader>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
          margin="4"
          mt="2"
        />
        <Input
          focusBorderColor="#5cb646"
          borderColor="gray.400"
          size="lg"
          name={'name'}
          value={form.name.toLowerCase()}
          onChange={onChange}
          type="search"
          placeholder="Restaurante"
          margin="3"
          borderRadius="0"
          mt="1"
        />
      </InputGroup>

      <CardScrollCaregory />

      {restaurantScreen && restaurantScreen.length > 0 ? (
        restaurantScreen.filter((rest) => {
          return form.name
            ? rest.props.name &&
                rest.props.name.toLowerCase().includes(form.name)
            : true;
        })
      ) : (
        <p>Carregando</p>
      )}
      {restaurantScreen && restaurantScreen.length > 0 ? (
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
      ) : null}
    </div>
  );
};


export default HomePage;
