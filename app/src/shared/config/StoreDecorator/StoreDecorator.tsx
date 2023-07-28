import {Decorator} from "@storybook/react";
import {Provider} from "react-redux";
import {CreateReduxStore, StateSchema} from "../../../app/providers/Store";
import {DeepPartial} from "@reduxjs/toolkit";

const StoreDecorator = (preloadedState: DeepPartial<StateSchema>) => {
  const store = CreateReduxStore(preloadedState as StateSchema);
  const decorator: Decorator = (Story) => (
    <Provider store={store}>
      <Story/>
    </Provider>
  );

  return decorator;
}

export default StoreDecorator;