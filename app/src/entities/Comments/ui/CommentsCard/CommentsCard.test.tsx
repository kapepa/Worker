import {CommentsCard} from "./CommentsCard";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {UsersTypes} from "../../../Users";
import {ArticleType} from "../../../Article/model/types/articleType";
import RenderWithRouter from "../../../../shared/test/renderWithRouter";

describe("<CommentsCard/>", () => {
  const mockUser = {username: "UserName"} as UsersTypes
  const mockComment: CommentsTypes = { id: "commentID", text: "some text", users: mockUser, articles: {} as ArticleType };

  test("should be defined", () => {
    const { getByTestId, getByText } = RenderWithRouter(
      <CommentsCard comment={mockComment} isOwner={true} onDelete={jest.fn()} index={0}/>
    );
    expect(getByTestId("comments-card")).toBeInTheDocument();
    expect(getByText("some text")).toBeInTheDocument();
  })
})