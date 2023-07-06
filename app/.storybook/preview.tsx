import type { Decorator, Preview } from "@storybook/react";
import "../src/app/styles/index.scss";
// import 'loki/configure-react';
// import ThemeDecorator from "../src/shared/config/ThemeDecorator/ThemeDecorator"
// import { ThemeEnum } from "../src/app/contexts/Theme/lib/ThemeContext";

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
  // decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export default preview;
