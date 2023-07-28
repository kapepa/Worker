import type { Meta, StoryObj } from '@storybook/react';
import About from "./About";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import RouterDecorator from '../../../shared/config/RouterDecorator/RouterDecorator';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof About> = {
  component: About,
  decorators: [RouterDecorator, StoreDecorator({})],
};

export default meta;
type AboutStory = StoryObj<typeof About>;

export const AboutNormal: AboutStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const AboutDark: AboutStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};