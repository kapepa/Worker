import {fireEvent, screen, render, waitFor, act} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginForm} from "./LoginForm";
import userEvent from '@testing-library/user-event';
import {LoginTypes} from "../../model/types/loginTypes";

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useForm: () => ({
    ...jest.requireActual('react-hook-form').useForm(),
    handleSubmit: (callback: any) => callback({ username: "Name", password: "Password" } as  LoginTypes),
  }),
}));

describe("<LoginForm/>", () => {
  const mockName: string = "Name";
  const mockPass: string = "Password";

  test("should be to have modal login", () => {
    ComponentRender(<LoginForm onClose={() => {}} />)
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  })

  test("should be to have modal login", async () => {
    const { getByRole } = render(<LoginForm onClose={() => {}} />);
    const name = await getByRole("name");
    const pass = await getByRole("password");

    fireEvent.input(name, { target: { value: mockName } });
    fireEvent.input(pass, { target: { value: mockPass } });

    expect(screen.getByDisplayValue(mockName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockPass)).toBeInTheDocument();
  })

  test("should be submit form", async () => {
    const { getByRole, getByTestId } = render(<LoginForm onClose={() => {}} />);
    const name = await getByRole("name") as HTMLInputElement;
    const pass = await getByRole("password") as HTMLInputElement;

    await userEvent.type(name, mockName);
    await userEvent.type(pass, mockPass);

    fireEvent.submit(getByTestId("form"));
  })
})