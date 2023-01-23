import React from 'react';
import { IconBaseProps } from 'react-icons';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { SiteLogo } from '@components/images/Logo';
import { Container, ComponentThemingProps } from './styles';

export const SocialMediasBox: React.FC<ComponentThemingProps> = ({ themeColor }) => {
  const { COLORS } = useTheme();

  const getActualComponentTheme = (theme: ComponentThemingProps['themeColor']) =>
    theme === 'dark' ? COLORS.PRIMARY_WHITE_100 : COLORS.PRIMARY_BLACK_500;

  const iconsDefaultProps: IconBaseProps = {
    color: getActualComponentTheme(themeColor),
    size: 30,
    style: { margin: 'auto', display: 'block' },
  };

  const linkDefaultProps: React.AnchorHTMLAttributes<never> = {
    target: '_blank',
    rel: 'noreferrer',
  };

  return (
    <Container themeColor={themeColor}>
      <a href={'https://www.linkedin.com/in/nicolasmoraes-ti/'} {...linkDefaultProps}>
        <AiFillLinkedin {...iconsDefaultProps} />
      </a>
      <a href={'https://github.com/nicomoraes'} {...linkDefaultProps}>
        <AiFillGithub {...iconsDefaultProps} />
      </a>
      <a href={'https://nicolasmoraes.vercel.app/'} {...linkDefaultProps}>
        <SiteLogo style={{ width: 30, height: 30, margin: 'auto', display: 'block' }} />
      </a>
    </Container>
  );
};
