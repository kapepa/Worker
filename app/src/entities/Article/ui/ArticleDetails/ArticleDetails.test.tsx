import {render} from '@testing-library/react';
import {ArticleDetails} from "./ArticleDetails";
import {ArticleTypesKey} from "../../model/types/articleType";

describe("ArticleDetails", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<ArticleDetails date={{ id: "id", title: "title", img: "", subtitle: "subtitle", type: [ArticleTypesKey.IT], views: 100}}/>);
    expect(getByTestId("article-details")).toBeInTheDocument();
  })
})