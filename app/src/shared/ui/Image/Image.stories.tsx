import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

import Img from "../../assets/img/avatar-face.jpg"

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const ImageNORMAL: Story = {
  args: {
    src: Img,
    alt: "img_alt",
    api: true,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};