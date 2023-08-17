import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const meta: Meta<typeof Article> = {
  component: Article,
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Primary: Story = {};