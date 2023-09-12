import type {Meta, StoryObj} from '@storybook/react';
import {Article} from './Article';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import {ArticlesState} from "../../../entities/Article";
import {ArticleType} from "../../../entities/Article/model/types/articleType";
import ArticleMock from "../../../shared/test/mock/article.json";
import UserMock from "../../../shared/test/mock/user.json";
import {UsersTypes} from "../../../entities/Users";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {ArticlesView} from "../../../shared/const/ArticlesView";

const articles: ArticlesState = {
  ids: [ArticleMock.article.id],
  entities: {[ArticleMock.article.id as string]: {...ArticleMock.article, blocks: [ArticleMock.text, ArticleMock.code, ArticleMock.image]} as ArticleType},
  data: undefined,
  error: undefined,
  loading: false,
  view: ArticlesView.Block,
  hasMore: false,
}

const meta: Meta<typeof Article> = {
  component: Article,
  decorators: [
    RouterDecorator,
    StoreDecorator({
      users: {
        profile: UserMock as UsersTypes,
      },
      articles,
    })
  ]
};

export default meta;
type Story = StoryObj<typeof Article>;

export const ArticleNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const ArticleDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

export const ArticleORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};