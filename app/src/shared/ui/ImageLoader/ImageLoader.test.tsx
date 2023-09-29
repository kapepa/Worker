import RenderWithTranslation from "../../test/renderWithTranslation";
import {ImageLoader} from "./ImageLoader";

describe("<ImageLoader/>", () => {
  test("should be defined", () => {
    const loadImage= jest.fn();
    const { getByText } = RenderWithTranslation(
      <ImageLoader
        name="img"
        loadImage={loadImage}
      />
    );

    expect(getByText("Choose image")).toBeInTheDocument();
    expect(getByText("No image was selected")).toBeInTheDocument();
  })

  test("should be defined", () => {
    const loadImage= jest.fn();
    const { getByText } = RenderWithTranslation(
      <ImageLoader
        name="img"
        loadImage={loadImage}
      />
    );

    expect(getByText("Choose image")).toBeInTheDocument();
    expect(getByText("No image was selected")).toBeInTheDocument();
  })
})