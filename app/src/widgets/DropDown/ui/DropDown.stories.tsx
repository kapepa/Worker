import type { Meta, StoryObj } from '@storybook/react';

import { DropDown } from './DropDown';
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {RouterPath} from "../../../shared/const/Routers";

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  args: {
    viewPrefix: "Click to me",
    navList: [
      { label: "Profile", href: `${RouterPath.PROFILE}/idUser}` },
      { label: "Logout", callback: () => {} },
    ]
  },
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const DropDownNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]
};

export const DropDownDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)]
};

export const DropDownORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]
};