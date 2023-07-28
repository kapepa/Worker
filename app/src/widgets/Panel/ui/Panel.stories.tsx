import type { Meta, StoryObj } from '@storybook/react';
import Panel from "./Panel";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Panel> = {
  component: Panel,
	decorators: [StoreDecorator({})],
};

export default meta;
type PanelStory = StoryObj<typeof Panel>;

export const PanelNormal: PanelStory = {
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PanelDark: PanelStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PanelDarkIsLogin: PanelStory = {
	decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({users: {data: {id: "1", username: "MyName"}}})],
};