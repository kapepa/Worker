import {Meta, StoryObj} from "@storybook/react";
import {ProfileCard} from "./ProfileCard";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  decorators: [StoreDecorator({
    profile: {
      data: {
        lastname: "MyLastname",
        firstname: "MyLastnameFirstname",
        email: "MyEmail",
      }
    }
  })],
};

export default meta;
type ProfileCardStory = StoryObj<typeof ProfileCard>;

export const ProfileCardNormal: ProfileCardStory = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileCardDark: ProfileCardStory = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};