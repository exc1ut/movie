import { Grid } from "@material-ui/core";
import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { CatalogItem } from "../components/CatalogItem";

// This default export determines where your story goes in the story list
export default {
  title: "CatalogItem",
  component: CatalogItem,
};

const Template: Story<ComponentProps<typeof CatalogItem>> = (args) => (
  <Grid container spacing={2}>
    <Grid item sm={6} xs={12} md={4} lg={3}>
      <CatalogItem {...args} />
    </Grid>
  </Grid>
);

export const Animals = Template.bind({});

Animals.args = {
  img:
    "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
  title: "Animals",
  count: 322,
};
