import type { Meta, StoryObj } from '@storybook/react';

import { RatingStars } from './RatingStars';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RatingStars> = {
  component: RatingStars,
};

export default meta;
type Story = StoryObj<typeof RatingStars>;

export const RatingDARK: Story = {
  args: {
    countStars: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const RatingORANGE: Story = {
  args: {
    countStars: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const RatingNORMAL: Story = {
  args: {
    countStars: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const RatingFill: Story = {
  args: {
    countStars: () => {},
    isFill: 4
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};