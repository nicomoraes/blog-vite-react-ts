import React from 'react';
import { Link } from 'react-router-dom';
import { ThemedLogo } from '@components/images/Logo';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { HeaderNavButton } from '@components/buttons/HeaderNavButton';
import { Container, Content, NavigationMenu } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to={'/'}>
          <ThemedLogo />
        </Link>
        <NavigationMenu>
          <HeaderNavButton text={'Início'} to={'/'} />
          <HeaderNavButton text={'Explorar'} to={'/explorer'} />
        </NavigationMenu>
        <a href={'https://nicolasmoraes.vercel.app/contato'} target={'_blank'} rel='noreferrer'>
          <PrimaryButton secondary text={'Contate-me'} />
        </a>
      </Content>
    </Container>
  );
};

export default Header;
