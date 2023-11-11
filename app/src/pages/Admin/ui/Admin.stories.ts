import type { Meta, StoryObj } from '@storybook/react';

import { Admin } from './Admin';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof Admin> = {
  component: Admin,
};

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