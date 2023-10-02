import type { Meta, StoryObj } from '@storybook/react';

import { TypeDynamic } from './TypeDynamic';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {FormDecorator} from "../../../shared/config/FormDecorator/FormDecorator";
import {ArticleTypesKey} from "../../../entities/Article/model/types/articleType";

const meta: Meta<typeof TypeDynamic> = {
  component: TypeDynamic,
  decorators: [FormDecorator({ defaultValues: {"type": [ArticleTypesKey.IT]} })],
};

export default meta;
type Story = StoryObj<typeof TypeDynamic>;

export const TypeDynamicDARK: Story = {
  args: {
    name: "type",
    label: "Type",
    validation: { required: { value: true, message: "Type is required" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const TypeDynamicNORMAL: Story = {
  args: {
    name: "type",
    label: "Type",
    validation: { required: { value: true, message: "Type is required" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const TypeDynamicORANGE: Story = {
  args: {
    name: "type",
    label: "Type",
    validation: { required: { value: true, message: "Type is required" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};