import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlockTextComponent } from './ArticleBlockTextComponent';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import MockArticle from "../../../../shared/test/mock/article.json";
import {ArticleBlockText} from "../../model/types/articleBlock";

const meta: Meta<typeof ArticleBlockTextComponent> = {
  component: ArticleBlockTextComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleBlockTextComponent>;

export let ArticleBlockTextComponentNORMAL: Story;
ArticleBlockTextComponentNORMAL = {
  args: {
    block: MockArticle.text as ArticleBlockText,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleBlockTextComponentDARK: Story = {
  args: {
    block: MockArticle.text as ArticleBlockText,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleBlockTextComponentORANGE: Story = {
  args: {
    block: MockArticle.text as ArticleBlockText,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};