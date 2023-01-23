import { useTheme } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Container } from './styles';

export const PostCardSkeleton = () => {
  const {
    COLORS: { PRIMARY_GREY_200, PRIMARY_GREY_300 },
  } = useTheme();
  return (
    <SkeletonTheme baseColor={PRIMARY_GREY_200} highlightColor={PRIMARY_GREY_300}>
      <Container>
        <Skeleton width={'100%'} height={194.14} borderRadius={10} />
        <span className='tag-span'>
          <Skeleton width={'20%'} inline={true} count={3} />
        </span>
        <h3 className='title'>
          <Skeleton width={'90%'} height={50} />
        </h3>
        <p className='description'>
          <Skeleton width={'90%'} count={2} />
        </p>
        <span className='link-button'>
          <Skeleton width={150} height={40} />
        </span>
      </Container>
    </SkeletonTheme>
  );
};
