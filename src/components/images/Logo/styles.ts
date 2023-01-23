import styled from 'styled-components';

export type StyledImagesProps = {
  width?: string;
  height?: string;
};

export const StyledImage = styled.img<StyledImagesProps>`
  width: ${({ width }) => (width ? width : '31px')};
  height: ${({ height }) => (height ? height : '49px')};
`;
