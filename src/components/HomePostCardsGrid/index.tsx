import { useQuery } from 'react-query';

import { get } from '@lib/get';
import { Post } from '@interfaces/post';
import { EmptyBox } from '@components/EmptyBox';
import { PostCard } from '@components/banners/PostCard';
import { PostCardSkeleton } from '@components/loading/PostCardSkeleton';
import { Container } from './styles';

export const HomePostCardsGrid = () => {
  const { data: posts, isLoading } = useQuery<Post[], Error>('cards', () => get('/posts/cards'));

  return (
    <Container>
      {isLoading ? (
        <>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </>
      ) : posts && posts.length > 0 ? (
        posts.map((post, index) => {
          return <PostCard key={index} {...post} />;
        })
      ) : (
        <EmptyBox />
      )}
    </Container>
  );
};
