import type { Meta, StoryObj } from '@storybook/react';

import { EditorImage } from './EditorImage';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {FormDecorator} from "../../../../shared/config/FormDecorator/FormDecorator";
import ArticleJSON from "../../../../shared/test/mock/article.json";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof EditorImage> = {
  component: EditorImage,
  decorators: [
    StoreDecorator({}),
    FormDecorator({
      defaultValues: {...ArticleJSON.article, blocks: [ArticleJSON.code, ArticleJSON.text, ArticleJSON.image]} as any
    })
  ],
};

export default meta;
type Story = StoryObj<typeof EditorImage>;

export const EditorImageDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const EditorImageNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const EditorImageORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};