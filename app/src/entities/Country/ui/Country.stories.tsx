import type {Meta, StoryObj} from '@storybook/react';
import {Country} from "./Country";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {Countries} from "../../../shared/const/Countries";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import I18nDecorator from "../../../shared/config/i18nDecorator/i18nDecorator";

const meta: Meta<typeof Country> = {
  component: Country,
  decorators: [I18nDecorator]
};

export default meta;
type CountryStory = StoryObj<typeof Country>;

export const WhiteBGInverted: CountryStory = {
  args: {
    selected: val => {},
    defaultVal: Countries.USA,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const WhiteBG: CountryStory = {
  args: {
    selected: val => {},
    defaultVal: Countries.USA,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};