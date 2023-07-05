import type { Meta, StoryObj } from '@storybook/react';
import PageLoader from "./PageLoader";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof PageLoader> = {
  component: PageLoader,
  // decorators: [ButtonDecorator(ThemeButtonEnum.CLEAR)],
};

export default meta;
type PageLoaderStory = StoryObj<typeof PageLoader>;

export const PageLoaderNormal: PageLoaderStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PageLoaderDark: PageLoaderStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};