import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesItem } from './ArticlesItem';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

import Article from "../../../../shared/test/mock/article.json"
import {ArticleType} from "../../model/types/articleType";

const meta: Meta<typeof ArticlesItem> = {
  component: ArticlesItem,
  decorators: [I18nDecorator, RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof ArticlesItem>;

export const ArticlesItemBlockNORMAL: Story = {
  args: {
    view: ArticlesView.Block,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticlesItemBlockDARK: Story = {
  args: {
    view: ArticlesView.Block,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticlesItemBlockORANGE: Story = {
  args: {
    view: ArticlesView.Block,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ArticlesItemSquareNORMAL: Story = {
  args: {
    view: ArticlesView.Square,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticlesItemSquareDARK: Story = {
  args: {
    view: ArticlesView.Square,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticlesItemSquareORANGE: Story = {
  args: {
    view: ArticlesView.Square,
    article: Object.assign(Article.article, { blocks: [ Article.text, Article.code, Article.image ] }) as ArticleType
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};