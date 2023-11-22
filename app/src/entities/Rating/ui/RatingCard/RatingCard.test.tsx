import RenderWithPortal from "../../../../shared/test/renderWithPortal";
import {RatingCard} from "./RatingCard";
import {fireEvent} from "@testing-library/react";
import React from "react";

jest.mock(
  "../../../../shared/ui/PortalModal/PortalModal",
  () => (props: {children: React.ReactNode}) => {
    const { children } = props;
    return <div>{children}</div>
  })

describe("<RatingCard/>", () => {
  const mockTitle: string = "Rating";
  test("should be defined", () => {
    const {getAllByTestId, getByText} = RenderWithPortal(<RatingCard title={mockTitle}/>);

    expect(getAllByTestId("ico-img").length).toEqual(5);
    expect(getByText(mockTitle)).toBeInTheDocument();
  })

  test("click on star", async () => {
    const mockCallback = jest.fn();
    const {getAllByTestId, findByText, debug} = RenderWithPortal(<RatingCard callback={mockCallback}/>);

    const stars = getAllByTestId("ico-img");
    fireEvent.click(stars[1]);
    expect(await findByText("Are you sure you want to leave a rating?")).toBeInTheDocument();
    fireEvent.click(await findByText("Send"));
    expect(mockCallback).toHaveBeenCalled();
  })
})