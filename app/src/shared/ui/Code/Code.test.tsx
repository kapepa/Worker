import {render} from '@testing-library/react';
import {Code} from "./Code";

describe("<Code/>", () => {
  const code = "<!DOCTYPE html><html></html>"
  test("should be defined", () => {
    const { getByTestId, getByText } = render(<Code text={code}>{code}</Code>);

    expect(getByTestId("code")).toBeInTheDocument();
    expect(getByText(code)).toBeInTheDocument();
  })
})