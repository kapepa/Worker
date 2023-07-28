import {fireEvent, render, screen} from '@testing-library/react';
import {StoreProvider} from "./StoreProvider";
import {StateSchema} from "../config/StateSchema";

describe("<StoreProvider/>", () => {
  test("should be return base state.", () => {
    const mockState = { users: { loading: false, data: { id: "1", username: "MyName" } } } as StateSchema
    const getState = (state: StateSchema) => {
      expect(state.users).toEqual(mockState.users)
    };
    render(<StoreProvider children={<div/>} preloadedState={mockState} getState={getState}/>);
  })
})