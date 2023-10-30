import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof ListBox> = {
  component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const listMock = [
  { name: 'Durward Reynolds', unavailable: false },
  { name: 'Kenton Towne', unavailable: false },
  { name: 'Therese Wunsch', unavailable: false },
  { name: 'Benedict Kessler', unavailable: false },
  { name: 'Katelyn Rohan', unavailable: false },
];

export const ListBoxNORMAL: Story = {
  args: {
    list: listMock,
    defaultValue: listMock[0],
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const ListBoxORANGE: Story = {
  args: {
    list: listMock,
    defaultValue: listMock[0],
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};

export const ListBoxDARK: Story = {
  args: {
    list: listMock,
    defaultValue: listMock[0],
    callback: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};