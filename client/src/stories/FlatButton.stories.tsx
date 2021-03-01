import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { FlatButton } from "../components/FlatButton";

// This default export determines where your story goes in the story list
export default {
  title: "FlatButton",
  component: FlatButton,
};

const Template: Story<ComponentProps<typeof FlatButton>> = (args) => (
  <FlatButton {...args} />
);

export const CardSmall = Template.bind({});
