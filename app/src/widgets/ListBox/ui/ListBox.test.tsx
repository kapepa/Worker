import {fireEvent, render, screen} from '@testing-library/react';
import {ListBox} from "./ListBox";

describe("<ListBox/>", () => {
  const list = [
    { name: 'Durward Reynolds', unavailable: false },
    { name: 'Kenton Towne', unavailable: false },
    { name: 'Therese Wunsch', unavailable: false },
    { name: 'Benedict Kessler', unavailable: false },
    { name: 'Katelyn Rohan', unavailable: false },
  ];
  const callbackMock = jest.fn();

  test("should be defined", () => {
    const { getByText } = render(<ListBox list={list} callback={callbackMock} defaultValue={list[0]} />);
    expect(getByText(list[0].name)).toBeInTheDocument();
  });

  test("should to be click", () => {
    const { getByText } = render(<ListBox list={list} callback={callbackMock} defaultValue={list[0]} />);
    const def = getByText(list[0].name);

    fireEvent.click(def);
    const clickList = getByText(list[1].name);
    fireEvent.click(clickList);
    expect(callbackMock).toHaveBeenCalled();
    expect(getByText(list[1].name)).toBeInTheDocument();
  })
})