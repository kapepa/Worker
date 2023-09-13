import type { Meta, StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import UsersMock from "../../../../shared/test/mock/user.json";
import {CommentsTypes} from "../../model/types/commentsTypes";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";

const meta: Meta<typeof CommentsList> = {
  component: CommentsList,
  decorators: [RouterDecorator, StoreDecorator(
    {
      comments: {
        ids: [CommentsMock.id],
        entities: { [CommentsMock.id]: {...CommentsMock, users: {...UsersMock, avatar: ""}} as CommentsTypes },
        data: [{...CommentsMock, users:  {...UsersMock, avatar: ""} } as CommentsTypes]
      }
    }
  )]
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const CommentsListNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const CommentsListDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

export const CommentsListORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};