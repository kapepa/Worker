import {render} from '@testing-library/react'
import {CommentsCard} from "./CommentsCard";
import {CommentsTypes} from "../../model/types/commentsTypes";
import {UsersTypes} from "../../../Users";
import {ArticleType} from "../../../Article/model/types/articleType";

describe("<CommentsCard/>", () => {
  const mockUser = {username: "UserName"} as UsersTypes
  const mockComment: CommentsTypes = { id: "commentID", text: "some text", users: mockUser, articles: {} as ArticleType };

  test("should be defined", () => {
    const { getByTestId } = render(<CommentsCard comment={mockComment} />)
    expect(getByTestId("comments-card")).toBeInTheDocument();
  })
})