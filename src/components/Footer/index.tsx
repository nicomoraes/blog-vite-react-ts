import React from 'react';
import { SocialMediasBox } from '@components/SocialMediasBox';
import { Container, Signature, AuthorName } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <SocialMediasBox themeColor={'light'} />
      <Signature>
        Desenvolvido por <AuthorName> Nicolas Moraes</AuthorName>
      </Signature>
    </Container>
  );
};

export default Footer;
