import styled from 'styled-components';
import { PrimaryButton } from '@components/buttons/PrimaryButton';

export const Container = styled.section`
  width: 100%;
  height: max-content;
  margin: 0 auto;
`;

export const LoadingMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const LoadingMoreButton = styled(PrimaryButton)`
  border-radius: 75px;
  font-weight: 700;

  .animation {
    width: 80px;
    height: 80px;
  }
`;
