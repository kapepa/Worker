import {ReactNode} from "react";
import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const RenderWithRouter = (component: ReactNode) => {
  return render(
    <MemoryRouter initialEntries={[]}>
      {component}
    </MemoryRouter>
  )
}

export default RenderWithRouter;