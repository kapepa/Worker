import {Meta, StoryObj} from "@storybook/react";
import {ProfileHeader} from "./ProfileHeader";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfileHeader> = {
  component: ProfileHeader,
  decorators: [StoreDecorator({
    profile: {
      data: {
        lastname: "MyLastname",
        firstname: "MyLastnameFirstname",
        email: "MyEmail",
      },
      readonly: true,
    }})],
};

export default meta;
type ProfileHeaderStory = StoryObj<typeof ProfileHeader>;

export const ProfileHeaderNormal: ProfileHeaderStory = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileHeaderDark: ProfileHeaderStory = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ProfileHeaderNormalEdit: ProfileHeaderStory = {
  decorators: [StoreDecorator({
    profile: { readonly: false }
  }), ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileHeaderDarkEdit: ProfileHeaderStory = {
  decorators: [StoreDecorator({
    profile: { readonly: false }
  }), ThemeDecorator(ThemeEnum.DARK)],
};