import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesRecommended } from './ArticlesRecommended';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import Article from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../model/types/articleType";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticlesRecommended> = {
  component: ArticlesRecommended,
  decorators: [RouterDecorator, StoreDecorator({
    recommendedArticle: {
      ids: [Article.article.id],
      entities: {[Article.article.id as string]: Article.article as ArticleType}
    }
  })]
};

export default meta;
type Story = StoryObj<typeof ArticlesRecommended>;

export const ArticlesRecommendedNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticlesRecommendedDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticlesRecommendedORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};