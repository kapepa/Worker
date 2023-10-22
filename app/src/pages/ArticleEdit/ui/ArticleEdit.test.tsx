import ArticlesJSON from "../../../shared/test/mock/article.json";
import {ArticleType} from "../../../entities/Article/model/types/articleType";
import ComponentRender from "../../../shared/test/componentRender";
import {ArticleCreate} from "../../ArticleCreate";

describe("<ArticleEdit/>", () => {
  const mockArticle = ArticlesJSON.article as ArticleType;
  test("should be defined", () => {
    const { getByDisplayValue } = ComponentRender(
      <ArticleCreate/>,
      {
        reloadedState: {
          editorArticle: {
            loading: false,
            error: undefined,
            idArt: undefined,
            record: mockArticle,
            edit: mockArticle,
          }
        }
      }
    )

    expect(getByDisplayValue(mockArticle.title)).toBeInTheDocument();
    expect(getByDisplayValue(mockArticle.subtitle)).toBeInTheDocument();
  })
})