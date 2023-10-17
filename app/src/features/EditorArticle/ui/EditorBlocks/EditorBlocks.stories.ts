import type { Meta, StoryObj } from '@storybook/react';

import { EditorBlocks } from './EditorBlocks';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {FormDecorator} from "../../../../shared/config/FormDecorator/FormDecorator";
import ArticleJSON from "../../../../shared/test/mock/article.json"

const meta: Meta<typeof EditorBlocks> = {
  component: EditorBlocks,
  decorators: [
    StoreDecorator({}),
    FormDecorator({
      defaultValues: {...ArticleJSON.article, blocks: [ArticleJSON.code, ArticleJSON.text, ArticleJSON.image]} as any
    })
  ],
};

export default meta;
type Story = StoryObj<typeof EditorBlocks>;

export const EditorBlocksDARK: Story = {
  args: {
    label: "Blocks",
    theme: BgEnum.BG_COLOR,
    onToggleBlocks: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const EditorBlocksORANGE: Story = {
  args: {
    label: "Blocks",
    theme: BgEnum.BG_COLOR,
    onToggleBlocks: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const EditorBlocksNORMAL: Story = {
  args: {
    label: "Blocks",
    theme: BgEnum.BG_COLOR,
    onToggleBlocks: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};