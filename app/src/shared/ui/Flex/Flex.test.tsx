import {render} from '@testing-library/react';
import {Flex} from "./Flex";

describe("<Flex/>", () => {
  test("should be defined", () => {
    const {getByText} = render(
      <Flex>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Flex>
    )

    expect(getByText("One")).toBeInTheDocument();
    expect(getByText("Two")).toBeInTheDocument();
    expect(getByText("Two")).toBeInTheDocument();
  })

  test("to have class", () => {
    const {getByTestId} = render(
      <Flex max gap={8} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Flex>
    )
    const flex = getByTestId("flex");

    expect(flex).toHaveClass("flex");
    expect(flex).toHaveClass("flex__max");
    expect(flex).toHaveClass("flex__gap--8");
    expect(flex).toHaveClass("flex__flex-direction--column");
    expect(flex).toHaveClass("flex__justify-content--center");
    expect(flex).toHaveClass("flex__align-items__center");
  })
})