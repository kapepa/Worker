import {ArticleType} from "../../model/types/articleType";
import Article from "../../../../shared/test/mock/article.json"
import User from "../../../../shared/test/mock/user.json"
import ComponentRender from "../../../../shared/test/componentRender";
import {ArticlesItem} from "./ArticlesItem";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

describe("ArticlesItem", () => {
  const mockArticle: ArticleType = {...Article.article, users: User, blocks: [Article.text, Article.code, Article.image] } as ArticleType;

  test("block article type should be returned", () => {
    const { getByText, getByTestId, debug } = ComponentRender(<ArticlesItem article={mockArticle} view={ArticlesView.Block} />);

    expect(getByTestId("image")).toBeInTheDocument();
    expect(getByTestId("avatar")).toBeInTheDocument();
    expect(getByText(mockArticle.title)).toBeInTheDocument();
    expect(getByText(mockArticle.views)).toBeInTheDocument();
  })

  test("square article type should be returned", () => {
    const { getByText, getByTestId, debug } = ComponentRender(<ArticlesItem article={mockArticle} view={ArticlesView.Square} />);

    expect(getByTestId("image")).toBeInTheDocument();
    expect(getByText(mockArticle.title)).toBeInTheDocument();
    expect(getByText(mockArticle.views)).toBeInTheDocument();
  })
})