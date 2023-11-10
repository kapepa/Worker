import ComponentRender from "../../../shared/test/componentRender";
import {Admin} from "./Admin";
import {Role} from "../../../entities/Users";


describe("Admin", () => {
  test("should be defined", () => {
    const { getByText } = ComponentRender(
      <Admin />,
      {
        reloadedState: {
          users: {
            roles: {
              [Role.ADMIN]: true,
              [Role.MANAGER]: false,
              [Role.USER]: false,
            },
          }
        }
      }
    );

    expect(getByText("Admin")).toBeInTheDocument();
  })
})