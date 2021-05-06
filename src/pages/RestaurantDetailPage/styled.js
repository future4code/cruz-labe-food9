import styled from 'styled-components';
import {IoIosArrowBack} from "react-icons/io";

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

export const StyledImg = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const ButtonBack = styled(IoIosArrowBack)`
  margin-top: 10px;
  width: 23px;
  height: 24px;
`;
