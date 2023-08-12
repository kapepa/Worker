import {fireEvent, render} from '@testing-library/react'
import {Select} from "./Select";
import {Countries} from "../../const/Countries";

describe("<Select/>", () => {
  let toTranslation:  (str: string | undefined) => string;
  let selected: (val: string) => void;

  beforeEach(() => {
    toTranslation = jest.fn((str) => "MockTranslation");
    selected = jest.fn((val) => {})
  })

  test("should be to have render select", () => {
    const { getByTestId, getByText, debug } = render(<Select
      name="test"
      selectList={[{value: Countries.USA, text: Countries.USA }, {value: Countries.BLR, text: Countries.BLR }]}
      toTranslation={ toTranslation }
      defaultValue={Countries.USA}
      selected={selected}
    />);

    expect(getByTestId("select")).toBeInTheDocument();
    expect(getByText(Countries.USA)).toBeInTheDocument();
    expect(getByText(Countries.BLR)).toBeInTheDocument();
  })

  test("should be reselect", () => {
    const { getByText } = render(<Select
      name="test"
      selectList={[{value: Countries.USA, text: Countries.USA }, {value: Countries.BLR, text: Countries.BLR }]}
      toTranslation={ toTranslation }
      defaultValue={Countries.USA}
      selected={selected}
    />);

    fireEvent.click(getByText(Countries.USA));
    expect(selected).toHaveBeenCalled()
  })
})