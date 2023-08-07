import {render} from '@testing-library/react';
import {StoreProvider} from "./StoreProvider";
import {StateSchema} from "../config/StateSchema";
import { MemoryRouter } from "react-router-dom";


describe("<StoreProvider/>", () => {
  test("should be return base state.", () => {
    const mockState = { users: { loading: false, profile: { id: "1", username: "MyName" } } } as StateSchema
    const getState = (state: StateSchema) => {
      expect(state.users).toEqual(mockState.users)
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <StoreProvider children={<div/>} preloadedState={mockState} getState={getState}/>
      </MemoryRouter>
    );
  })

  test("should be return undefined", () => {
    const getState = (state: StateSchema) => {
      expect(state.users.profile).toBeUndefined();
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <StoreProvider children={<div/>} getState={getState}/>
      </MemoryRouter>
    );
  })
})