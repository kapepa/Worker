import { Decorator } from "@storybook/react";

const ModalDecorator: Decorator = (Story) => {
  return (
    <div>
      <Story />
      <div id="modals-container"/>
    </div>
  )
};

export default ModalDecorator;