import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

const meta: Meta<typeof Code> = {
  component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

export const CodeDARK: Story = {
  args: {
    text:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
    children:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const CodeNORMAL: Story = {
  args: {
    text:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
    children:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const CodeORANGE: Story = {
  args: {
    text:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
    children:  "<!DOCTYPE html>\n<html>\n <p>Hellow</p>\n</html>",
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};