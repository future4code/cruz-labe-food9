import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { StyledToolBar, StyledCart, StyledHome, StyledProfile } from './styled';
import AppBar from '@material-ui/core/AppBar';
import avatar from '../../assets/avatar.svg';
import cart from '../../assets/cart.svg';
import home from '../../assets/home.svg';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import RestaurantCard from '../../components/restaurantCard/restaurantCard';
import {
  goToHomePage,
  goToCartPage,
  goToProfilePage
} from '../../routes/coordinator';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0
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
      return <RestaurantCard key={restaurants.id} name={restaurants.name} />;
    });
  const initialState = {
    text: ''
  };
  const [form, handleInputChange, clear, setFormData] = useForm(initialState);
  console.log(form.text);
  return (
    <div>
      <p>HomePage</p>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          value={form.text}
          onChange={handleInputChange}
          type="search"
          placeholder="Restaurante"
        />
      </InputGroup>
      {restaurantScreen}
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
    </div>
  );
};

export default HomePage;
