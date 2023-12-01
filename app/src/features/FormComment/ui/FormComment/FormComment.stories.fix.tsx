import type { Meta, StoryObj } from '@storybook/react';
import { FormComment } from './FormComment';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof FormComment> = {
  component: FormComment,
  decorators: [
    StoreDecorator({ formComment: { text: undefined, error: undefined, loading: false } })
  ]
};

export default meta;
type Story = StoryObj<typeof FormComment>;

export const FormCommentNORMAL: Story = {
  args: {
    onSend(str: string) {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FormCommentDARK: Story = {
  args: {
    onSend(str: string) {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const FormCommentORANGE: Story = {
  args: {
    onSend(str: string) {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};