import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockCodeComponent } from './ArticleBlockCodeComponent';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import MockArticle from "../../../../shared/test/mock/article.json";
import {ArticleBlockCode, ArticleBlockText} from "../../model/types/articleBlock";

const meta: Meta<typeof ArticleBlockCodeComponent> = {
  component: ArticleBlockCodeComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleBlockCodeComponent>;

export let ArticleBlockCodeComponentNORMAL: Story;
ArticleBlockCodeComponentNORMAL = {
  args: {
    block: MockArticle.code as ArticleBlockCode,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleBlockCodeComponentDARK: Story = {
  args: {
    block: MockArticle.code as ArticleBlockCode,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleBlockCodeComponentORANGE: Story = {
  args: {
    block: MockArticle.code as ArticleBlockCode,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};