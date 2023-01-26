import React, { useEffect, useState } from 'react';
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
  const [post, setPost] = useState<IPost>({} as IPost);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await get(`/posts/get/${slug}`);
        setPost(resp);
        console.log(resp);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          setError(error);
          setLoading(false);
        }
      }
    })();
  }, [slug]);

  return (
    <Container>
      {loading ? (
        <PostPageSkeleton />
      ) : error ? (
        <PostPageError />
      ) : (
        <>
          <PostHead {...post} />
          <PostBody markdown={post.content} />
        </>
      )}
    </Container>
  );
};
export default Post;
