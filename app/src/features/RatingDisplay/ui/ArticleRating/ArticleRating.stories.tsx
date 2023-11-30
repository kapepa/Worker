import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRating } from './ArticleRating';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


const RtkApiDecorator = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getArticles: builder.query<any, any>({
      queryFn: () => ({data: undefined, isLoading: false, isError: false})
    })
  }),
});
const meta: Meta<typeof ArticleRating> = {
  component: ArticleRating,
  decorators: [I18nDecorator, StoreDecorator({  })]
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const ArticleRatingNORMAL: Story = {
  args: {
    id: undefined,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleRatingORANGE: Story = {
  args: {
    id: undefined,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ArticleRatingDARK: Story = {
  args: {
    id: undefined,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};