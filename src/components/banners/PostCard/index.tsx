import React from 'react';
import { Link } from 'react-router-dom';

import { IPost } from '@interfaces/post';
import { CloudinaryImage } from '@components/images/CloudinaryImage';
import { AccessButton, Container, Content, Summary, TagsBox, Title } from './styles';

export const PostCard: React.FC<IPost> = ({ title, description, coverLink, slug, categories }) => {
  return (
    <Container>
      <CloudinaryImage link={coverLink ?? ''} size={'card'} />
      <Content>
        <TagsBox>
          {categories &&
            categories.map((cat) => {
              return <span key={cat.category.id}>#{cat.category.description}</span>;
            })}
        </TagsBox>
        <Title>{title}</Title>
        <Summary>{description}</Summary>
        <Link to={`/posts/${slug}`}>
          <AccessButton text={'Acessar'} />
        </Link>
      </Content>
    </Container>
  );
};
