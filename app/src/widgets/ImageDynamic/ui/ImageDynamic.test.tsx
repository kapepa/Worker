import RenderWithForm from "../../../shared/test/renderWithForm";
import {ImageDynamic} from "./ImageDynamic";

describe("<ImageDynamic/>", () => {
  const loadImage = jest.fn();

  test("should be defined", () => {
    const {getByText} = RenderWithForm(
      <ImageDynamic
        name="img"
        validation={{ required: { value: true, message: "required.img" } }}
        loadImage={loadImage}
      />,
      {defaultValues: { img: "" }}
    );

    expect(getByText("Choose image")).toBeInTheDocument();
    expect(getByText("No image was selected")).toBeInTheDocument();
  })

  test("should be loaded image", () => {
    const {getByText} = RenderWithForm(
      <ImageDynamic
        name="img"
        validation={{ required: { value: true, message: "required.img" } }}
        loadImage={loadImage}
      />,
      {defaultValues: { img: "https://eimg.pravda.com/images/doc/0/b/0b9b29c-what-is-url-770x503.jpg" }}
    );

    expect(getByText("Choose image")).toBeInTheDocument();
  })

})