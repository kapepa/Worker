import type { Meta, StoryObj } from '@storybook/react';
import LangSwitcher from "./LangSwitcher";
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
// import I18nDecorator from '../../../shared/config/i18nDecorator/i18nDecorator';

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
  // decorators: [I18nDecorator],
};

export default meta;
type LangSwitcherStory = StoryObj<typeof LangSwitcher>;

export const IsFull_NORMAL: LangSwitcherStory = {
    args: {
      isShort: false
    },
    decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
  };

export const IsFull_DARK: LangSwitcherStory = {
  args: {
    isShort: false
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

export const IsShort_NORMAL: LangSwitcherStory = {
    args: {
      isShort: true
    },
    decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
  };

export const IsShort_DARK: LangSwitcherStory = {
  args: {
    isShort: true
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

