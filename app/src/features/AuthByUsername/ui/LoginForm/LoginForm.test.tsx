import {fireEvent, screen} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginForm} from "./LoginForm";
import userEvent from '@testing-library/user-event';

describe("<LoginForm/>", () => {
  // const mockName: string = "my@email.come";
  // const mockPass: string = "123456";

  test("should be to have modal login", () => {
    // ComponentRender(<LoginForm onClose={() => {}}/>)
    // expect(screen.getByText(/Login/i)).toBeInTheDocument();
  })

  test("should be write down value in input", async () => {
    // const { getByRole } = ComponentRender(<LoginForm onClose={() => {}} />);
    // const name = await getByRole("email");
    // const pass = await getByRole("password");
    //
    // fireEvent.input(name, { target: { value: mockName } });
    // fireEvent.input(pass, { target: { value: mockPass } });
    //
    // expect(screen.getByDisplayValue(mockName)).toBeInTheDocument();
    // expect(screen.getByDisplayValue(mockPass)).toBeInTheDocument();
  })

  test("should be submit form", async () => {
    // const { getByRole } = ComponentRender(<LoginForm onClose={() => {}} />);
    // const name = await getByRole("email") as HTMLInputElement;
    // const pass = await getByRole("password") as HTMLInputElement;
    //
    // await userEvent.type(name, mockName);
    // await userEvent.type(pass, mockPass);

    // fireEvent.submit(getByTestId("form"));
  })
})