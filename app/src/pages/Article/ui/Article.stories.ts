import type { Meta, StoryObj } from '@storybook/react';
import { Article } from './Article';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";

const meta: Meta<typeof Article> = {
  component: Article,
  decorators: [
    RouterDecorator,
    StoreDecorator({ users: {profile: { id: "id", username: "MyName", firstname: "MyFirstname", lastname: "MyLastname" }} })
  ]
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Primary: Story = {};