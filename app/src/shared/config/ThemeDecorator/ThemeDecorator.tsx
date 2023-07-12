import { ThemeEnum } from "../../../app/contexts/Theme/lib/ThemeContext";
import { Decorator } from "@storybook/react";

const ThemeDecorator = (theme: ThemeEnum) => {
  const decorator: Decorator = (Story) => (<div className={`app ${theme}`}><Story /></div>);
  return decorator;
}

export default ThemeDecorator;
