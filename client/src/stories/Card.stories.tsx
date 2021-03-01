import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Card } from "../components/Card/Card";

// This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const CardSmall = Template.bind({});
CardSmall.args = {type: 'large', title : 'Fast and Furious9',details : {genre:'Genre', year:2021, cost:0, rating:9.1 }, mainImage : 'https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg'}