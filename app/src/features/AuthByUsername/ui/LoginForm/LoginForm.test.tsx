import {fireEvent, screen} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginForm} from "./LoginForm";
import userEvent from '@testing-library/user-event';

describe("<LoginForm/>", () => {
  const mockName: string = "my@email.come";
  const mockPass: string = "123456";

  test("should be to have modal login", () => {
    ComponentRender(<LoginForm onClose={() => {}}/>)
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  })

  test("should be write down value in input", async () => {
    const { getByDisplayValue } = ComponentRender(
      <LoginForm onClose={() => {}} />,
      { reloadedState: { auth: { login: { email: mockName, password: mockPass } } } }
    );

    expect(getByDisplayValue(mockName)).toBeInTheDocument();
    expect(getByDisplayValue(mockPass)).toBeInTheDocument();
  })

  test("should be submit form", async () => {
    const { getByDisplayValue, getByTestId } = ComponentRender(
      <LoginForm onClose={() => {}} />,
      { reloadedState: { auth: { login: { email: mockName, password: mockPass } } } }
    );
    const name = await getByDisplayValue(mockName);
    const pass = await getByDisplayValue(mockPass);

    await userEvent.type(name, mockName);
    await userEvent.type(pass, mockPass);

    fireEvent.submit(getByTestId("form"));
  })
})
