import { create } from '@storybook/theming/create';
import { addons } from '@storybook/manager-api';

const theme = create({
  base: 'light',
  brandTitle: 'Prima Materia UI',
  brandImage: '/prima-materia-3-logo.png',
  brandTarget: '_self',
});

addons.setConfig({
  theme,
});
