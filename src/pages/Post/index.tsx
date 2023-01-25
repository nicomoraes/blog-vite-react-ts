import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { get } from '@lib/get';
import { IPost } from '@interfaces/post';
import { PostHead } from '@components/PostHead';
import { PostBody } from '@components/PostBody';
import { Container } from '@components/layout/Container';
import { PostPageError } from '@components/error/PostPageError';
import { PostPageSkeleton } from '@components/loading/PostPageSkeleton';

const Post: React.FC = () => {
  const { slug } = useParams();

  const {
    data: post,
    isError,
    isLoading,
  } = useQuery<IPost, Error>('posts', () => get(`/posts/get/${slug}`));

  return (
    <Container>
      {isLoading ? (
        <PostPageSkeleton />
      ) : isError ? (
        <PostPageError />
      ) : (
        <>
          <PostHead {...(post as IPost)} />
          <PostBody markdown={post?.content} />
        </>
      )}
    </Container>
  );
};
export default Post;
