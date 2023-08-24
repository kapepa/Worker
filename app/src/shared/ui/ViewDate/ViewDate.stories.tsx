import type {Meta, StoryObj} from '@storybook/react';

import {ViewDate} from './ViewDate';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {ColorView} from "../../const/ColorView";

const meta: Meta<typeof ViewDate> = {
  component: ViewDate,
};

export default meta;
type Story = StoryObj<typeof ViewDate>;

export const ViewDateNORMAL: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    date: new Date("2022-01-10T15:30:00+00:00"),
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), ],
};

export const ViewDateDARK: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    date: new Date("2022-01-10T15:30:00+00:00"),
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), ],
};

export const ViewDateORANGE: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    date: new Date("2022-01-10T15:30:00+00:00"),
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), ],
};