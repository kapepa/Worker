import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from "./Sidebar";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import RouterDecorator from '../../../shared/config/RouterDecorator/RouterDecorator';
import "../../../shared/assets/icons/main-20-20.svg";
import "../../../shared/assets/icons/about-20-20.svg";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type SidebarStory = StoryObj<typeof Sidebar>;

export const SidebarNormal: SidebarStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const SidebarDark: SidebarStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SidebarORANGE: SidebarStory = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};