import { FC } from "react";
import { BrowserRouter} from 'react-router-dom';
import { Decorator } from "@storybook/react";

const RouterDecorator: Decorator = (Story) => (<BrowserRouter><Story /></BrowserRouter>);

export default RouterDecorator;