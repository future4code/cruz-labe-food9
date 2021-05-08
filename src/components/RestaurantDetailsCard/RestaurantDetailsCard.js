import React from 'react';
import {
  StyledImg,
  StyledName,
  Path,
  StyledTitle,
  Container,
  StyledDescription,
  StyledPrice,
  TitleContainer,
  Button
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
        <Button onClick={props.addItemToCart}>Adicionar</Button>
      </Container>
    </div>
  );
};

export default RestaurantDetailsCard;
