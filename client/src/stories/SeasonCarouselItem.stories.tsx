import {SeasonCarouselItem} from '../components/SeasonCarousel/SeasonCarouselItem/SeasonCarouselItem';
import {Story} from '@storybook/react/types-6-0';
import {ComponentProps} from 'react';


export default {
    title: "SeasonCarouselItem",
    component: "SeasonCarouselItem"
}

const Template: Story<ComponentProps<typeof SeasonCarouselItem>> = args => (
    <SeasonCarouselItem {...args} />
)

export const Text = Template.bind({});
Text.args = {text: "1st series", length: "53:45", img: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"}

