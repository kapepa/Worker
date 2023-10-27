import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import ThemeDecorator from "../../config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const FlexNORMAL: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDARK: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const FlexORANGE: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const Flex8: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    gap: 8
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Flex16: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    gap: 16
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Flex24: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    gap: 24
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Flex32: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    gap: 32
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const Flex40: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    gap: 40
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexJustifyContentStart: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    justifyContent: "center",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexJustifyContentSpaceBetween: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    justifyContent: "space-between",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexJustifyContentSpaceAround: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    justifyContent: "space-around",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexJustifyContentSpaceEvenly: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    justifyContent: "space-evenly",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDirectionRow: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    flexDirection: "row",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDirectionRowReverse: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    flexDirection: "row-reverse",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDirectionColumn: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    flexDirection: "column",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDirectionColumnReverse: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    flexDirection: "column-reverse",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexDirectionUnset: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    flexDirection: "unset",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsStart: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "flex-start",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsEnd: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "flex-end",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsCenter: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "center",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsBaseline: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "baseline",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsStretch: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "stretch",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const FlexAlignItemsUnset: Story = {
  args: {
    max: true,
    children: (<><div>1</div><div>2</div><div>3</div></>),
    alignItems: "unset",
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};