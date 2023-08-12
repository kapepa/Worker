import type {Meta, StoryObj} from '@storybook/react';
import {Select} from "./Select";
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {BgInputEnum} from "../../const/BgInput";
import {ColorInputEnum} from "../../const/ColorInputEnum";
import {Countries} from "../../const/Countries";


const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type SelectStory = StoryObj<typeof Select>;

export const WhiteBGInverted: SelectStory = {
  args: {
    label: "Country",
    name: "country",
    selectList: [{value: Countries.USA, text: Countries.USA}, {value: Countries.BLR, text: Countries.BLR }],
    defaultValue: Countries.USA,
    selected: (str) => {},
    toTranslation: (str) => str ?? "",
    theme: BgInputEnum.WHITE_BG_INVERTED,
    color: ColorInputEnum.WHITE_COLOR_INVERTED
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const WhiteBG: SelectStory = {
  args: {
    label: "Country",
    name: "country",
    selectList: [{value: Countries.USA, text: Countries.USA}, {value: Countries.BLR, text: Countries.BLR }],
    defaultValue: Countries.USA,
    selected: (str) => {},
    toTranslation: (str) => str ?? "",
    theme: BgInputEnum.WHITE_BG_INVERTED,
    color: ColorInputEnum.WHITE_COLOR_INVERTED
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};