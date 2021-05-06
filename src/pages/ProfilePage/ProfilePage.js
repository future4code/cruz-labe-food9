import React from 'react';
import {
  Title,
  StyledToolBar,
  StyledCart,
  StyledHome,
  StyledProfile,
  Perfil,
  PessoaPerfil,
  HistoricoPerfil,
  EnderecoPerfil,
  PessoaPerfilInfo,
  PessoaPerfilEditar,
  EnderecoPerfilInfo,
  EnderecoPerfilEditar,
  TextContainerHeader,
  Title2,
  TextContainer
} from './styled';
import AppBar from '@material-ui/core/AppBar';
import avatar from '../../assets/avatar.svg';
import cart from '../../assets/cart.svg';
import home from '../../assets/home.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import {
  goToAdressPage,
  goToProfileUpdatePage
} from '../../routes/coordinator';
import {
  goToHomePage,
  goToCartPage,
  goToProfilePage
} from '../../routes/coordinator';
import { Text } from '@chakra-ui/layout';
import OrderHistory from '../../components/OrderHistory/OrderHistory'

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0
  }
}));

const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [profile, getProfile] = useRequestData({}, `${BASE_URL}/profile`);
 
  return (
    <div>
      <TextContainerHeader>
        <Text fontSize="16px">Meu Perfil</Text>{' '}
      </TextContainerHeader>
      <Perfil>
        <PessoaPerfil>
          <PessoaPerfilInfo>
            <p>{profile.user && profile.user.name}</p>
            <p>{profile.user && profile.user.email}</p>
            <p>{profile.user && profile.user.cpf}</p>
          </PessoaPerfilInfo>
          <PessoaPerfilEditar>
            <CreateIcon onClick={() => goToProfileUpdatePage(history)} />
          </PessoaPerfilEditar>
        </PessoaPerfil>
        <EnderecoPerfil>
          <EnderecoPerfilInfo>
            <Title2>Endereço Cadastrado</Title2>
            <p>{profile.user && profile.user.address}</p>
          </EnderecoPerfilInfo>
          <EnderecoPerfilEditar>
            <CreateIcon onClick={() => goToAdressPage(history)} />
          </EnderecoPerfilEditar>
        </EnderecoPerfil>
        <TextContainer>
          <p>Historico de pedidos</p>
        </TextContainer>
        <HistoricoPerfil>
          <OrderHistory/>
        </HistoricoPerfil>
      </Perfil>
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

export default ProfilePage;
