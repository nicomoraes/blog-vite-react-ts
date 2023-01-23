import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      BACKGROUND: string;

      PRIMARY_GREY_200: string;
      PRIMARY_GREY_300: string;
      PRIMARY_GREY_400: string;
      PRIMARY_GREY_500: string;

      PRIMARY_BLACK_500: string;

      PRIMARY_WHITE_200: string;
      PRIMARY_WHITE_100: string;
    };

    FONT_SIZE: {
      HEADING_XL: string;
      HEADING: string;
      HEADING_2: string;
      HEADING_3: string;
      BODY: string;
      CAPTION: string;
    };

    SCREEN_SIZES: {
      DESKTOP: string;
      TABLET: string;
      MOBILE: string;
    };
  }
}
