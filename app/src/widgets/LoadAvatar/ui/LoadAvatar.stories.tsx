import type { Meta, StoryObj } from '@storybook/react';
import { LoadAvatar } from "./LoadAvatar";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof LoadAvatar> = {
  component: LoadAvatar,
  decorators: [StoreDecorator({})],
};

export default meta;
type NavbarStory = StoryObj<typeof LoadAvatar>;

export const LoadAvatarNormal: NavbarStory = {
  args: {
    src: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    alt: "avatar",
    onChangeAvatar(file: File | undefined) {},
    size: 50,
    readOnly: false,
    symbol: "UserName",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), ],
};

export const LoadAvatarDark: NavbarStory = {
  args: {
    src: "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    alt: "avatar",
    onChangeAvatar(file: File | undefined) {},
    size: 50,
    readOnly: false,
    symbol: "UserName",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};