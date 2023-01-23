import { HTMLAttributes } from 'react';
import dark_logo from '@assets/svg/dark_logo.svg';
import light_logo from '@assets/svg/light_logo.svg';
import site_theme_logo from '@assets/svg/site_theme_logo.svg';
import { StyledImage, StyledImagesProps } from './styles';

interface ILogoProps extends StyledImagesProps, HTMLAttributes<HTMLImageElement> {
  theme?: 'dark' | 'light';
}

export const ThemedLogo = ({ theme = 'dark', ...rest }: ILogoProps) => {
  return (
    <StyledImage
      src={theme === 'dark' ? dark_logo : light_logo}
      alt={'Logo do site atual'}
      {...rest}
    />
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SiteLogo = ({ theme = undefined, ...rest }: ILogoProps) => {
  return <StyledImage src={site_theme_logo} alt={'Logo do site pessoal'} {...rest} />;
};
