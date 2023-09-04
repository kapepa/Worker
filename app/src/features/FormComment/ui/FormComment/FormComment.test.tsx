import {FormComment} from "./FormComment";
import ComponentRender from "../../../../shared/test/componentRender";
import {userEvent} from "@storybook/testing-library";

describe("<FormComment/>", () => {
  const mockText = "Some text";
  const onSendMock = jest.fn();

  test("should be defined", () => {
    const { getByTestId, getByDisplayValue } = ComponentRender(
      <FormComment onSend={onSendMock}/>,
      { reloadedState: { formComment: { loading: false, error: undefined, text: mockText } } }
    );
    expect(getByTestId("form-comment")).toBeInTheDocument();
    expect(getByDisplayValue(mockText)).toBeInTheDocument()
  })

  test("should be send", async () => {
    const { getByTestId, debug } = ComponentRender(
      <FormComment onSend={onSendMock}/>,
      { reloadedState: { formComment: { loading: false, error: undefined, text: mockText } } }
    );

    const form = getByTestId("form");
    await userEvent.type(form, "submit")

    // expect(onSendMock).toHaveBeenCalled();
  })
})