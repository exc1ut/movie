import Slider from 'react-slick';
import {createStyles, IconButton, makeStyles, Theme} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface Props {
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%'
    },
    video: {
        borderRadius: '10px',
        overflow: 'hidden'
    },
    leftActionArrow: {
        position: 'absolute',
        top: '50%',
        left: -30,
        transform: 'translateY(-50%)',
        zIndex: 11111,
        backgroundColor: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    },
    rightActionArrow: {}
}));

function LeftArrow(props: any) {
    const {onClick, classes} = props;
    return (
        <IconButton className={`${classes.leftActionArrow}`} onClick={onClick}>
            <ArrowBackIcon style={{color: '#fff'}}/>
        </IconButton>
    );
}

function RightArrow(props: any) {
    const {onClick, classes} = props;
    return (
        <div className={`${classes.rightActionArrow}`} onClick={onClick}>
        </div>
    );
}

export const SeasonCarousel: React.FC<Props> = ({children}) => {
    const classes = useStyles();
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <RightArrow classes={classes}/>,
        prevArrow: <LeftArrow classes={classes}/>,
    }
    return <Slider {...settings}>{children}</Slider>
}
