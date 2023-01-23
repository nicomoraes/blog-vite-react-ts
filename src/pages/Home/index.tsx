import React from 'react';

import {
  LandingSection,
  CardsSection,
  ReceptionText,
  SubReceptionText,
  CardSectionText,
  HeadingBox,
  Separator,
} from './styles';

import { Container } from '@components/layout/Container';
import { PostSlide } from '@components/banners/PostSlide';
import { SeeMoreButton } from '@components/buttons/SeeMoreButton';
import { HomePostCardsGrid } from '@components/HomePostCardsGrid';
import { HomeStackComponents } from '@components/HomeStackComponents';

const Home: React.FC = () => {
  return (
    <Container>
      <LandingSection>
        <HeadingBox>
          <ReceptionText>Blog do Nico</ReceptionText>
          <SubReceptionText>Dicas e tendências para aplicações web modernas</SubReceptionText>
          <HomeStackComponents />
        </HeadingBox>

        <PostSlide />
      </LandingSection>

      <Separator />

      <CardsSection>
        <CardSectionText>Postagens recentes</CardSectionText>
        <HomePostCardsGrid />
        <SeeMoreButton text={'Ver Todos'} />
      </CardsSection>
    </Container>
  );
};
export default Home;
