import { Button } from '@chakra-ui/button';
import { Box, Center } from '@chakra-ui/layout';
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
    <Box>
      <StyledTitle>{props.category}</StyledTitle>
      <Path />
      <Container>
        <StyledImg src={props.photoUrl} />
        <TitleContainer>
          <StyledName><b>{props.name}</b></StyledName>
        </TitleContainer>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice>R${props.price}</StyledPrice>
        <Button w='25%' mt='90px' ml='-100px' bg='white' onClick={props.addItemToCart}>Adicionar</Button>
      </Container>
    </Box>
  );
};

export default RestaurantDetailsCard;
