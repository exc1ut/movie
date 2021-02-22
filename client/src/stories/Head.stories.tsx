import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Head } from "../components/Head";

// This default export determines where your story goes in the story list
export default {
  title: "Head",
  component: Head,
};

const Template: Story<ComponentProps<typeof Head>> = (args) => (
  <Head {...args} />
);

export const WithCallback = Template.bind({});

WithCallback.args = {
  callback: () => console.log("called"),
  title: "Popular",
};
