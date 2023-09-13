import type { Meta, StoryObj } from '@storybook/react';

import { InfiniteScroll } from './InfiniteScroll';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof InfiniteScroll> = {
  component: InfiniteScroll,
};

export default meta;
type Story = StoryObj<typeof InfiniteScroll>;

const ArrayBr = new Array(50).fill(<br/>)

export const InfiniteScrollNORMAL: Story = {
  args: {
    scrollEnd: () => {},
    children: ArrayBr
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const InfiniteScrollDARK: Story = {
  args: {
    scrollEnd: () => {},
    children: ArrayBr
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const InfiniteScrollORANGE: Story = {
  args: {
    scrollEnd: () => {},
    children: ArrayBr
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};