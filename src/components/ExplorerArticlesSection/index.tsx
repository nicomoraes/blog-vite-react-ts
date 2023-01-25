import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

import loading from '@assets/lottie-json/loading.json';
import { IPost, IExplorerPostPagination } from '@interfaces/post';
import { get } from '@lib/get';
import { EmptyBox } from '@components/EmptyBox';
import { PostArticle } from '@components/banners/PostArticle';
import { ArticleLoading } from '@components/loading/ArticleLoading';
import { NoResultErrorBox } from '@components/error/NoResultErrorBox';
import { Container, LoadingMoreButton, LoadingMoreContainer } from './styles';

export const ExplorerArticlesSection = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const title = searchParams.get('title');

  const { data, error, status, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
    IExplorerPostPagination,
    Error
  >({
    queryKey: ['posts', category, title],
    queryFn: async ({ pageParam = 0 }) => get('/posts', { category, title, page: pageParam }),
    getNextPageParam: (lastGroup) => (lastGroup.nextPage ? lastGroup.nextPage : null),
  });

  const posts = useMemo(() => {
    return data?.pages.reduce<IPost[]>((acc, { posts }) => {
      return [...acc, ...posts];
    }, []);
  }, [data]);

  return (
    <Container>
      {status === 'loading' && <ArticleLoading />}
      {status === 'error' && (
        <NoResultErrorBox info={'Um erro ocorreu na busca por postagens'} message={error.message} />
      )}
      {status === 'success' && posts && posts?.length > 0 ? (
        <>
          {posts.map((post, index) => {
            return <PostArticle key={index} {...post} />;
          })}
          <LoadingMoreContainer>
            {hasNextPage && (
              <LoadingMoreButton onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? (
                  <Player src={loading} autoplay loop={true} className={'animation'} />
                ) : (
                  'Carregar mais'
                )}
              </LoadingMoreButton>
            )}
          </LoadingMoreContainer>
        </>
      ) : (
        <EmptyBox />
      )}
    </Container>
  );
};
