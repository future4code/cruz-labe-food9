import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { Container, StyledImg, TextContainer, StyledP, Path } from './styles';

const RestaurantDetailsHeader = (props) => {
  return (
    <Box>
      <StyledImg src={props.logoUrl} />
      <StyledP><b>{props.name}</b></StyledP>
      <TextContainer>
        <Text>{props.category}</Text>
        <Text>{props.deliveryTime-10}-{props.deliveryTime} min</Text>
        <Text>Frete R${props.shipping},00</Text>
        <Text>{props.address}</Text>
      </TextContainer>
    </Box>
  );
};

export default RestaurantDetailsHeader;
