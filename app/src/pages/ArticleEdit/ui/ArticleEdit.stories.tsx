import type { Meta, StoryObj } from '@storybook/react';

import { ArticleEdit } from './ArticleEdit';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";
import ArticleJSON from "../../../shared/test/mock/article.json"
import {ArticleType} from "../../../entities/Article/model/types/articleType";

const meta: Meta<typeof ArticleEdit> = {
  component: ArticleEdit,
  decorators: [
    StoreDecorator({
      editorArticle: {
        loading: false,
        error: undefined,
        idArt: undefined,
        record: ArticleJSON.article as ArticleType,
        edit: ArticleJSON.article as ArticleType,
      }
    })
  ]
};

export default meta;
type Story = StoryObj<typeof ArticleEdit>;

export const ArticleEditDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleEditORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ArticleEditNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};