import RenderWithTranslation from "../../test/renderWithTranslation";
import {ImageLoader} from "./ImageLoader";

describe("<ImageLoader/>", () => {
  const loadImage= jest.fn();

  test("should be no selected", () => {
    const { getByText } = RenderWithTranslation(
      <ImageLoader
        name="img"
        loadImage={loadImage}
      />
    );

    expect(getByText("Choose image")).toBeInTheDocument();
    expect(getByText("No image was selected")).toBeInTheDocument();
  })

  test("should be loaded image", () => {
    const mockImage: string = "https://eimg.pravda.com/images/doc/0/b/0b9b29c-what-is-url-770x503.jpg";
    const { getByText, queryByText } = RenderWithTranslation(
      <ImageLoader
        name="img"
        loadImage={loadImage}
        entryImage={mockImage}
      />
    );

    expect(getByText("Choose image")).toBeInTheDocument();
    expect(queryByText("No image was selected")).not.toBeInTheDocument();
  })
})