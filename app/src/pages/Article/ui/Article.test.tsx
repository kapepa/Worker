import {Article} from "./Article";
import ComponentRender from "../../../shared/test/componentRender";

describe("<Article/>", () => {
  test("should be defined", () => {
    const mockObserveFn = () => {
      return {
        observe: jest.fn(),
        unobserve: jest.fn()
      };
    };
    window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);

    const { getByTestId } = ComponentRender(<Article/>)
    expect(getByTestId("article")).toBeInTheDocument();
  })
})