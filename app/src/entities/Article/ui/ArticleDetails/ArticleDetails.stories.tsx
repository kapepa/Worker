import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import {ArticleType} from "../../model/types/articleType";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import ArticleMock from "../../../../shared/test/mock/article.json";
import UsersMock from "../../../../shared/test/mock/user.json";
import {CommentsState} from "../../../Comments";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";
import {UsersTypes} from "../../../Users";

const meta: Meta<typeof ArticleDetails> = {
  component: ArticleDetails,
  decorators: [
    StoreDecorator({
      users: {
        profile: {id: "profileID"} as UsersTypes,
      },
      formComment: {
        text: undefined,
        error: undefined,
        loading: false
      },
      details: {
        loading: false,
        error: undefined,
        data: ArticleMock.article as ArticleType,
      },
      comments: {
        data: [{...CommentsMock, users: UsersMock }],
        loading: false,
        error: undefined,
        ids: [CommentsMock.id],
        entities: { [CommentsMock.id]: {...CommentsMock, users: UsersMock } }
      } as CommentsState
    }),
    RouterDecorator,
  ]
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const ArticleDetailsNORMAL: Story = {
  args: {
    date: {...ArticleMock.article, id: undefined, blocks: [ArticleMock.text, ArticleMock.code, ArticleMock.image]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ArticleDetailsDARK: Story = {
  args: {
    date: {...ArticleMock.article, id: undefined, blocks: [ArticleMock.text, ArticleMock.code, ArticleMock.image]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ArticleDetailsORANGE: Story = {
  args: {
    date: {...ArticleMock.article, id: undefined, blocks: [ArticleMock.text, ArticleMock.code, ArticleMock.image]} as ArticleType,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};