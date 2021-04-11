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
            height: 200,
            cursor: "pointer",
            "&:hover img": {
                transform: "scale(1.2)"
            },
            "& h5, svg": {
                transition: "0.5s ease-in-out",
            },
            "&:hover $layer": {
                opacity: 1
            },
            "&:hover h5": {
                color: theme.palette.primary.light,
            },
            "&:hover svg": {
                color: theme.palette.primary.light,
            },

        },
        top: {
            height: 140,
            borderRadius: 16,
            position: "relative",
            overflow: "hidden",
            fontSize: 14
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
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            opacity: 0,
            transition: "0.3s ease-in-out",
            background:
                "linear-gradient(180deg,rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%);",
        },
        bottom: {
            marginTop: 15
        }
    })
);

export const SeasonCarouselItem: React.FC<Props> = ({text, length, img}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.layer}/>
                <img className={classes.img} src={img} alt="image of the movie"/>
                <Box
                    display="flex"
                    alignItems="flex-end"
                    height="100%"
                    px={4}
                    pb={4}
                >
                    <PlayCircleOutlineIcon style={{fontSize: 30, fontWeight: 400}}/>
                    <Typography align="center">
                        {length}
                    </Typography>
                </Box>
            </div>
            <div className={classes.bottom}>
                <Typography variant="h5">
                    {text}
                </Typography>
            </div>

        </div>
    );
}
