import type { Meta, StoryObj } from '@storybook/react';

import { NoticeView } from './NoticeView';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";
import NoticeJSON from "../../../../shared/test/mock/notice.json"


const meta: Meta<typeof NoticeView> = {
  component: NoticeView,
  decorators: [
    StoreDecorator({
      notice: {
        loading: false,
        error: undefined,
        ids: [NoticeJSON.id],
        entities: {[NoticeJSON.id]: NoticeJSON}
      }
    }),
    I18nDecorator
  ]
};

export default meta;
type Story = StoryObj<typeof NoticeView>;

export const NoticeViewDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const NoticeViewORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};

export const NoticeViewNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};