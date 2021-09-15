import React from 'react';
import { Container, StyledImg, TextContainer, StyledP } from './styles';
import { goToRestaurantDetailPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { Text } from '@chakra-ui/layout';


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
        <Text>
          {props.deliveryTime - 10}-{props.deliveryTime} min
        </Text>
        <Text>Frete R${props.shipping},00</Text>
      </TextContainer>
    </Container>
  );
};

export default RestaurantCard;
