import type { Meta, StoryObj } from '@storybook/react';
import Button, {SizeButton, ThemeButtonEnum} from "./Button";
import ThemeDecorator from '../../config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
// import ButtonDecorator from '../../config/ButtonDecorator/ButtonDecorator';

const meta: Meta<typeof Button> = {
  component: Button,
  // decorators: [ButtonDecorator(ThemeButtonEnum.CLEAR)],
};

export default meta;
type ButtonStory = StoryObj<typeof Button>;

export const Primary: ButtonStory = {
  args: {
    children: "PRIMARY",
  }
};

export const Clear_Normal: ButtonStory = {
  args: {
    children: "CLEAR",
    theme: ThemeButtonEnum.CLEAR,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Outline_Normal: ButtonStory = {
  args: {
    children: "OUTLINE",
    theme: ThemeButtonEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Background_Normal: ButtonStory = {
  args: {
    children: "BACKGROUND",
    theme: ThemeButtonEnum.BACKGROUND,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const BackgroundInverted_Normal: ButtonStory = {
  args: {
    children: "BACKGROUND_INVERTED",
    theme: ThemeButtonEnum.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Clear_Dark: ButtonStory = {
  args: {
    children: "CLEAR DARK",
    theme: ThemeButtonEnum.CLEAR,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Outline_Dark: ButtonStory = {
  args: {
    children: "OUTLINE DARK",
    theme: ThemeButtonEnum.OUTLINE,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const Size_Medium: ButtonStory = {
  args: {
    children: "Size Medium",
    size: SizeButton.M,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Size_Large: ButtonStory = {
  args: {
    children: "Size Large",
    size: SizeButton.L,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Size_Extra_Large: ButtonStory = {
  args: {
    children: "Size Extra Large",
    size: SizeButton.XL,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};