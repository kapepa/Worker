import {CommentsList} from "./CommentsList";
import ComponentRender from "../../../../shared/test/componentRender";
import {CommentsState} from "../../model/types/commentsState";

describe("<CommentsList/>", () => {
  const mockComments: CommentsState = { ids: [], entities: {}, error: undefined, loading: false, data: undefined };
  test("should be defined", () => {
    const { getByTestId } = ComponentRender(<CommentsList/>)
    expect(getByTestId("comments-list")).toBeInTheDocument();
  })

  test("should be error", () => {
    const { getByText } = ComponentRender(<CommentsList/>, {reloadedState: { comments: {...mockComments, error: "error-comments"} }})
    expect(getByText("Error getting comments.")).toBeInTheDocument();
  })

  test("should be loading", () => {
    const { getByTestId } = ComponentRender(<CommentsList/>, {reloadedState: { comments: {...mockComments, loading: true } }})
    expect(getByTestId("loader")).toBeInTheDocument();
  })

  test("should be empty", () => {
    const { getByText, debug } = ComponentRender(<CommentsList/>, {reloadedState: { comments: mockComments }})
    expect(getByText("Comments is empty.")).toBeInTheDocument();
  })
})