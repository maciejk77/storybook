import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import themeDefault from '../stories/particles/themeDefault';
import GlobalStyles from '../stories/particles/globalStyles';

configure(require.context('../stories', true, /\.stories\.js$/), module);

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
