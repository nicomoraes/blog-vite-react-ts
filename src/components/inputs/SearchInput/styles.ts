import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  height: 43px;
  padding: 5px;

  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.CAPTION};
  color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};

  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_200};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500}90;
  }
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 43px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-right-width: 0;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_500};
    transition: 0.6s;
  }
`;
