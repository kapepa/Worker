import RenderWithForm from "../../../shared/test/renderWithForm";
import {InputDynamic} from "./InputDynamic";
import EmailMockType from "../../../shared/test/mock/login.json";
import {BgInputEnum} from "../../../shared/const/BgInput";
import {fireEvent} from "@testing-library/react";

describe("<InputDynamic/>", () => {
  const emailMockType = EmailMockType.email;
  const mockValue = "my@email.com";
  const mockChange = jest.fn();

  test("should be defined",() => {
    const { getByText, getByDisplayValue } = RenderWithForm(<InputDynamic
      theme={BgInputEnum.WHITE_BG}
      name={emailMockType.name}
      label={emailMockType.label}
      onChange={ mockChange }
      validation={emailMockType.validation}
    />, {defaultValues: { email: mockValue }})

    expect(getByText(emailMockType.label)).toBeInTheDocument();
    expect(getByDisplayValue(mockValue)).toBeInTheDocument();
  })

  test("should be change",() => {
    const { getByTestId, getByDisplayValue, debug } = RenderWithForm(<InputDynamic
      theme={BgInputEnum.WHITE_BG}
      name={emailMockType.name}
      label={emailMockType.label}
      onChange={ mockChange }
      validation={emailMockType.validation}
    />, {defaultValues: { email: "" }})

    const input = getByTestId("input")
    fireEvent.change(input, {
      target: { value: mockValue },
    });

    expect(getByDisplayValue(mockValue)).toBeInTheDocument();
  })
})