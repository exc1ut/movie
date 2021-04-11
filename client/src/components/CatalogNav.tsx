import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";

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
  })
);

export const CatalogNav: React.FC<CatalogNavProps> = ({}) => {
  const { catalogNav: state } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      p={3}
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" justifyContent="space-between">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.menu}
        >
          <MenuItem className={classes.item} onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem className={classes.item} onClick={handleClose}>
            My account
          </MenuItem>
          <MenuItem className={classes.item} onClick={handleClose}>
            Logout
          </MenuItem>
        </Menu>
      </Box>
      <Box display="flex" justifyContent="space-between">
        here
      </Box>
    </Box>
  );
};
