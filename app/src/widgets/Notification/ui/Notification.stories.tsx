import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {NotificationEnum} from "../../../shared/const/NotificationEnum";

const meta: Meta<typeof Notification> = {
  component: Notification,
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const NotificationNORMAL: Story = {
  args: {
    isOpen: true,
    text: "Notification text.",
    type: NotificationEnum.Attention,
    onClose: () => {},
    onConfirmed: () => {},
    isLoading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const NotificationDARK: Story = {
  args: {
    isOpen: true,
    text: "Notification text.",
    type: NotificationEnum.Attention,
    onClose: () => {},
    onConfirmed: () => {},
    isLoading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const NotificationORANGE: Story = {
  args: {
    isOpen: true,
    text: "Notification text.",
    type: NotificationEnum.Attention,
    onClose: () => {},
    onConfirmed: () => {},
    isLoading: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};