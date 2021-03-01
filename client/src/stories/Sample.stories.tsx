import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Sample } from "../components/Sample";

// This default export determines where your story goes in the story list
export default {
  title: "Sample",
  component: Sample,
};

const Template: Story<ComponentProps<typeof Sample>> = (args) => (
  <Sample {...args} />
);

export const Text = Template.bind({});
