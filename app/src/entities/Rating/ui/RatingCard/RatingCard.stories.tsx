import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";

const meta: Meta<typeof RatingCard> = {
  component: RatingCard,
  decorators: [I18nDecorator],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const RatingCardDARK: Story = {
  args: {
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const RatingCardORANGE: Story = {
  args: {
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const RatingCardNORMAL: Story = {
  args: {
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const RatingCardFill: Story = {
  args: {
    callback: () => {},
    isFill: 4
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};