import React from "react";
import SideDrawer from "../components/Navbar/mini_tools/SideDrawer";

export default {
  title: "SideDrawer",
  component: SideDrawer,
};
const Template = (args) => <SideDrawer {...args} />;

export const Another = Template.bind({});
