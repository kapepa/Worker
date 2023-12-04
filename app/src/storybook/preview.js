import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview = {
  parameters: {},
  loaders: [mswLoader],
}

export default preview