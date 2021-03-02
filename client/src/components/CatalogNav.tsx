import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setGenre,
  setSelectedSlider,
  setYear,
} from "../store/reducers/catalogNav";
import useGenres from "../utilities/useGenres";
import { IGenre } from "../interfaces/genre";

interface CatalogNavProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: 15,
    },
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: theme.palette.primary.contrastText,
      },
    },
    item: {
      transition: "0.2s ease-in-out",
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
    sliderRadio: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 15,
      padding: 5,
      "&>div": {
        margin: "0 5px",
        padding: "0 10px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: 25,
        cursor: "pointer",
      },
      zIndex: 2,
      "& span": {
        lineHeight: 1.8,
        fontWeight: 500,
        transition: "0.2s ease-in-out",
        "&:hover": {
          color: theme.palette.primary.light,
        },
      },
    },
    outline: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: -1,
      borderRadius: 10,
      padding: 5,
    },
  })
);

function generateYears() {
  const years: number[] = [];
  for (let i = 1985; i < 2020; i++) {
    years.push(i);
  }
  return years;
}

export const CatalogNav: React.FC<CatalogNavProps> = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [yearEl, setYearEl] = React.useState<null | HTMLElement>(null);

  const { catalogNav: state } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const genres = useGenres();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleYearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setYearEl(event.currentTarget);
  };

  const handleYearClose = (_, year: number | null = null) => {
    setYearEl(null);
    if (year !== null) dispatch(setYear(year));
  };

  const handleClose = (_, genre: IGenre | null = null) => {
    setAnchorEl(null);
    if (genre !== null) dispatch(setGenre(genre));
  };

  const handleBlur = () => {
    setAnchorEl(null);
    setYearEl(null);
  };

  const classes = useStyles();

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box
      className={classes.root}
      p={2}
      display="flex"
      justifyContent={matches ? "center" : "space-between"}
      flexWrap="wrap"
    >
      <Box display="flex" justifyContent="space-between">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {state.genre !== null ? state.genre.title : "All genres"}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleBlur}
          className={classes.menu}
        >
          {genres.data?.map((val, index) => (
            <MenuItem
              className={classes.item}
              onClick={(e) => {
                handleClose(e, val);
              }}
            >
              {val.title}
            </MenuItem>
          ))}
        </Menu>

        <Button
          aria-controls="year"
          aria-haspopup="true"
          onClick={handleYearClick}
        >
          {state.year !== null ? state.year : "Years"}
        </Button>
        <Menu
          id="year"
          anchorEl={yearEl}
          keepMounted
          open={Boolean(yearEl)}
          onClose={handleBlur}
          className={classes.menu}
        >
          {generateYears().map((val, index) => (
            <MenuItem
              className={classes.item}
              onClick={(e) => handleYearClose(e, val)}
            >
              {val}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box display="flex" justifyContent="center">
        <div className={classes.sliderRadio}>
          <AnimateSharedLayout>
            <Item
              isSelected={state.selectedSlider === "Feature"}
              title="Feature"
              onClick={() => dispatch(setSelectedSlider("Feature"))}
            />
            <Item
              isSelected={state.selectedSlider === "Popular"}
              title="Popular"
              onClick={() => dispatch(setSelectedSlider("Popular"))}
            />
            <Item
              isSelected={state.selectedSlider === "Newest"}
              title="Newest"
              onClick={() => dispatch(setSelectedSlider("Newest"))}
            />
          </AnimateSharedLayout>
        </div>
      </Box>
    </Box>
  );
};

interface ItemProps {
  title: "Feature" | "Popular" | "Newest";
  onClick: () => void;
  isSelected: boolean;
}

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const Item: React.FC<ItemProps> = ({ title, onClick, isSelected }) => {
  const classes = useStyles();
  return (
    <div onClick={onClick}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className={classes.outline}
          initial={false}
          animate={{ backgroundColor: "#151f30" }}
          transition={spring}
        />
      )}
      <Typography
        style={{ color: isSelected ? "#2f80ed" : "" }}
        component="span"
        variant="body2"
      >
        {title}
      </Typography>
    </div>
  );
};
