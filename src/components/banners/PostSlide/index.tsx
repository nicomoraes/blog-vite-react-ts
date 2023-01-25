import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { get } from '@lib/get';
import { IPost } from '@interfaces/post';
import { SlideButton } from '@components/buttons/SlideButton';
import { CloudinaryImage } from '@components/images/CloudinaryImage';
import { PostSlideError } from '@components/error/PostSlideError';
import { PostSlideSkeleton } from '@components/loading/PostSlideSkeleton';
import { Banner, Caption, Container, Title, Summary } from './styles';

export const PostSlide = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<IPost[], Error>('featured', () => get('/posts/featured'));

  return isLoading ? (
    <PostSlideSkeleton />
  ) : isError ? (
    <PostSlideError />
  ) : (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        renderArrowNext={(clickHandler) => (
          <SlideButton arrowDirection={'right'} onClick={() => clickHandler()} />
        )}
        renderArrowPrev={(clickHandler) => (
          <SlideButton arrowDirection={'left'} onClick={() => clickHandler()} />
        )}
      >
        {posts &&
          posts.map((post) => {
            return (
              <Link to={`/posts/${post.slug}`} key={post.id}>
                <Banner>
                  <CloudinaryImage link={post.coverLink} size={'slide'} />
                  <Caption>
                    <Title>{post.title}</Title>
                    <Summary>{post.description}</Summary>
                  </Caption>
                </Banner>
              </Link>
            );
          })}
      </Carousel>
    </Container>
  );
};
