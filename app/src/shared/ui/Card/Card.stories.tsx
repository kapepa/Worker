import type {Meta, StoryObj} from '@storybook/react';
import {Card} from './Card';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {BgEnum} from "../../const/BgEnum";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardDARK: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const CardNORMAL: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const CardORANGE: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const INVERTEDCardDARK: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const INVERTEDCardNORMAL: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const INVERTEDCardORANGE: Story = {
  args: {
    children: "Component",
    theme: BgEnum.BG_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};