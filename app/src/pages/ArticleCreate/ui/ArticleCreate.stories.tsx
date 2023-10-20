import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCreate } from './ArticleCreate';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleCreate> = {
  component: ArticleCreate,
  decorators: [
    StoreDecorator({})
  ]
};

export default meta;
type Story = StoryObj<typeof ArticleCreate>;

export const ArticleCreateDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleCreateORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ArticleCreateNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};