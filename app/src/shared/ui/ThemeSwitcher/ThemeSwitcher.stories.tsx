import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  // decorators: [ButtonDecorator(ThemeButtonEnum.CLEAR)],
};

export default meta;
type ThemeSwitcherStory = StoryObj<typeof ThemeSwitcher>;

export const ThemeSwitcherNormal: ThemeSwitcherStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ThemeSwitcherDark: ThemeSwitcherStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};