import type { Meta, StoryObj } from '@storybook/react';
import Home from "./Home";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import RouterDecorator from '../../../shared/config/RouterDecorator/RouterDecorator';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Home> = {
  component: Home,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type HomeStory = StoryObj<typeof Home>;

export const HomeNormal: HomeStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const HomeDark: HomeStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};