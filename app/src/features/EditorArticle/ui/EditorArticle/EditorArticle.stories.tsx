import type { Meta, StoryObj } from '@storybook/react';

import { EditorArticle } from './EditorArticle';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof EditorArticle> = {
  component: EditorArticle,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditorArticle>;

export const EditorArticleDARK: Story = {
  args: {
    isEdit: false,
    record: {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const EditorArticleNORMAL: Story = {
  args: {
    isEdit: false,
    record: {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const EditorArticleORANGE: Story = {
  args: {
    isEdit: false,
    record: {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};