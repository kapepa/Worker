import {Meta, StoryObj} from "@storybook/react";
import {ProfileHeader} from "./ProfileHeader";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";

const mockData = {
  lastname: "MyLastname",
  firstname: "MyLastnameFirstname",
  email: "MyEmail",
}

const meta: Meta<typeof ProfileHeader> = {
  component: ProfileHeader,
  decorators: [I18nDecorator, StoreDecorator({
    profile: {
      data: mockData,
      readonly: true,
    }})],
};

export default meta;
type ProfileHeaderStory = StoryObj<typeof ProfileHeader>;

export const ProfileHeaderNormal: ProfileHeaderStory = {
  args: {
    onSend: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileHeaderDark: ProfileHeaderStory = {
  args: {
    onSend: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ProfileHeaderNormalEdit: ProfileHeaderStory = {
  args: {
    onSend: () => {},
  },
  decorators: [StoreDecorator({
    profile: { readonly: false, data: mockData }
  }), ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileHeaderDarkEdit: ProfileHeaderStory = {
  args: {
    onSend: () => {},
  },
  decorators: [StoreDecorator({
    profile: { readonly: false, data: mockData }
  }), ThemeDecorator(ThemeEnum.DARK)],
};