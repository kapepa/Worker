import type { Meta, StoryObj } from '@storybook/react';
import Loader from "./Loader";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof Loader> = {
  component: Loader,
  // decorators: [ButtonDecorator(ThemeButtonEnum.CLEAR)],
};

export default meta;
type LoaderStory = StoryObj<typeof Loader>;

export const LoaderNormal: LoaderStory = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const LoaderDark: LoaderStory = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};