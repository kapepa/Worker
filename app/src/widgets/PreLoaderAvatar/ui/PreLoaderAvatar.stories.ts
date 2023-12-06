import {Meta, StoryObj} from "@storybook/react";
import {PreLoaderAvatar} from "./PreLoaderAvatar";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import I18nDecorator from "../../../shared/config/i18nDecorator/i18nDecorator";

const meta: Meta<typeof PreLoaderAvatar> = {
  component: PreLoaderAvatar,
  decorators: [I18nDecorator],
};

export default meta;
type Story = StoryObj<typeof PreLoaderAvatar>;

const args = {
  alt: "alt",
  symbol: "A",
  size: 50,
  api: false,
  url: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
}

export const PreLoaderAvatarNormal: Story = {
  args: args,
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PreLoaderAvatarDARK: Story = {
  args: args,
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PreLoaderAvatarORANGE: Story = {
  args: args,
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};