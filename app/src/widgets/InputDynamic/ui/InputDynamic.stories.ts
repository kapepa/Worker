import type {Meta, StoryObj} from '@storybook/react';
import {InputDynamic} from './InputDynamic';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import MockTypeInput from "../../../shared/test/mock/login.json";
import {FormDecorator} from "../../../shared/config/FormDecorator/FormDecorator";
import {BgEnum} from "../../../shared/const/BgEnum";
import {ColorEnum} from "../../../shared/const/ColorEnum";

const meta: Meta<typeof InputDynamic> = {
  component: InputDynamic,
  decorators: [FormDecorator({ defaultValues: { email: "my@email.com" } })]
};

export default meta;
type Story = StoryObj<typeof InputDynamic>;

export const InputDynamicDARK: Story = {
  args: {
    label: MockTypeInput.email.label,
    name: MockTypeInput.email.name,
    type: MockTypeInput.email.type,
    classLabel: ColorEnum.SECONDARY_COLOR,
    themeInput: BgEnum.BG_COLOR_INVERTED,
    validation: MockTypeInput.email.validation,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const InputDynamicNORMAL: Story = {
  args: {
    label: MockTypeInput.email.label,
    name: MockTypeInput.email.name,
    type: MockTypeInput.email.type,
    classLabel: ColorEnum.SECONDARY_COLOR,
    themeInput: BgEnum.BG_COLOR_INVERTED,
    validation: MockTypeInput.email.validation,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const InputDynamicORANGE: Story = {
  args: {
    label: MockTypeInput.email.label,
    name: MockTypeInput.email.name,
    type: MockTypeInput.email.type,
    classLabel: ColorEnum.SECONDARY_COLOR,
    themeInput: BgEnum.BG_COLOR_INVERTED,
    validation: MockTypeInput.email.validation,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};