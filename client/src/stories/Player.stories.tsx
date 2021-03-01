import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import Player from "../components/Player";
import {Grid} from '@material-ui/core';
import {Animals} from './CatalogItem.stories';

// This default export determines where your story goes in the story list
export default {
    title: "Player",
    component: Player,
};

const Template: Story<ComponentProps<typeof Player>> = (args) => (

    <div>
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Player {...(args as any)} />
            </Grid>
        </Grid>
    </div>
);

export const Plyr = Template.bind({});
Plyr.args = {
    url: 'https://files1.mediabox.uz/films/16143/videos/417d27b5709a6322bef1f15638c88a2a1613729887.mp4?st=rPo3E65x0mxhsnN4no3HWg&e=1613862920'
};
