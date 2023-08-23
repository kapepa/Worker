import {render} from '@testing-library/react'
import {ViewDate} from "./ViewDate";
import {ColorView} from "../../const/ColorView";

describe("<ViewDate/>", () => {
  test("should be defined", () => {
    const date = new Date("2022-01-10T15:30:00+00:00");
    const { queryByText, getByTestId } = render(<ViewDate date={date} theme={ColorView.PrimaryDef}/>);

    expect(getByTestId("view-date")).toBeInTheDocument();
    expect(queryByText(/2022/i)).toBeInTheDocument();
  })
})