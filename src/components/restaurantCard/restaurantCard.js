import React from 'react';
import { Container, StyledImg, TextContainer, StyledP } from './styles';
import { goToRestaurantDetailPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const RestaurantCard = (props) => {
  const history = useHistory();

  return (
    <Container
      onClick={() => goToRestaurantDetailPage(history, props.id)}
    >
      <StyledImg src={props.logoUrl} />
      <TextContainer>
        <StyledP>{props.name}</StyledP>
      </TextContainer>
      <TextContainer>
        <p>
          {props.deliveryTime - 10}-{props.deliveryTime}
        </p>
        <p>Frete R${props.shipping},00</p>
      </TextContainer>
    </Container>
  );
};

export default RestaurantCard;
