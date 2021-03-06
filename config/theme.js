import { darken } from 'polished';

const brand = {
  primary: '#666666',
  secondary: '#252525',
};

const colors = {
  grey: '#252525',
  black: '#000',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`,
};

export const overlay = ['#252525'];

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '120rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export default theme;
