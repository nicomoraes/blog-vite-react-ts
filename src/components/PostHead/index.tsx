import React, { useEffect } from 'react';
import { Post as PostType } from '@interfaces/post';
import { CloudinaryImage } from '@components/images/CloudinaryImage';
import { Container, PublicationDate, Summary, Title, Tags } from './styles';

export const PostHead: React.FC<PostType> = ({
  title,
  description,
  coverLink,
  created_at,
  categories,
}) => {
  useEffect(() => {
    console.log(coverLink);
  });
  return (
    <Container>
      <Title>{title}</Title>
      <Summary>{description}</Summary>
      <PublicationDate>Publicado em {created_at}</PublicationDate>
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
