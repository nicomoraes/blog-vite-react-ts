import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px auto 5px auto;

  .title {
    width: 100%;
    height: 100px;
  }

  .subtitle {
    width: 75%;
    height: 36px;
    margin: 20px 0 2px 0;
  }

  .publi-date {
    width: 150px;
    height: 20px;
    margin: 10px 0;
  }
  .cover {
    width: 100%;
    height: 200px;
  }
  .tags {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 18px;
    margin: 10px 0;
    span span {
      margin: 0 5px;
    }
  }

  @media (max-width: 640px) {
    .title {
      height: 50px;
    }

    .subtitle {
      height: 26px;
    }

    .cover {
      height: 90px;
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto;

  p {
    margin: 15px 0;

    span {
      margin: 8px 0;
      height: 20px;
    }
  }

  @media (max-width: 640px) {
    p {
      margin: 10px 0;

      span {
        height: 15px;
      }
    }
  }
`;
