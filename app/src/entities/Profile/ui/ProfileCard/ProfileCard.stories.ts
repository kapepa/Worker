import {Meta, StoryObj} from "@storybook/react";
import {ProfileCard} from "./ProfileCard";
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {ProfileState} from "../../model/types/profileState";
import {Countries} from "../../../../shared/const/Countries";

const mockProfile: ProfileState = {
  data: {
    lastname: "MyLastname",
    firstname: "MyLastnameFirstname",
    email: "MyEmail",
    country: Countries.USA,
    city: "Odessa",
  },
  readonly: false,
  loading: false,
  edit: undefined,
  error: undefined,
}

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  decorators: [StoreDecorator({
    profile: mockProfile
  })],
};

export default meta;
type ProfileCardStory = StoryObj<typeof ProfileCard>;

export const ProfileCardNormal: ProfileCardStory = {
  args: {
    profile: mockProfile.data,
    edit: mockProfile.data,
    isLoading: false,
    readonly: true,
    error: undefined,
    refSend: { current: null },
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ProfileCardDark: ProfileCardStory = {
  args: {
    profile: mockProfile.data,
    edit: mockProfile.data,
    isLoading: false,
    readonly: true,
    error: undefined,
    refSend: { current: null },
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};