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

const RestaurantDetailsCard = (props) => {
  return (
    <div>
      <StyledTitle>{props.category}</StyledTitle>
      <Path />
      <Container>
        <StyledImg src={props.photoUrl} />
        <TitleContainer>
          <StyledName>{props.name}</StyledName>
        </TitleContainer>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice>R${props.price}</StyledPrice>
      </Container>
      <Center>
        <button onClick={props.addItemToCart}>Adicionar</button>
      </Center>
    </div>
  );
};

export default RestaurantDetailsCard;
