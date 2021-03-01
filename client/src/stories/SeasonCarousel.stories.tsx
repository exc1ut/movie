import {Box, Container} from "@material-ui/core";
import {Story} from "@storybook/react/types-6-0";
import {ComponentProps} from "react";
import {SeasonCarouselItem} from "../components/SeasonCarousel/SeasonCarouselItem/SeasonCarouselItem";
import {SeasonCarousel} from '../components/SeasonCarousel/SeasonCarousel';


export default {
    title: "SeasonCarousel",
    component: SeasonCarousel,
};

const data = {
    length: "54:14",
    text: "1st series",
    img: "https://i.ytimg.com/vi/aSiDu3Ywi8E/maxresdefault.jpg",
};

const Template: Story<ComponentProps<typeof SeasonCarousel>> = (args) => (
    <Container maxWidth="lg">
        <SeasonCarousel {...args}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div>
                    <Box px={4} width="100%" display="flex" justifyContent="center">
                        <SeasonCarouselItem {...data}/>
                    </Box>
                </div>
            ))}
        </SeasonCarousel>
    </Container>

);

export const Text = Template.bind({});
