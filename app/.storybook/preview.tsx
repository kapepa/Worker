import type { Preview } from "@storybook/react";
import "../src/app/styles/index.scss";
import I18nDecorator from "../src/shared/config/i18nDecorator/i18nDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [I18nDecorator],
};


export default preview;
