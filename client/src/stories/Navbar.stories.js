import React from "react";
import Navbar from "../components/Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Main = Template.bind({});
