import {Meta, StoryObj} from "@storybook/react";
import {Profile} from "./Profile";
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {Countries} from "../../../shared/const/Countries";

const meta: Meta<typeof Profile> = {
  component: Profile,
  decorators: [RouterDecorator, StoreDecorator({
    profile: {
      data: {
        id: "MyID",
        firstname: "MyFirstname",
        lastname: "MyLastname",
        username: "MyUsername",
        country: Countries.BLR,
        city: "Odessa",
      }
    }
  })],
};

export default meta;
type ProfileStory = StoryObj<typeof Profile>;

export const ProfileNormal: ProfileStory = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileDark: ProfileStory = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};