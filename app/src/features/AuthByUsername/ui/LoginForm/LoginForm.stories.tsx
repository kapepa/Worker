import {Meta, StoryObj} from "@storybook/react";
import {LoginForm} from "./LoginForm";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {AuthState} from "../../model/types/AuthState";

const mockInitState: AuthState  = {
  token: undefined,
  error: undefined,
  loading: false,
  login: {username: "admin", password: "123456"},
}

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  decorators: [StoreDecorator({auth: mockInitState } )]
};

export default meta;
type LoginFormStory = StoryObj<typeof LoginForm>;

export const LoginFormNORMAL: LoginFormStory = {
  args: {
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const LoginFormDARK: LoginFormStory = {
  args: {
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const LoginFormORANGE: LoginFormStory = {
  args: {
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const LoginFormError: LoginFormStory = {
  args: {
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({auth: { ...mockInitState, error: "error-login" } })],
};

export const LoginFormLoading: LoginFormStory = {
  args: {
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({auth: { ...mockInitState, loading: true } })],
};