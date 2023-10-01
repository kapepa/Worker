import type { Meta, StoryObj } from '@storybook/react';

import { ImageLoader } from './ImageLoader';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof ImageLoader> = {
  component: ImageLoader,
};

export default meta;
type Story = StoryObj<typeof ImageLoader>;

export const ImageLoaderNORMAL: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ImageLoaderDARK: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ImageLoaderORANGE: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {}
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const ImageLoaderEntryImage: Story = {
  args: {
    name: "img",
    loadImage: (file: File) => {},
    entryImage: "https://eimg.pravda.com/images/doc/0/b/0b9b29c-what-is-url-770x503.jpg"
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};