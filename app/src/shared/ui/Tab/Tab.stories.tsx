import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from './Tab';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Tab> = {
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const TabNORMAL: Story = {
  args: {
    children: "Tab"
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const TabDARK: Story = {
  args: {
    children: "Tab"
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const TabORANGE: Story = {
  args: {
    children: "Tab"
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};