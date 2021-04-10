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
import { setGenre, setSort, setLanguage, setQuality, setGenreID, setCurrentPage } from '../../store/reducers/catalogNav';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ContactSupportTwoTone } from '@material-ui/icons';
import styles from "./Filters.module.css"
interface Props {
    ctype: number
}
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

        },
        Selected: {
            backgroundColor: "#112e4c",
            color: "#fff",
            border: "none",
            outline: "none",
            margin: 0,
        }
    }
);


const Filters: React.FC<Props> = ({ ctype }) => {

    //console.log("Filterpage rendering!!");

    const classes = useStyles();
    const languages = ["Russian", "Uzbek", "English"];
    const quality = ["SD", "HD", "FULLHD"];
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const [openGenres, setOpenGenres] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const genreRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);
    const [qualityState, setQualityState] = useState("");
    const [langState, setLangState] = useState("");
    const [options, setOptions] = useState<string[]>([]);
    const genreObj = GenreMap();
    const sortMap = SortMap();
    const genres = Object.keys(GenreMap());
    const sorts = Object.keys(SortMap());


    const dispatch = useDispatch();
    const pickedFilter = useAppSelector((state: AppState) => {
        return state;
    });

    useEffect(() => {
        if (pickedFilter.catalogNav.currentPage !== 1) {
            dispatch(setCurrentPage(1));
        }
    }, [pickedFilter.catalogNav.genre, pickedFilter.catalogNav.quality, pickedFilter.catalogNav.language, pickedFilter.catalogNav.sort]);

    useEffect(() => {
        if (genres.length == 59) {
            setOptions(genres);
        }
        console.log("options: " + options);
    }, [genres.length]);

    const toggleGenres = () => {
        setOpenGenres(!openGenres);
        console.log(options);

    }
    const toggleSort = () => {
        setOpenSort(!openSort);

    }
    const handleLanguage = (index) => {
        setLangState(languages[index]);
        dispatch(setLanguage(index + 1));
    }
    const handleQuality = (index) => {
        setQualityState(quality[index]);
        dispatch(setQuality(index + 1));
    }
    const handleMenuItemClickGenres = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {

        dispatch(setGenre(options[index]));
        dispatch(setGenreID(genreObj[options[index]]));
        setOpenGenres(false);
    }
    const handleMenuItemClickSort = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setSelectedSort(sorts[index]);
        dispatch(setSort(sortMap[sorts[index]]));
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
                        {languages.map((item, index) => {
                            return <Button
                                className={item === langState ? classes.Selected : classes.Button}
                                onClick={() => handleLanguage(index)}
                            >{item}</Button>
                        })}
                    </ButtonGroup>
                </Grid>
                <Grid item lg={2} xs={12}>
                    <ButtonGroup variant="text">
                        {quality.map((item, index) => {
                            return <Button
                                className={item === qualityState ? classes.Selected : classes.Button}
                                onClick={() => handleQuality(index)}
                            >{item}</Button>
                        })}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <ButtonGroup>
                        <Button size="large" className={classes.ButtonLarge}>
                            {pickedFilter.catalogNav.genre ? pickedFilter.catalogNav.genre : "Genres"} </Button>
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
                        {options.length == 59 ? options.map((item, index) => {
                            return <div onClick={(e) => { handleMenuItemClickGenres(e, index) }}>{item}</div>
                        }) : null}
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
