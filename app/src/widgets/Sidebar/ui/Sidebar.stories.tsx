import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from "./Sidebar";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  // decorators: [ButtonDecorator(ThemeButtonEnum.CLEAR)],
};

export default meta;
type SidebarStory = StoryObj<typeof Sidebar>;

export const SidebarNormal: SidebarStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const SidebarDark: SidebarStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};