import type { Meta, StoryObj } from '@storybook/react';
import Modal from "./Modal";
import ThemeDecorator from '../../../shared/config/ThemeDecorator/ThemeDecorator';
import { ThemeEnum } from '../../../app/contexts/Theme/lib/ThemeContext';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type ModalStory = StoryObj<typeof Modal>;

export const ModalNormal: ModalStory = {
  args: {
    isOpen: true,
    children: (<div>Modal</div>),
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const ModalDark: ModalStory = {
  args: {
    isOpen: true,
    children: (<div>Modal</div>),
    onClose: () => {},
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};