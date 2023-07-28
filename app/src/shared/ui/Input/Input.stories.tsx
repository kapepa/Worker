import type {Meta, StoryObj} from '@storybook/react';
import {BgInputEnum, ColorInputEnum, Input} from "./Input";
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type InputStory = StoryObj<typeof Input>;

export const WhiteBGInverted: InputStory = {
  args: {
    placeholder:"placeholder",
    label:"username",
    type:"text",
    name:"name",
    theme: BgInputEnum.WHITE_BG_INVERTED,
    color: ColorInputEnum.WHITE_COLOR_INVERTED
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const WhiteBG: InputStory = {
  args: {
    placeholder:"placeholder",
    label:"username",
    type:"text",
    name:"name",
    theme: BgInputEnum.WHITE_BG_INVERTED,
    color: ColorInputEnum.WHITE_COLOR_INVERTED
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};