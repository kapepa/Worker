import type { Meta, StoryObj } from '@storybook/react';
import {Text} from "./Text";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type TextMode = StoryObj<typeof Text>;

export const PrimaryNormal: TextMode = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryDarkTitle: TextMode = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PrimaryDarkText: TextMode = {
  args: {
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};
