import type { Meta, StoryObj } from '@storybook/react';

import { Admin } from './Admin';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Admin> = {
  component: Admin,
  decorators: [
    RouterDecorator,
    StoreDecorator({})
  ],

export default meta;
type Story = StoryObj<typeof Admin>;

export const AdminNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const AdminORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};

export const AdminDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};