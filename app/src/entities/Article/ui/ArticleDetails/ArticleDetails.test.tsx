import {ArticleDetails} from "./ArticleDetails";
import {ArticleType, ArticleTypesKey} from "../../model/types/articleType";
import ComponentRender from "../../../../shared/test/componentRender";
import {StateSchema} from "../../../../app/providers/Store";
import {CommentsState} from "../../../Comments";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import UsersMock from "../../../../shared/test/mock/user.json";

describe("ArticleDetails", () => {
  const state: StateSchema = {
    comments: {
      data: [CommentsMock], loading: false, error: undefined, ids: [CommentsMock.id], entities: { [CommentsMock.id]: {...CommentsMock, users: UsersMock } }
    } as CommentsState
  } as StateSchema
  const articleTypeMock = { id: "id", title: "Title", img: "", subtitle: "Subtitle", type: [ArticleTypesKey.IT], views: 100} as ArticleType;

  test("should be defined", () => {
    const { getByTestId, getByText } = ComponentRender(<ArticleDetails date={articleTypeMock}/>, {reloadedState: state});
    expect(getByTestId("article-details")).toBeInTheDocument();
    expect(getByText(/100/ig)).toBeInTheDocument();
    expect(getByText(/Subtitle/ig)).toBeInTheDocument();
  })
})