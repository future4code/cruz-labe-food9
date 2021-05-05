import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  height: 200px;
  color: #5cb646;
`;

export const StyledImg = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  max-height: 1px;
  flex-direction: row;
  justify-content: space-between;
  color: #b8b8b8;
  padding: 10px;
`;

export const StyledP = styled.p`
  color: #5cb646;
`;
