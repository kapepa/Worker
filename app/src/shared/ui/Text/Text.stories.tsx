import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextAlign, TextTheme} from "./Text";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";


const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type TextMode = StoryObj<typeof Text>;

export const PrimaryNormal: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryTitle: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryTitleInverted: TextMode = {
  args: {
    theme: TextTheme.INVERTED,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryText: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryTextInverted: TextMode = {
  args: {
    theme: TextTheme.INVERTED,
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryDark: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PrimaryTitleDark: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PrimaryTextDark: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorNormal: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ErrorTitle: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ErrorText: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ErrorDark: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorTitleDark: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const ErrorTextDark: TextMode = {
  args: {
    theme: TextTheme.ERROR,
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const PrimaryNormalCenter: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    align: TextAlign.CENTER,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const PrimaryDarkRight: TextMode = {
  args: {
    theme: TextTheme.PRIMARY,
    align: TextAlign.RIGHT,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Nam nec semper augue. Curabitur ut enim placerat, eleifend lectus nec, varius quam. Duis efficitur, purus non lobortis facilisis, quam lorem finibus eros, sed sollicitudin mauris purus at metus."
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};


