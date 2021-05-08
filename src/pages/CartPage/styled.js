import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

export const CartItemPrincipal = styled.div`
  background-color: lightpink;
  display: flex;
  flex-direction: column;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  justify-content: space-around;
`;
export const CardInfoPerson = styled.div`
  background-color: lightgrey;
  width: 100%;
  display: flex;
  flex: 0.5;
  flex-direction: column;
`;
export const CardInfoOrder = styled.div`
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
`;
export const CardInfoPay = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
export const FormPay = styled.form`
  display: flex;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  color: black;
  padding: 10px;
  font-weight: 500;
  width: 100%;
  height: 36px;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
  color: black;
  padding: 10px;
  font-weight: 500;
  width: 100%;
  height: 36px;
`;

export const TextContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: black;
  padding: 10px;
  font-weight: 500;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  height: 64px;
`;

export const Path = styled.div`
  width: 337px;
  height: 1px;
  margin-left: 10px;
  margin-right: 15px;
  border: 1px solid black;
`;

export const Title2 = styled.p`
  color: #b8b8b8;
`;

export const Total = styled.p`
  font-size: 18px;
  margin-right: 8px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  color: #5cb646;
`;


export const EnderecoRest = styled.div`
  display: flex;
  color: #5cb646;
  flex: 1;
  width: 360px;
  height: 76px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
`;

export const EnderecoCliente = styled.div`
  display: flex;
  flex: 1;
  width: 360px;
  height: 76px;
  margin: 1px 0 16px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  background-color: #eeeeee;
`;

export const StyledToolBar = styled(Toolbar)`
  box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  flex-grow: 20px;
  justify-content: space-between;
`;

export const StyledProfile = styled.img`
  width: 30px;
  padding: 0;
  margin-right: 28px;
  filter: invert(100%) sepia(0%) saturate(7438%) hue-rotate(63deg)
    brightness(84%) contrast(65%);
`;

export const StyledCart = styled.img`
  width: 35px;
  padding: 0;
  filter: invert(69%) sepia(30%) saturate(899%) hue-rotate(62deg)
    brightness(85%) contrast(82%);
`;

export const StyledHome = styled.img`
  width: 30px;
  padding: 0;
  margin-left: 28px;
  filter: invert(100%) sepia(0%) saturate(7438%) hue-rotate(63deg)
    brightness(84%) contrast(65%);
`;
