import type {Meta, StoryObj} from '@storybook/react';
import {ViewEye} from './ViewEye';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {ColorView} from "../../const/ColorView";

const meta: Meta<typeof ViewEye> = {
  component: ViewEye,
};

export default meta;
type Story = StoryObj<typeof ViewEye>;

export const ViewEyeNORMAL: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    quantity: 100,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), ],
};

export const ViewEyeDARK: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    quantity: 100,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), ],
};

export const ViewEyeORANGE: Story = {
  args: {
    theme: ColorView.PrimaryDef,
    quantity: 100,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), ],
};