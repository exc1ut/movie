import React from "react";
import Card from '../components/Card/Card'
export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
Large.args = {type:"large"};