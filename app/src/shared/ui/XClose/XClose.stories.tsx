import type { Meta, StoryObj } from '@storybook/react';
import XClose from "./XClose";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof XClose> = {
  component: XClose,
};

export default meta;
type XCloseMode = StoryObj<typeof XClose>;

export const LoaderNormal: XCloseMode = {
  args: {
    color: "BG_COLOR_INVERTED",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const LoaderDark: XCloseMode = {
  args: {
    color: "BG_COLOR_INVERTED",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};