import RenderWithTranslation from "../../../../shared/test/renderWithTranslation";
import {ArticleRating} from "./ArticleRating";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import {fireEvent} from "@testing-library/react";
import RenderWithPortal from "../../../../shared/test/renderWithPortal";
import {ReactNode} from "react";
import * as rating from "../../api/rating.api";

const ratingMock = jest.mocked(rating, true);

jest.mock(
  "../../../../shared/ui/PortalModal/PortalModal",
  () => ({children}: {children: ReactNode}) => children
);

describe("<ArticleRating/>", () => {
  let ArticleMock = ArticleJSON.article;

  beforeEach(() => {
    jest.spyOn(ratingMock, "useGetArticlesQuery").mockReturnValue({ data: {}, isLoading: false, isError: false } as any);
    jest.spyOn(ratingMock, "useUpdateRatingMutation").mockReturnValue([() => {}] as any);
    jest.spyOn(ratingMock, "useCreateRatingMutation").mockReturnValue([() => {}, {}] as any);
  })

  test("should be defined", () => {
    const {getByText, getAllByTestId} = RenderWithTranslation(<ArticleRating id={ArticleMock.id}/>);

    expect(getAllByTestId("ico-img").length).toEqual(5);
    expect(getByText("Your rating of the article")).toBeInTheDocument();
  })

  test("should be click on star", async () => {
    const CreateRating = jest.fn();
    jest.spyOn(ratingMock, "useCreateRatingMutation").mockReturnValue([CreateRating, {}] as any);

    const {getAllByTestId, findByText, debug} = RenderWithPortal(<ArticleRating id={ArticleMock.id}/>);
    const stars = getAllByTestId("ico-img");

    fireEvent.click(stars[0]);
    const sendBtn = await findByText("Send");
    expect(sendBtn).toBeInTheDocument();
    fireEvent.click(sendBtn);
    expect(CreateRating).toHaveBeenCalled()
  })

  test("should be cancel", async () => {
    const CreateRating = jest.fn();
    jest.spyOn(ratingMock, "useCreateRatingMutation").mockReturnValue([CreateRating, {}] as any);

    const {getAllByTestId, findByText, debug} = RenderWithPortal(<ArticleRating id={ArticleMock.id}/>);
    const stars = getAllByTestId("ico-img");

    fireEvent.click(stars[0]);
    fireEvent.click(await findByText("Cancel"));
    expect(await findByText("Cancel")).toBeInTheDocument();
  })
})