import { Story } from "@storybook/react/types-6-0";
import { ComponentProps } from "react";
import { CardUpdated } from "../components/CardUpdated/CardUpdated";
import { Grid } from "@material-ui/core"
// This default export determines where your story goes in the story list
export default {
    title: "CardUpdated",
    component: CardUpdated,
};

const Template: Story<ComponentProps<typeof CardUpdated>> = (args) => (
    <Grid container > <Grid item xs={12} sm={4} md={3} lg={2}> <CardUpdated {...args} /> </Grid></Grid>
);
const Large: Story<ComponentProps<typeof CardUpdated>> = (args) => (
    <Grid container > <Grid item xs={12} sm={6} md={4} lg={3}> <CardUpdated {...args} /> </Grid></Grid>
);

export const CardLarge = Large.bind({});
CardLarge.args = { type: 'large', title: 'Fast and Furious9', details: { genre: 'Genre', year: 2021, cost: 0, rating: 9.1 }, mainImage: 'https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg' }

export const CardSmall = Template.bind({});
CardSmall.args = { type: 'small', title: 'Fast and Furious9', details: { genre: 'Genre', year: 2021, cost: 0, rating: 9.1 }, mainImage: 'https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg' }