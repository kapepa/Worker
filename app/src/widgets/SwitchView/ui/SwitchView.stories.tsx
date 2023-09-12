import type {Meta, StoryObj} from '@storybook/react';
import {SwitchView} from './SwitchView';
import ThemeDecorator from "../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../app/contexts/Theme/lib/ThemeContext";
import RouterDecorator from "../../../shared/config/RouterDecorator/RouterDecorator";
import StoreDecorator from "../../../shared/config/StoreDecorator/StoreDecorator";
import {ArticlesState} from "../../../entities/Article";
import {ArticlesView} from "../../../shared/const/ArticlesView";

const articles: ArticlesState = {
  view: ArticlesView.Square,
  loading: false,
  error: undefined,
  data: undefined,
  entities: {},
  ids: [],
  hasMore: false,
}

const meta: Meta<typeof SwitchView> = {
  component: SwitchView,
  decorators: [RouterDecorator, StoreDecorator({ articles })],
};

export default meta;
type Story = StoryObj<typeof SwitchView>;

export const SwitchViewNORMAL: Story = {
  decorators: [ThemeDecorator(ThemeEnum.NORMAL)],
};

export const SwitchViewDARK: Story = {
  decorators: [ThemeDecorator(ThemeEnum.DARK)],
};

export const SwitchViewORANGE: Story = {
  decorators: [ThemeDecorator(ThemeEnum.ORANGE)],
};