import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-row-gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;
