import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import MockArticle from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../model/types/articleType";

const meta: Meta<typeof ArticleDetails> = {
  component: ArticleDetails,
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