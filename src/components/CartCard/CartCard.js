import { Center } from '@chakra-ui/layout';
import React from 'react';
import {
  StyledImg,
  StyledName,
  Path,
  StyledTitle,
  Container,
  StyledDescription,
  StyledPrice,
  TitleContainer
} from './styles';

const CartCard = (props) => {
  return (
    <div>
      <Container>
        <StyledImg src={props.photoUrl} />
        <TitleContainer>
          <StyledName>{props.name}</StyledName>
        </TitleContainer>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice> R${props.price},00 <b>x{props.amount}</b></StyledPrice>
      </Container>
      <Center>
        <button onClick={props.removeItemFromCart}>removerQuantidade</button>
      </Center>
    </div>
  );
};

export default CartCard;
