import {Meta, StoryObj} from "@storybook/react";
import {LoginForm} from "./LoginForm";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type LoginFormStory = StoryObj<typeof LoginForm>;

export const LoginFormNORMAL: LoginFormStory = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const LoginFormDARK: LoginFormStory = {
  args: {},
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};