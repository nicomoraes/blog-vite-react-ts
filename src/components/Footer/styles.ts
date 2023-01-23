import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_BLACK_500};

  & > div {
    margin-bottom: 5px;
  }
`;

export const Signature = styled.span`
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
`;
export const AuthorName = styled.span`
  letter-spacing: 0;
  font-weight: 900;
`;
