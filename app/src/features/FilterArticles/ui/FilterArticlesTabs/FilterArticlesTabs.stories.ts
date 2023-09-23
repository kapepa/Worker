import type { Meta, StoryObj } from '@storybook/react';

import { FilterArticlesTabs } from './FilterArticlesTabs';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {StateSchema} from "../../../../app/providers/Store";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";

const meta: Meta<typeof FilterArticlesTabs> = {
  component: FilterArticlesTabs,
  decorators: [
    StoreDecorator(
      {
        filterArticles: {
          tab: ArticleTypesAdditionName.ALL,
        }
      } as StateSchema
    )
  ]
};

export default meta;
type Story = StoryObj<typeof FilterArticlesTabs>;

export const FilterArticlesTabsDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const FilterArticlesTabsNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FilterArticlesTabsORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};