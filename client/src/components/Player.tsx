import React from 'react';
import Plyr from 'plyr-react';
import "plyr/dist/plyr.css"
import {
    makeStyles,
    createStyles,
    Theme,
    Grid
} from '@material-ui/core';

interface Props {
    url: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%'
    },
    video: {
        borderRadius: '10px',
        overflow: 'hidden'
    }
}));
const Player: React.FC<Props> = ({url}) => {
    const classes = useStyles();
    const config = {
        type: "video",
        sources: [
            {
                src: url,
                type: 'video/mp4',
                size: 720
            }
        ]
    };
    return (
        <div className={classes.video}>
            <Plyr
                source={config as any}
            />
        </div>
    )
}

export default Player;
