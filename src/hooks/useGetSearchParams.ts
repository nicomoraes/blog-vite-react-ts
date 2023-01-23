import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type ReturnProps = () => object;

export const useGetSearchParams = (): ReturnProps => {
  const [searchParams] = useSearchParams();

  const getSearchParams = useCallback(() => {
    const titleOrCategoryExists = searchParams.has('title') || searchParams.has('category');
    let paramsObject = {};

    if (titleOrCategoryExists) {
      for (const [key, value] of searchParams.entries()) {
        paramsObject = {
          ...paramsObject,
          [key]: value,
        };
      }
    }
    return paramsObject;
  }, [searchParams]);

  return getSearchParams() as ReturnProps;
};
