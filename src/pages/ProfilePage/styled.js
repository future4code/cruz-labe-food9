import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';

export const StyledToolBar = styled(Toolbar)`
  box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: row;
  flex-grow: 20px;
  justify-content: space-between;
`;

export const StyledProfile = styled.img`
  width: 35px;
  padding: 0;
  margin-right: 28px;
  filter: invert(69%) sepia(30%) saturate(899%) hue-rotate(62deg)
    brightness(85%) contrast(82%);
`;

export const StyledCart = styled.img`
  width: 38px;
  padding: 0;
  filter: invert(100%) sepia(0%) saturate(7438%) hue-rotate(63deg)
    brightness(84%) contrast(65%);
`;

export const StyledHome = styled.img`
  width: 35px;
  padding: 0;
  margin-left: 28px;
  filter: invert(100%) sepia(0%) saturate(7438%) hue-rotate(63deg)
    brightness(84%) contrast(65%);
`;
