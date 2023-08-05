import type { Meta, StoryObj } from '@storybook/react';
import Navbar from "./Navbar";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import RouterDecorator from '../../../shared/config/RouterDecorator/RouterDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type NavbarStory = StoryObj<typeof Navbar>;

export const NavbarNormal: NavbarStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL), ],
};

export const NavbarDark: NavbarStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};