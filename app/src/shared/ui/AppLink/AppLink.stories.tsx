import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from "./AppLink";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import I18nDecorator from "../../config/i18nDecorator/i18nDecorator";
import RouterDecorator from "../../config/RouterDecorator/RouterDecorator";

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  decorators: [I18nDecorator, RouterDecorator],
};

export default meta;
type AppLinkStory = StoryObj<typeof AppLink>;

export const AppLinkPrimary: AppLinkStory = {
    args: {
        to: "/",
        children: "Link",
        theme: AppLinkTheme.PRIMARY
    },
	decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const AppLinkDarkSecondary: AppLinkStory = {
    args: {
        to: "/",
        children: "Link",
        theme: AppLinkTheme.SECONDARY
    },
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const AppLinkDarkRed: AppLinkStory = {
    args: {
        to: "/",
        children: "Link",
        theme: AppLinkTheme.RED
    },
	decorators: [ThemeDecorator(ThemeEnum.DARK)],
};