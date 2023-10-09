import type {Meta, StoryObj} from '@storybook/react';

import {TextareaDynamic} from './TextareaDynamic';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {BgEnum} from "../../../shared/const/BgEnum";
import {FormDecorator} from "../../../shared/config/FormDecorator/FormDecorator";
import ArticleMock from "../../../shared/test/mock/article.json";

const MockCode = ArticleMock.code;

const meta: Meta<typeof TextareaDynamic> = {
  component: TextareaDynamic,
  decorators: [FormDecorator({ defaultValues: { code: MockCode.code } })]
};

export default meta;
type Story = StoryObj<typeof TextareaDynamic>;

export const TextareaDynamicDARK: Story = {
  args: {
    theme: BgEnum.BG_COLOR,
    name: "code",
    validation: { required: { value: true, message: "Required code" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const TextareaDynamicORANGE: Story = {
  args: {
    theme: BgEnum.BG_COLOR,
    name: "code",
    validation: { required: { value: true, message: "Required code" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const TextareaDynamicNORMAL: Story = {
  args: {
    theme: BgEnum.BG_COLOR,
    name: "code",
    validation: { required: { value: true, message: "Required code" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};