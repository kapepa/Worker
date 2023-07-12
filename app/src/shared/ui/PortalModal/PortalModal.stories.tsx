import type { Meta, StoryObj } from '@storybook/react';
import PortalModal from "./PortalModal";
import ThemeDecorator from '../../config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof PortalModal> = {
  component: PortalModal,
};

export default meta;
type PortalM = StoryObj<typeof PortalModal>;

export const HomeDark: PortalM = {
  args: {
    children: <div>PortalModal</div>
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const AboutNormal: PortalM = {
  args: {
    children: <div>PortalModal</div>
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};