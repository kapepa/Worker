import {render} from '@testing-library/react'
import {SkeletonShape} from "../../const/SkeletonShape";
import {Skeleton} from "./Skeleton";

describe("<Skeleton/>", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<Skeleton shape={SkeletonShape.Square}/>);
    expect(getByTestId("skeleton")).toBeInTheDocument();
  })
})