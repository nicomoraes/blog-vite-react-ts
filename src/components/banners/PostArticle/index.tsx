import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '@interfaces/post';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { CloudinaryImage } from '@components/images/CloudinaryImage';
import { Container, LinkButtonBox, PostInformation, Summary, Title } from './styles';

type Props = IPost;

export const PostArticle: React.FC<Props> = ({ title, description, coverLink, slug }) => {
  return (
    <Container>
      <CloudinaryImage link={coverLink} size={'article'} />
      <PostInformation>
        <Title>{title}</Title>
        <Summary>{description}</Summary>
        <LinkButtonBox>
          <Link to={`/posts/${slug}`}>
            <PrimaryButton text={'Acessar'} />
          </Link>
        </LinkButtonBox>
      </PostInformation>
    </Container>
  );
};
