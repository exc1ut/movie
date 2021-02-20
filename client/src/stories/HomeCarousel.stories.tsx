import { Box } from "@material-ui/core";
import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { Card } from "../components/Card/Card";
import { HomeCarousel } from "../components/HomeCarousel";

// This default export determines where your story goes in the story list
export default {
  title: "HomeCarousel",
  component: HomeCarousel,
};

const data = {
  title: "Fast and Furious9",
  details: { genre: "Genre", year: 2021, cost: 0, rating: 9.1 },
  mainImage: "https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg",
};

const Template: Story<ComponentProps<typeof HomeCarousel>> = (args) => (
  <HomeCarousel {...args}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div>
        <Box width="100%" display="flex" justifyContent="center">
          <Card type="large" {...data} />
        </Box>
      </div>
    ))}
  </HomeCarousel>
);

export const Text = Template.bind({});
