import RenderWithTranslation from "../../../shared/test/renderWithTranslation";
import {PreLoaderAvatar} from "./PreLoaderAvatar";
import React from "react";

describe("<PreLoaderAvatar/>", () => {
  let alt: string = "alt";
  let symbol: string = "A";
  let size: number = 50;
  let api: boolean = false;
  let url: string = "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg";

  it("should be Loading", async () => {
    const { getByTestId } = RenderWithTranslation(<PreLoaderAvatar
      alt={alt}
      symbol={symbol}
      size={size}
      api={api}
      url={url}
    />)

    expect(getByTestId("skeleton")).toBeInTheDocument();
  })

  it("should be Default", async () => {
    const { getByTestId } = RenderWithTranslation(<PreLoaderAvatar
      alt={alt}
      symbol={symbol}
      size={size}
      api={api}
      url={undefined}
    />)

    expect(getByTestId("ico-img")).toBeInTheDocument();
  })
})