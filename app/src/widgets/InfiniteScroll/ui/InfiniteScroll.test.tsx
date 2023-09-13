import {render} from '@testing-library/react'
import {InfiniteScroll} from "./InfiniteScroll"

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
    const { getByTestId, getByText } = render(
      <InfiniteScroll scrollEnd={scrollEnd}>
        <div>{ "Mock text" }</div>
      </InfiniteScroll>
    );

    expect(getByTestId("infinite-scroll")).toBeInTheDocument();
    expect(getByText("Mock text")).toBeInTheDocument();
  })
})