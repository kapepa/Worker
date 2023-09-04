import type { Meta, StoryObj } from '@storybook/react';
import { CommentsCard } from './CommentsCard';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import UsersMock from "../../../../shared/test/mock/user.json";
import {CommentsTypes} from "../../model/types/commentsTypes";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";
import "./CommentsCard.scss";

const meta: Meta<typeof CommentsCard> = {
  component: CommentsCard,
  decorators: [ RouterDecorator ]
};

export default meta;
type Story = StoryObj<typeof CommentsCard>;

export const CommentsCardNORMAL: Story = {
  args: {
    comment: {...CommentsMock, users:  {...UsersMock, avatar: ""} } as CommentsTypes,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const CommentsCardDARK: Story = {
  args: {
    comment: {...CommentsMock, users:  {...UsersMock, avatar: ""} } as CommentsTypes,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const CommentsCardORANGE: Story = {
  args: {
    comment: {...CommentsMock, users:  {...UsersMock, avatar: ""} } as CommentsTypes
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};