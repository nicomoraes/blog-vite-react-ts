import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useTheme } from 'styled-components';
import { BodyContainer, Container } from './styles';

export const PostPageSkeleton = () => {
  const {
    COLORS: { PRIMARY_GREY_200, PRIMARY_GREY_300 },
  } = useTheme();

  const skeletonsStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <SkeletonTheme baseColor={PRIMARY_GREY_200} highlightColor={PRIMARY_GREY_300}>
      <Container>
        <h1 className='title'>
          <Skeleton {...skeletonsStyle} />
        </h1>
        <h3 className='subtitle'>
          <Skeleton {...skeletonsStyle} />
        </h3>
        <span className='publi-date'>
          <Skeleton {...skeletonsStyle} />
        </span>
        <div className='cover'>
          <Skeleton {...skeletonsStyle} borderRadius={10} />
        </div>
        <span className='tags'>
          <Skeleton width={50} height={skeletonsStyle.height} />
          <Skeleton width={30} height={skeletonsStyle.height} />
          <Skeleton width={70} height={skeletonsStyle.height} />
        </span>
      </Container>
      <BodyContainer>
        <p>
          <Skeleton width={'100%'} />
          <Skeleton width={'99%'} />
          <Skeleton width={'90%'} />
        </p>
        <p>
          <Skeleton width={'90%'} />
          <Skeleton width={'100%'} />
          <Skeleton width={'20%'} />
        </p>
        <p>
          <Skeleton width={'95%'} />
          <Skeleton width={'90%'} />
        </p>
      </BodyContainer>
    </SkeletonTheme>
  );
};
