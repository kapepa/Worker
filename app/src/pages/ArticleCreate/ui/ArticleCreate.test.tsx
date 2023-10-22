import ComponentRender from "../../../shared/test/componentRender";
import {ArticleCreate} from "./ArticleCreate";
import ArticlesJSON from "../../../shared/test/mock/article.json";
import {ArticleType} from "../../../entities/Article/model/types/articleType";

describe("<ArticleCreate/>", () => {
  const mockArticle = ArticlesJSON.article as ArticleType;

  test("Should be defined",() => {
    const { getByDisplayValue } = ComponentRender(
      <ArticleCreate/>,
      {
        reloadedState: {
          editorArticle: {
            loading: false,
            error: undefined,
            idArt: undefined,
            record: mockArticle,
            edit: undefined,
          }
        }
      }
    )

    expect(getByDisplayValue(mockArticle.title)).toBeInTheDocument();
    expect(getByDisplayValue(mockArticle.subtitle)).toBeInTheDocument();
  })
})