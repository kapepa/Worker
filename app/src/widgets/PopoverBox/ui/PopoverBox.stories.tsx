import type { Meta, StoryObj } from '@storybook/react';

import { PopoverBox } from './PopoverBox';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {ReactNode} from "react";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof PopoverBox> = {
  component: PopoverBox,
};

export default meta;
type Story = StoryObj<typeof PopoverBox>;

export const PopoverBoxDARK: Story = {
  args: {
    innerBtn: <p>Any html element</p>,
    children: <div>Some children</div>,
    onOpen:() => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PopoverBoxORANGE: Story = {
  args: {
    innerBtn: <p>Any html element</p>,
    children: <div>Some children</div>,
    onOpen:() => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const PopoverBoxNORMAL: Story = {
  args: {
    innerBtn: <p>Any html element</p>,
    children: <div>Some children</div>,
    onOpen:() => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};