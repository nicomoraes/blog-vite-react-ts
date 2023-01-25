import { ICategory } from './category';

export interface IPost {
  id: string;
  title: string;
  content?: string;
  description: string;
  coverLink: string;
  created_at: string;
  slug: string;
  updated_at: string;
  categories: TCategories[];
}

type TCategories = {
  category: ICategory;
};

export interface IExplorerPostPagination {
  posts: IPost[];
  nextPage: number;
}
