import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Footer } from "../components/Footer";

// This default export determines where your story goes in the story list
export default {
  title: "Footer",
  component: Footer,
};

const Template: Story<ComponentProps<typeof Footer>> = (args) => (
  <Footer {...args} />
);

export const Text = Template.bind({});
