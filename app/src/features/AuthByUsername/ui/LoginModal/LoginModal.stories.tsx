import {Meta, StoryObj} from "@storybook/react";
import {LoginModal} from "./LoginModal";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import ModalDecorator from "../../../../shared/config/ModalDecorator/ModalDecorator";

const meta: Meta<typeof LoginModal> = {
  component: LoginModal,
  decorators: [ModalDecorator],
};

export default meta;
type LoginModalStory = StoryObj<typeof LoginModal>;

export const LoginModalNORMAL: LoginModalStory = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const LoginModalDARK:LoginModalStory = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};