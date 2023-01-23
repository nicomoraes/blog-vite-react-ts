import { useTheme } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Container } from './styles';
import { SlideButton } from '@components/buttons/SlideButton';

export const PostSlideSkeleton = () => {
  const {
    COLORS: { PRIMARY_GREY_200, PRIMARY_GREY_300 },
  } = useTheme();
  return (
    <SkeletonTheme baseColor={PRIMARY_GREY_200} highlightColor={PRIMARY_GREY_300}>
      <Container>
        <Skeleton width={'100%'} height={'100%'} borderRadius={10} />
        <SlideButton arrowDirection='right' />
        <SlideButton arrowDirection='left' />
      </Container>
    </SkeletonTheme>
  );
};
