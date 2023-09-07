import {ArticleType} from "../../model/types/articleType";
import Article from "../../../../shared/test/mock/article.json";
import User from "../../../../shared/test/mock/user.json";
import ComponentRender from "../../../../shared/test/componentRender";
import {ArticlesList} from "./ArticlesList";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {ArticlesState} from "../../model/types/articlesState";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";


describe("ArticlesList", () => {
  const mockArticle: ArticleType = {
    ...Article.article,
    users: User,
    blocks: [Article.text, Article.code, Article.image]
  } as ArticleType;

  const mockArticleState: ArticlesState = {
    ids: [mockArticle.id as string],
    entities: { [mockArticle.id as string]: mockArticle },
    data: undefined,
    error: undefined,
    loading: false,
  }

  test("block article type should be returned", () => {
    const { getByTestId } = ComponentRender(
      <ArticlesList view={ArticlesView.Block} />,
      { reloadedState: { articles: mockArticleState } }
    );
    expect(getByTestId("articles")).toBeInTheDocument();
  })

  test("should be return loading", () => {
    const { getByTestId } = ComponentRender(
      <ArticlesList view={ArticlesView.Block} />,
      { reloadedState: { articles: {...mockArticleState, loading: true} } }
    );
    expect(getByTestId("loading")).toBeInTheDocument();
  })

  test("should be return error", () => {
    const { getByTestId } = ComponentRender(
      <ArticlesList view={ArticlesView.Block} />,
      { reloadedState: { articles: {...mockArticleState, error: "all-articles-error"} } }
    );
    expect(getByTestId("error")).toBeInTheDocument();
  })

  it("should be return empty list of array", () => {
    const { getByTestId } = ComponentRender(
      <ArticlesList view={ArticlesView.Block} />,
      { reloadedState: { articles: {...mockArticleState, ids: [] } } }
    );
    expect(getByTestId("empty")).toBeInTheDocument();
  })
})