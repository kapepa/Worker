import type { Meta, StoryObj } from '@storybook/react';
import IcoImg, { IcoImgColor } from "./IcoImg";
import ThemeDecorator from '../../config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';
import "../../assets/icons/main-20-20.svg";
import "../../assets/icons/about-20-20.svg";

const meta: Meta<typeof IcoImg> = {
  component: IcoImg,
};

export default meta;
type IcoImgStory = StoryObj<typeof IcoImg>;

export const HomeDark: IcoImgStory = {
  args: {
    ico: 'HomeIco',
    color: IcoImgColor.PRIMARY_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const AboutNormal: IcoImgStory = {
  args: {
    ico: 'AboutIco',
    color: IcoImgColor.PRIMARY_COLOR_INVERTED,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};