import { FC } from "react";
import { Decorator } from "@storybook/react";
import { ThemeButtonEnum } from "../../ui/Button/Button";

const ButtonDecorator = (theme: ThemeButtonEnum) => {
  const decorator: Decorator = (Story) => (<div className={`app ${theme}`}><Story /></div>);
  return decorator;
}

export default ButtonDecorator;