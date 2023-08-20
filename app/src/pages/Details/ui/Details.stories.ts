import type { Meta, StoryObj } from '@storybook/react';
import { Details } from './Details';
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Details> = {
  component: Details,
  decorators: [
    RouterDecorator,
    StoreDecorator({ users: {profile: { id: "id", username: "MyName", firstname: "MyFirstname", lastname: "MyLastname" }} })
  ]
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Primary: Story = {};