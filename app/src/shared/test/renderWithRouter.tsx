import {ReactNode} from "react";
import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const RenderWithRouter = (component: ReactNode, path?: string) => {
  const route = !!path ? path : "/";

  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>
  )
}

export default RenderWithRouter;