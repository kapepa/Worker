import type {Meta, StoryObj} from '@storybook/react';
import {Input} from "./Input";
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {BgEnum} from "../../const/BgEnum";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type InputStory = StoryObj<typeof Input>;

export const WhiteBGInverted: InputStory = {
  args: {
    placeholder:"placeholder",
    type:"text",
    name:"name",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const WhiteBG: InputStory = {
  args: {
    placeholder:"placeholder",
    type:"text",
    name:"name",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const WhiteORANGE: InputStory = {
  args: {
    placeholder:"placeholder",
    type:"text",
    name:"name",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};