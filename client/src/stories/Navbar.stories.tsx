import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import Navbar from "../components/Navbar/Navbar";

// This default export determines where your story goes in the story list
export default {
  title: "Navbar",
  component: Navbar,
};

const Template: Story<ComponentProps<typeof Navbar>> = (args) => (
  <Navbar {...(args as any)} />
);

export const Text = Template.bind({});
