import api from '@service/api';

export const get = async (path: string, queryParams: object = {}) => {
  const response = await api.get(path, {
    params: { ...queryParams },
  });

  if (response.status >= 400) {
    throw new Error(response.statusText);
  }

  return response.data;
};
