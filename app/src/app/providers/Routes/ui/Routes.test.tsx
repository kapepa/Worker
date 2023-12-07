import {screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils';
import {RenderWithMemoryRouter} from "../../../../shared/test/renderWithMemoryRouter";
import {RouterPath} from "../../../../shared/const/Routers";
import UserJSON from "../../../../shared/test/mock/user.json";
import {GetUsersRoles} from "../../../../entities/Users";

describe("<Router/>",  () => {
  let userMock = UserJSON;
  test("<About />", async () => {
    await act(async () => {
      RenderWithMemoryRouter({path: RouterPath.ABOUT});
    });
    expect(await screen.findByTestId("about")).toBeInTheDocument();
  })

  // test("<Admin />", async () => {
  //   await act(async () => {
  //     RenderWithMemoryRouter({path: RouterPath.ADMIN});
  //   });
  //
  //   // expect(await screen.findByTestId("admin")).toBeInTheDocument();
  //   screen.debug()
  // })

  test("<Home/>", async () => {
    await act(async () => {
      RenderWithMemoryRouter({path: RouterPath.HOME});
    });

    expect(await screen.findByTestId("home")).toBeInTheDocument();
  })
})