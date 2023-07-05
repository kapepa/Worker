import type { Meta, StoryObj } from '@storybook/react';
import ErrorPage from "./ErrorPage";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
};

export default meta;
type ErrorPageStory = StoryObj<typeof ErrorPage>;

export const ErrorPageNormal: ErrorPageStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ErrorPageDark: ErrorPageStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};