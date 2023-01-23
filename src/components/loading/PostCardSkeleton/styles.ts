import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 436.14px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_GREY_300};
  border-radius: 10px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .tag-span {
    margin: 10px;
  }

  .tag-span span {
    margin: 0 3px;
  }

  .title {
    margin-left: 13px;
  }

  .description {
    margin: 10px 0 10px 13px;
  }

  .description > span span {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .link-button {
    margin-left: 13px;
  }
`;
