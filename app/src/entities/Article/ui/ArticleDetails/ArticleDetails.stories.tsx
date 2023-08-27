import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import MockArticle from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../model/types/articleType";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleDetails> = {
  component: ArticleDetails,
  decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const ArticleDetailsNORMAL: Story = {
  args: {
    date: {...MockArticle.article, blocks: [MockArticle.code, MockArticle.image, MockArticle.text]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleDetailsDARK: Story = {
  args: {
    date: {...MockArticle.article, blocks: [MockArticle.code, MockArticle.image, MockArticle.text]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleDetailsORANGE: Story = {
  args: {
    date: {...MockArticle.article, blocks: [MockArticle.code, MockArticle.image, MockArticle.text]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};