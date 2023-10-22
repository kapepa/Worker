import type { Meta, StoryObj } from '@storybook/react';

import { ArticleHeader } from './ArticleHeader';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import Users from "../../../../shared/test/mock/user.json";
import Article from "../../../../shared/test/mock/article.json";
import {UsersTypes} from "../../../Users";
import {ArticleType} from "../../model/types/articleType";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ArticleHeader> = {
  component: ArticleHeader,
  decorators: [RouterDecorator, StoreDecorator(
    {
      users: {
        profile: Users as UsersTypes,
      },
      details: {
        data: {...Article.article, users: Users} as ArticleType,
      }
    }
  )]
};

export default meta;
type Story = StoryObj<typeof ArticleHeader>;

export const ArticleHeaderNORMAL: Story = {
  args: {
    toBack: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleHeaderORANGE: Story = {
  args: {
    toBack: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ArticleHeaderDARK: Story = {
  args: {
    toBack: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};