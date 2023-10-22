import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const TextareaNORMAL: Story = {
  args: {
    defaultValue: "Mock text"
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const TextareaORANGE: Story = {
  args: {
    defaultValue: "Mock text"
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const TextareaDARK: Story = {
  args: {
    defaultValue: "Mock text"
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};