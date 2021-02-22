import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Layout } from "../components/Layout";

// This default export determines where your story goes in the story list
export default {
  title: "Layout",
  component: Layout,
};

const Template: Story<ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args}>
    <p>Sample Text</p>
  </Layout>
);

export const Text = Template.bind({});
