import type { Meta, StoryObj } from '@storybook/react';
import Error from "./Error";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import RouterDecorator from '../../../shared/config/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Error> = {
  component: Error,
  decorators: [RouterDecorator],
};

export default meta;
type ErrorStory = StoryObj<typeof Error>;

export const ErrorNormal: ErrorStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ErrorDark: ErrorStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};