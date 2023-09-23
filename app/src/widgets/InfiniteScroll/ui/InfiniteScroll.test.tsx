import {InfiniteScroll} from "./InfiniteScroll"
import {RenderWithStore} from "../../../shared/test/renderWithStore";
import {StateSchema} from "../../../app/providers/Store";

jest.mock("react-router-dom",
  () => ({
    useLocation: () => ({pathname: "/"}),
    useNavigate: () => {}
  })
);

describe("<InfiniteScroll/>", () => {
  test("should be defined", () => {
    const scrollEnd = jest.fn();
    const mockObserveFn = () => {
      return {
        observe: jest.fn(),
        unobserve: jest.fn()
      };
    };

    window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);
    const { getByTestId, getByText } = RenderWithStore(
      <InfiniteScroll scrollEnd={scrollEnd} isEnd={true}>
        <div>{ "Mock text" }</div>
      </InfiniteScroll>,
      { scroll: { pages: { } } } as StateSchema
    );

    expect(getByTestId("infinite-scroll")).toBeInTheDocument();
    expect(getByText("Mock text")).toBeInTheDocument();
  })
})