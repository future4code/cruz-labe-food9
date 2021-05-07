import React from 'react';
import { Container, StyledImg, TextContainer, StyledP, Path } from './styles';

const RestaurantDetailsHeader = (props) => {
  return (
    <div>
      <StyledImg src={props.logoUrl} />
      <StyledP>{props.name}</StyledP>
      <TextContainer>
        <p>{props.category}</p>
        <p>{props.deliveryTime-10}-{props.deliveryTime} min</p>
        <p>Frete R${props.shipping},00</p>
        <p>{props.address}</p>
      </TextContainer>
    </div>
  );
};

export default RestaurantDetailsHeader;
