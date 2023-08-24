import {render} from '@testing-library/react';
import {ArticleDetails} from "./ArticleDetails";
import {ArticleTypesKey} from "../../model/types/articleType";

describe("ArticleDetails", () => {
  test("should be defined", () => {
    const { getByTestId, getByText } = render(<ArticleDetails date={{ id: "id", title: "Title", img: "", subtitle: "Subtitle", type: [ArticleTypesKey.IT], views: 100}}/>);
    expect(getByTestId("article-details")).toBeInTheDocument();
    expect(getByText(/100/ig)).toBeInTheDocument();
    expect(getByText(/Subtitle/ig)).toBeInTheDocument();
  })
})