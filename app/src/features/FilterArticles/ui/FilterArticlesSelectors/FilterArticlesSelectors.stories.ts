import type { Meta, StoryObj } from '@storybook/react';

import { FilterArticlesSelectors } from './FilterArticlesSelectors';
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {StateSchema} from "../../../../app/providers/Store";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";

const meta: Meta<typeof FilterArticlesSelectors> = {
  component: FilterArticlesSelectors,
  decorators: [StoreDecorator(
    {
      filterArticles: {
        order: ArticleOrderSort.DESC,
        sort: ArticleOrderField.CREATED,
      }
    } as StateSchema)]
};

export default meta;
type Story = StoryObj<typeof FilterArticlesSelectors>;

export const FilterArticlesSelectorsDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const FilterArticlesSelectorsNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FilterArticlesSelectorsORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};