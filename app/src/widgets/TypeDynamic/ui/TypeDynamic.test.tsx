import RenderWithForm from "../../../shared/test/renderWithForm";
import {TypeDynamic} from "./TypeDynamic";

describe("<TypeDynamic/>", () => {
  test("should be defined", () => {
    const toggleType = jest.fn();
    const {debug, getByText} = RenderWithForm(
      <TypeDynamic
        name="type"
        label="Type"
        validation={{ required: { value: true, message: "Type is required" } }}
        onToggleType={toggleType}
      />,  { defaultValues: {  } });

    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("IT")).toBeInTheDocument();
    expect(getByText("Science")).toBeInTheDocument();
    expect(getByText("Economy")).toBeInTheDocument();
  })
})