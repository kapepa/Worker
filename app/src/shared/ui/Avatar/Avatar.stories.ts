import {Meta, StoryObj} from "@storybook/react";
import {Avatar} from "./Avatar";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import Img from "../../assets/img/avatar-face.jpg"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type AvatarStory = StoryObj<typeof Avatar>;

export const AvatarNormal: AvatarStory = {
  args: {
    alt: "alt",
    symbol: "t",
    size: 100,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const AvatarDark: AvatarStory = {
  args: {
    alt: "alt",
    symbol: "t",
    size: 100,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
}

export const AvatarNormalSrc: AvatarStory = {
  args: {
    alt: "alt",
    symbol: "t",
    size: 100,
    src: Img,
    api: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const AvatarDarkSrc: AvatarStory = {
  args: {
    alt: "alt",
    symbol: "t",
    size: 100,
    src: Img,
    api: false,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
}