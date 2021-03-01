<<<<<<< HEAD
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

interface FlatButtonProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#151f30",
      color: theme.palette.text.primary,
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 400,
      "&:hover": {
        background: theme.palette.primary.light,
      },
    },
  })
);

export const FlatButton: React.FC<FlatButtonProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} color="primary" variant="contained">
      {title}
    </Button>
  );
};
=======
import {
  Button,
  ButtonProps,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

interface FlatButtonProps extends ButtonProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#151f30",
      color: theme.palette.text.primary,
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25,
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 400,
      "&:hover": {
        background: theme.palette.primary.light,
      },
    },
  })
);

export const FlatButton: React.FC<FlatButtonProps> = ({ title, ...rest }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      color="primary"
      variant="contained"
      {...rest}
    >
      {title}
    </Button>
  );
};
>>>>>>> 9722e18f2d46be52ed6d944305b410ce0332c357
