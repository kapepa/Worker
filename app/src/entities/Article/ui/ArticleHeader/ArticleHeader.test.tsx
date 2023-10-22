import ComponentRender from "../../../../shared/test/componentRender";
import {ArticleHeader} from "./ArticleHeader";
import Users from "../../../../shared/test/mock/user.json";
import Article from "../../../../shared/test/mock/article.json";
import {UsersTypes} from "../../../Users";
import {ArticleType} from "../../model/types/articleType";
import {fireEvent} from "@testing-library/react";

describe("<ArticleHeader/>", () => {
  test("", () => {
    const toBack = jest.fn();
    const {debug, getByText} = ComponentRender(
      <ArticleHeader toBack={toBack}/>,
      {
        reloadedState: {
          users: {
            profile: Users as UsersTypes,
          },
          details: {
            data: {...Article.article, users: Users} as ArticleType,
          }
        }
      }
    )

    const list= getByText("Back to list")
    const edit = getByText("Edit")

    expect(list).toBeInTheDocument();
    expect(edit).toBeInTheDocument();

    fireEvent.click(list)

    expect(toBack).toHaveBeenCalled();
  })
})