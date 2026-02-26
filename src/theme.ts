import { createTheme, CSSVariablesResolver } from '@mantine/core';
import { brandColors } from './brandColors';

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: { light: 6, dark: 4 },
  defaultRadius: 'md',

  colors: {
    purple: brandColors.purple,
    blue: brandColors.blue,
    yellow: brandColors.yellow,
    pink: brandColors.pink,
  },

  fontFamily: 'Inter, system-ui, sans-serif',

  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '2.5rem', lineHeight: '1.1' },
      h2: { fontSize: '2rem', lineHeight: '1.15' },
    },
  },

  defaultGradient: {
    from: brandColors.blue[6],
    to: brandColors.purple[5],
    deg: 135,
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        variant: 'filled',
        color: 'blue',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
  },
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mojo-subtle-bg': brandColors.blue[0],
    '--mojo-highlight': brandColors.yellow[4],
    '--mojo-accent': brandColors.blue[4],
  },
  dark: {
    '--mojo-subtle-bg': '#050509',
    '--mojo-highlight': brandColors.yellow[5],
    '--mojo-accent': brandColors.blue[5],
  },
});
