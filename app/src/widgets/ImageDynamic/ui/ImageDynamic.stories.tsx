import type { Meta, StoryObj } from '@storybook/react';

import { ImageDynamic } from './ImageDynamic';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import {FormDecorator} from "../../../shared/config/FormDecorator/FormDecorator";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ImageDynamic> = {
  component: ImageDynamic,
  decorators: [FormDecorator({defaultValues: {img: ""}})]
};

export default meta;
type Story = StoryObj<typeof ImageDynamic>;

export const ImageDynamicNORMAL: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {},
    validation: { required: { value: true, message: "required.img" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ImageDynamicDARK: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {},
    validation: { required: { value: true, message: "required.img" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ImageDynamicORANGE: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {},
    validation: { required: { value: true, message: "required.img" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ImageDynamicLoaded: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {},
    validation: { required: { value: true, message: "required.img" } },
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), FormDecorator({defaultValues: {img: "https://eimg.pravda.com/images/doc/0/b/0b9b29c-what-is-url-770x503.jpg"}})],
};