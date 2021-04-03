import React, { ForwardedRef, useEffect, useRef, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Container, ButtonGroup, Button, ClickAwayListener, Grow, Paper, } from '@material-ui/core'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import { motion } from "framer-motion"
import { useQuery } from "react-query"
import axios from 'axios';
import { AppState, useAppDispatch, useAppSelector } from "../../store/store"
import { SortMap } from "./SortMap"
import { GenreMap } from "./Maps";
import { IGenre } from "../../interfaces/genre"
import { setGenre } from '../../store/reducers/catalogNav';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ContactSupportTwoTone } from '@material-ui/icons';
import styles from "./Filters.module.css"
interface Props { }
interface State {
    genre: {
        type: string,
        value: string
    }
    country: {
        type: string,
        value: string
    }
    quality: {
        type: string,
        value: string
    }
    sort: {
        type: string,
        value: string
    }
}



const useStyles = makeStyles(
    {
        Button: {
            backgroundColor: "#001c31",
            color: "#eee",
            border: "none",
            outline: "none",
            margin: 0,
        },
        ToggleButton: {
            backgroundColor: "#101c3f"
        },
        ButtonLarge: {
            backgroundColor: "#001c31",
            color: "#eee",
            border: "none",
            outline: "none",
            margin: 0,
            width: "175px"

        }

    }
);


const Filters: React.FC<Props> = () => {
    const classes = useStyles();
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const [openGenres, setOpenGenres] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const genreRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);
    const [options, setOptions] = useState<string[]>([]);
    const genres = Object.keys(GenreMap());
    const sorts = Object.keys(SortMap());


    const dispatch = useDispatch();
    const pickedGenre = useAppSelector((state: AppState) => {
        return state;
    });
    // console.log(`pickedGenre : ${pickedGenre.catalogNav.genre}`);
    useEffect(() => {
        setOptions(genres);
        console.log(options);
    }, []);

    const toggleGenres = () => {
        setOpenGenres(!openGenres);
        console.log(options);

    }
    const toggleSort = () => {
        setOpenSort(!openSort);

    }
    const handleMenuItemClickGenres = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedGenre(options[index]);
        dispatch(setGenre(options[index]));
        setOpenGenres(false);
    }
    const handleMenuItemClickSort = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedSort(options[index]);
        //  dispatch(setGenre(options[index]));
        setOpenSort(false);
    }
    const [filter, setFilter] = useState<State>({
        genre: {
            type: 'genre',
            value: ''
        },
        country: {
            type: 'country',
            value: ''
        },
        quality: {
            type: 'quality',
            value: 'HD'
        },
        sort: {
            type: 'sort',
            value: ''
        }

    });
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12}>
                    <ButtonGroup variant="text" css={{ boder: "none" }}>
                        <Button className={classes.Button}>Uzbek</Button>
                        <Button className={classes.Button}>Russian</Button>
                        <Button className={classes.Button}>English</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item lg={2} xs={12}>
                    <ButtonGroup variant="text">
                        <Button className={classes.Button}>SD</Button>
                        <Button className={classes.Button}>FullHD</Button>
                        <Button className={classes.Button}>HD</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <ButtonGroup>
                        <Button size="large" className={classes.ButtonLarge}>
                            {pickedGenre ? pickedGenre.catalogNav.genre : "Genres"} </Button>
                        <Button
                            size="small"
                            className={classes.ToggleButton}
                            onClick={toggleGenres} >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <motion.div
                        className={styles.DropDown}
                        initial={{
                            opacity: 0,
                            height: 0,
                            y: 0
                        }}
                        animate={openGenres ? {
                            opacity: 1,
                            height: 300,
                            y: 0
                        } : { opacity: 0, height: 0, y: 0 }}>
                        {options.map((item, index) => {
                            return <div onClick={(e) => { handleMenuItemClickGenres(e, index) }}>{item}</div>
                        })}
                    </motion.div>
                </Grid>
                <Grid item xs={12} lg={3} style={{ position: "relative" }}>
                    <ButtonGroup>
                        <Button size="large" className={classes.ButtonLarge}>
                            {selectedSort ? selectedSort : "Sort By"} </Button>
                        <Button
                            size="small"
                            className={classes.ToggleButton}
                            aria-controls={openGenres ? 'split-button-menu' : undefined}
                            aria-expanded={openGenres ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={toggleSort}

                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <motion.div
                        className={styles.DropDown}
                        initial={{
                            opacity: 0,
                            height: 0,
                            y: 0
                        }}
                        animate={openSort ? {
                            opacity: 1,
                            height: 300,
                            y: 0
                        } : { opacity: 0, height: 0, y: 0 }}>
                        {sorts.map((item, index) => {
                            return <div onClick={(e) => { handleMenuItemClickSort(e, index) }}>{item}</div>
                        })}
                    </motion.div>

                </Grid>

            </Grid>
        </Container >

    );
}

export default React.memo(Filters);
