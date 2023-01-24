import React from 'react';

import { Container } from '@components/layout/Container';
import { SearchInput } from '@components/inputs/SearchInput';
import { ExplorerFilterBar } from '@components/ExplorerFilterBar';

import { Content, HeadingBox, HeadingSpan, Heading } from './styles';
import { ExplorerArticlesSection } from '@components/ExplorerArticlesSection';

const Explorer: React.FC = () => {
  return (
    <Container>
      <Content>
        <HeadingBox>
          <Heading>Explorar</Heading>
          <HeadingSpan>ou</HeadingSpan>
          <SearchInput />
        </HeadingBox>
        <ExplorerFilterBar />
        <ExplorerArticlesSection />
      </Content>
    </Container>
  );
};

export default Explorer;
