import ComponentRender from "../../../../shared/test/componentRender";
import {ArticleType} from "../../model/types/articleType";
import {ArticlesRecommended} from "./ArticlesRecommended";
import Article from "../../../../shared/test/mock/article.json";

describe("<ArticlesRecommended/>", () => {
  test("should be defined", () => {
    const article: ArticleType = Article.article as ArticleType;
    const { getByText } = ComponentRender(
      <ArticlesRecommended/>,
      {reloadedState: {
          recommendedArticle: {
            ids: [article.id],
            entities: {[article.id as string]: article},
          }
        }}
      )
    expect(getByText(article.title)).toBeInTheDocument();
    expect(getByText(article.views)).toBeInTheDocument();
  })
})