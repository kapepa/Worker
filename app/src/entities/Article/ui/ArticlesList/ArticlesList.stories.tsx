import type {Meta, StoryObj} from '@storybook/react';

import {ArticlesList} from './ArticlesList';
import ThemeDecorator from "../../../../shared/config/ThemeDecorator/ThemeDecorator";
import {ThemeEnum} from "../../../../app/contexts/Theme/lib/ThemeContext";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import I18nDecorator from "../../../../shared/config/i18nDecorator/i18nDecorator";
import RouterDecorator from "../../../../shared/config/RouterDecorator/RouterDecorator";
import StoreDecorator from "../../../../shared/config/StoreDecorator/StoreDecorator";
import {ArticlesState} from "../../model/types/articlesState";

import Article from "../../../../shared/test/mock/article.json"
import {ArticleType} from "../../model/types/articleType";

const articles: ArticlesState = {
  ids: [Article.article.id],
  entities: {[Article.article.id as string]: {...Article.article, blocks: [Article.text, Article.code, Article.image]} as ArticleType},
  data: undefined,
  error: undefined,
  loading: false,
  view: ArticlesView.Block,
}

const meta: Meta<typeof ArticlesList> = {
  component: ArticlesList,
  decorators: [I18nDecorator, RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof ArticlesList>;

export const ArticlesListNORMAL: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), StoreDecorator({articles})],
};

export const ArticlesListDARK: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({articles})],
};

export const ArticlesListORANGE: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), StoreDecorator({articles})],
};

export const ArticlesSquareNORMAL: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), StoreDecorator({articles})],
};

export const ArticlesSquareDARK: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({articles})],
};

export const ArticlesSquareORANGE: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), StoreDecorator({articles})],
};

export const ArticlesSquareLoadingNORMAL: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesSquareLoadingDARK: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesSquareLoadingORANGE: Story = {
  args: {
    view: ArticlesView.Square,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesSquareBlockingNORMAL: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesSquareBlockingDARK: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesSquareBlockingORANGE: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), StoreDecorator({articles: {...articles, loading: true}})],
};

export const ArticlesErrorNORMAL: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.NORMAL), StoreDecorator({articles: {...articles, loading: false, error: "all-articles-error"}})],
};

export const ArticlesErrorDARK: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({articles: {...articles, loading: false, error: "all-articles-error"}})],
};

export const ArticlesErrorORANGE: Story = {
  args: {
    view: ArticlesView.Block,
  },
  decorators: [ThemeDecorator(ThemeEnum.ORANGE), StoreDecorator({articles: {...articles, loading: false, error: "all-articles-error"}})],
};