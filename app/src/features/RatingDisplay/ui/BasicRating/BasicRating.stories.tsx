import type { Meta, StoryObj } from '@storybook/react';

import { BasicRating } from './BasicRating';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BasicRating> = {
  component: BasicRating,
};

export default meta;
type Story = StoryObj<typeof BasicRating>;

const childrenInner: string = "Rating";
const errorText: string = "Some error";

export const BasicRatingNORMAL: Story = {
  args: {
    children: childrenInner,
    loading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const BasicRatingDARK: Story = {
  args: {
    children: childrenInner,
    loading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const BasicRatingORANGE: Story = {
  args: {
    children: childrenInner,
    loading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const BasicRatingLoadingNORMAL: Story = {
  args: {
    children: childrenInner,
    loading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const BasicRatingLoadingDARK: Story = {
  args: {
    children: childrenInner,
    loading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const BasicRatingLoadingORANGE: Story = {
  args: {
    children: childrenInner,
    loading: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const BasicRatingErrorNORMAL: Story = {
  args: {
    children: childrenInner,
    loading: false,
    error: errorText
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const BasicRatingErrorDARK: Story = {
  args: {
    children: childrenInner,
    loading: false,
    error: errorText
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const BasicRatingErrorORANGE: Story = {
  args: {
    children: childrenInner,
    loading: false,
    error: errorText
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};