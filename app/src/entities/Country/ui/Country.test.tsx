import {Country} from "./Country";
import {Countries} from "../../../shared/const/Countries";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

describe("<Country/>", () => {
  let selected: (val: Countries) => void;

  beforeEach(() => {
    selected = jest.fn((val) => {});
  })

  test("should be defined", () => {
    const { getByText, container, debug} = RenderWithTranslation(<Country selected={selected} defaultVal={Countries.USA} label="Country"/>);
    const country = container.getElementsByClassName("select__drop_arrow");

    expect(getByText(/Country/ig)).toBeInTheDocument();
    expect(country.length).toBe(7);
  })
})