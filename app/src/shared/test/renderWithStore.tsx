import {ReactNode} from "react";
import {render} from "@testing-library/react"
import {StateSchema, StoreProvider} from "../../app/providers/Store";

const RenderWithStore = (component: ReactNode, preloadedState: StateSchema = {} as StateSchema) => {
  return render(
    <StoreProvider preloadedState={preloadedState}>
      {component}
    </StoreProvider>
  )
}

export {RenderWithStore}