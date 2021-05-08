import { Center } from '@chakra-ui/layout';
import React from 'react';
import {
  StyledImg,
  StyledName,
  ButtonRed,
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
        <ButtonRed onClick={props.removeItemFromCart}>Remover</ButtonRed>
      </Center>
    </div>
  );
};

export default CartCard;
