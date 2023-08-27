import {ArticleDetails} from "./ArticleDetails";
import {ArticleType, ArticleTypesKey} from "../../model/types/articleType";
import ComponentRender from "../../../../shared/test/componentRender";
import {StateSchema} from "../../../../app/providers/Store";
import {CommentsState} from "../../../Comments";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import UsersMock from "../../../../shared/test/mock/user.json";
import ArticleMock from "../../../../shared/test/mock/article.json";

describe("ArticleDetails", () => {
  const state: StateSchema = {
    comments: {
      data: [{...CommentsMock, users: UsersMock }],
      loading: false,
      error: undefined,
      ids: [CommentsMock.id],
      entities: { [CommentsMock.id]: {...CommentsMock, users: UsersMock } }
    } as CommentsState
  } as StateSchema
  const articleTypeMock = ArticleMock.article as ArticleType;

  test("should be defined", () => {
    const { getByTestId, getByText } = ComponentRender(<ArticleDetails date={articleTypeMock}/>, {reloadedState: state});
    expect(getByTestId("article-details")).toBeInTheDocument();
    expect(getByText("1022")).toBeInTheDocument();
    expect(getByText("Javascript news")).toBeInTheDocument();
  })
})