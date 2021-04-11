import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import { CustomTabs } from "../components/Tab/CustomTabs";

export default {
  title: "Tab",
  component: CustomTabs,
};

const Template: Story<ComponentProps<typeof CustomTabs>> = (args) => (
  <CustomTabs />
);
export const Text = Template.bind({});
