import {Decorator} from "@storybook/react";
import {CSSProperties} from "react";

const StylesDecorator = (styles?: CSSProperties): any => {
  const decorator: Decorator = (Story) => (
      <Story {...styles}/>
  );

  return decorator;
}

export default StylesDecorator;