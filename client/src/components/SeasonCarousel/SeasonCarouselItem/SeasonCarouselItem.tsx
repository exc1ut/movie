import {
    Theme,
    createStyles,
    makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Box
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {theme} from '../../../config/theme';
import React from 'react';

interface Props {
    text: string;
    length: string;
    img: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: 172,
            borderRadius: 30,
            position: "relative",
            cursor: "pointer",
            overflow: "hidden"
        },
        cardContent: {
            backgroundColor: theme.palette.background.default
        },
        img: {
            width: "100%",
            position: "absolute",
            zIndex: -2,
            filter: "brightness(0.8)",
            transition: "0.5s ease-in-out",
            transform: "scale(1.1)"
        },
        layer: {

        }
    })
);

export const SeasonCarouselItem: React.FC<Props> = ({text, length, img}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.layer}/>
            <img className={classes.img} src={img} alt="image of the movie"/>
            <Box
                display="flex"
                alignItems="flex-end"
                height="100%"
                px={4}
                pb={4}
            >
                <Typography>
                    <PlayCircleOutlineIcon /> {length}
                </Typography>
            </Box>
        </div>
    );
}
