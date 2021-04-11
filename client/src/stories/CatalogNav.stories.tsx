import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { CatalogNav } from "../components/CatalogNav";

// This default export determines where your story goes in the story list
export default {
  title: "CatalogNav",
  component: CatalogNav,
};

const Template: Story<ComponentProps<typeof CatalogNav>> = (args) => (
  <CatalogNav {...args} />
);

export const Default = Template.bind({});
