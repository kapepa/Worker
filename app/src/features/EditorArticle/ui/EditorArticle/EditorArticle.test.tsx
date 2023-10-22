import {EditorArticle} from "./EditorArticle";
import ComponentRender from "../../../../shared/test/componentRender";

describe("<EditorArticle/>", () => {
  const sendCallback = jest.fn();

  test("should be defined", () => {
    const {getByText} =  ComponentRender(
      <EditorArticle
        isEdit={false}
        record={{}}
        sendCallback={sendCallback}
      />
    );

    expect(getByText("Create an article")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Subtitle")).toBeInTheDocument();
    expect(getByText("Choose image")).toBeInTheDocument();
    expect(getByText("No image was selected")).toBeInTheDocument();
    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("Blocks")).toBeInTheDocument();
    expect(getByText("Create")).toBeInTheDocument();
  })
})