import { Category } from './category';

export interface Post {
  id: string;
  title: string;
  content?: string;
  description: string;
  coverLink: string;
  created_at: string;
  slug: string;
  updated_at: string;
  categories: Categories[];
}

type Categories = {
  category: Category;
};
