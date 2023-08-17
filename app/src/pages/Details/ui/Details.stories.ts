import type { Meta, StoryObj } from '@storybook/react';

import { Details } from './Details';

const meta: Meta<typeof Details> = {
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Primary: Story = {};