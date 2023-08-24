import type { Meta, StoryObj } from '@storybook/react';
import { ArticleBlocImageComponent } from './ArticleBlocImageComponent';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import MockArticle from "../../../../shared/test/mock/article.json";
import {ArticleBlocImage} from "../../model/types/articleBlock";

const meta: Meta<typeof ArticleBlocImageComponent> = {
  component: ArticleBlocImageComponent,
};

export default meta;
type Story = StoryObj<typeof ArticleBlocImageComponent>;

export let ArticleBlocImageComponentNORMAL: Story;
ArticleBlocImageComponentNORMAL = {
  args: {
    block: MockArticle.image as ArticleBlocImage,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleBlocImageComponentDARK: Story = {
  args: {
    block: MockArticle.image as ArticleBlocImage,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleBlocImageComponentORANGE: Story = {
  args: {
    block: MockArticle.image as ArticleBlocImage,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};