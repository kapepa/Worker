import type {Meta, StoryObj} from '@storybook/react';
import {Skeleton} from './Skeleton';
import {SkeletonShape} from "../../const/SkeletonShape";
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  args: {
    style: { width: "200px", height: "200px"}
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonNORMAL: Story = {
  args: {
    shape: SkeletonShape.Square,
    className: "stories",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL) ],
};

export const SkeletonDARK: Story = {
  args: {
    shape: SkeletonShape.Square,
    className: "stories",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK) ],
};

export const SkeletonCircleNORMAL: Story = {
  args: {
    shape: SkeletonShape.Circle,
    className: "stories",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL) ],
};

export const SkeletonCircleDARK: Story = {
  args: {
    shape: SkeletonShape.Circle,
    className: "stories",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK) ],
};