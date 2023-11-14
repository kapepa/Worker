import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const DrawerNORMAL: Story = {
  args: {
    innerBtn: <div>Open</div>,
    children: <div>Children</div>,
    direction: "column",
    onOpen: () => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const DrawerDARK: Story = {
  args: {
    innerBtn: <div>Open</div>,
    children: <div>Children</div>,
    direction: "column",
    onOpen: () => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

export const DrawerORANGE: Story = {
  args: {
    innerBtn: <div>Open</div>,
    children: <div>Children</div>,
    direction: "column",
    onOpen: () => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};