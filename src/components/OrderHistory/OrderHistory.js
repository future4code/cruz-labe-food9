import React from 'react';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import {PedidosContainer, StyledRestaurantName, StyledTotal} from './styles'

const OrderHistory = () => {
  const [orderHist, getOrderHist] = useRequestData(
    {},
    `${BASE_URL}/orders/history`
  );

  const orderHistScreen =
    orderHist.orders &&
    orderHist.orders.map((bananinha) => {
      return (
        <PedidosContainer>
          <StyledRestaurantName>{bananinha.restaurantName}</StyledRestaurantName>
          <StyledTotal>SUBTOTAL R${bananinha.totalPrice}</StyledTotal>
        </PedidosContainer>
      );
    });

  
  return <div>{orderHistScreen}</div>;
};
export default OrderHistory;
