import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { get } from '@lib/get';
import { Post } from '@interfaces/post';
import { NoResultErrorBox } from '@components/error/NoResultErrorBox';
import { EmptyBox } from '@components/EmptyBox';
import { PostArticle } from '@components/banners/PostArticle';
import { ArticleLoading } from '@components/loading/ArticleLoading';
import { useGetSearchParams } from '@hooks/useGetSearchParams';
import { Container } from './styles';

export const ExplorerArticlesSection = () => {
  const [searchParams] = useSearchParams();

  const query = useGetSearchParams();
  const category = searchParams.get('category');
  const title = searchParams.get('title');

  const {
    data: posts,
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery<Post[], Error>('posts', () => get('/posts', { ...query }));

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, title]);

  return (
    <Container>
      {isLoading ? (
        <ArticleLoading />
      ) : isError ? (
        <NoResultErrorBox info={'Um erro ocorreu na busca por postagens'} message={error.message} />
      ) : posts && posts?.length > 0 ? (
        posts.map((post, index) => {
          return <PostArticle key={index} {...post} />;
        })
      ) : (
        <EmptyBox />
      )}
    </Container>
  );
};
