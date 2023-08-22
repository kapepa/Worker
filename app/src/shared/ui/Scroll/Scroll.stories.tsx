import type { Meta, StoryObj } from '@storybook/react';

import { Scroll } from './Scroll';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Scroll> = {
  component: Scroll,
  decorators: [(Story) => (
    <div style={{ position: "relative", height: "250px", width: "100%",}}>
      <Story />
    </div>
  )],
  args: {
    children: <div style={{height: "400px", width: "100%"}} />
  }
};

export default meta;
type Story = StoryObj<typeof Scroll>;

export const ScrollNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL) ]
};

export const ScrollDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK) ]
};