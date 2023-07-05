import {ClassNames} from "./ClassNames";

describe("ClassNames", () => {
  test('with only first param', () => {
    expect(ClassNames('someClass')).toBe('someClass');
  });

  test("should be return without undefined", () => {
    expect(ClassNames('someClass', undefined)).toBe('someClass');
  })
})