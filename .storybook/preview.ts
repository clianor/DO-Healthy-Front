import type { Preview } from '@storybook/react';

import '../pages/styles/globals.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['shared', 'entities', 'features', 'widgets', 'pages'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
