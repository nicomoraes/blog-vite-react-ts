import React from 'react';
import { Post as PostType } from '@interfaces/post';
import { CloudinaryImage } from '@components/images/CloudinaryImage';
import { Container, PublicationDate, Summary, Title, Tags } from './styles';
import { formatDate } from '@lib/format';

export const PostHead: React.FC<PostType> = ({
  title,
  description,
  coverLink,
  created_at,
  categories,
}) => {
  const formatedDate = formatDate(created_at);
  return (
    <Container>
      <Title>{title}</Title>
      <Summary>{description}</Summary>
      <PublicationDate>Publicado em {formatedDate}</PublicationDate>
      <CloudinaryImage link={coverLink ?? ''} size={'post'} />
      <Tags>
        {categories &&
          categories.map((cat) => {
            return <span key={cat.category.id}>#{cat.category.description}</span>;
          })}
      </Tags>
    </Container>
  );
};
