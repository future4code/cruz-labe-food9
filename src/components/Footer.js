import React from 'react';
import {
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile
} from './footerStyles';
import AppBar from '@material-ui/core/AppBar';
import avatar from '../assets/avatar.svg';
import cart from '../assets/cart.svg';
import home from '../assets/home.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  goToHomePage,
  goToCartPage,
  goToProfilePage
} from '../routes/coordinator';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0
  }
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <StyledToolBar>
        <StyledHome onClick={() => goToHomePage(history)} src={home} />
        <StyledCart onClick={() => goToCartPage(history)} src={cart} />
        <StyledProfile onClick={() => goToProfilePage(history)} src={avatar} />
      </StyledToolBar>
    </AppBar>
  );
};

export default Footer;
