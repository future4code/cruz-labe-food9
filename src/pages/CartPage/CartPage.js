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
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'


const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0
  }
}));

const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, getProfile] = useRequestData({}, `${BASE_URL}/profile`);
  return (
    <div>
      <p>Meu Carrinho </p>
      <div>
        <p><strong>Endereço de Entrega</strong></p>
        <p>{profile.user && profile.user.address}</p>
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
    </div>
  );
};

export default CartPage;
