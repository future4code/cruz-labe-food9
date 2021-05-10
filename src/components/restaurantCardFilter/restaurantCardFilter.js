import React from 'react';
import { Container, StyledImg, TextContainer, StyledP } from './styles';
import { goToRestaurantDetailPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { Text } from '@chakra-ui/layout';

const RestaurantCardFilter = (props) => {
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
          {props.deliveryTime - 10}-{props.deliveryTime}
        </Text>
        <Text>Frete R${props.shipping},00</Text>
      </TextContainer>
    </Container>
  );
};

export default RestaurantCardFilter;
