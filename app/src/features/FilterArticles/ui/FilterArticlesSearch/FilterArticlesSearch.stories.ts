import type { Meta, StoryObj } from '@storybook/react';

import { FilterArticlesSearch } from './FilterArticlesSearch';
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {StateSchema} from "../../../../app/providers/Store";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof FilterArticlesSearch> = {
  component: FilterArticlesSearch,
  decorators: [StoreDecorator({
    articles: {
      hasMore: true,
    },
    filterArticles: {
      search: "Title",
    }
  } as StateSchema)]
};

export default meta;
type Story = StoryObj<typeof FilterArticlesSearch>;

export const FilterArticlesSearchDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const FilterArticlesSearchNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FilterArticlesSearchORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};