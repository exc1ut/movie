import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

interface HeadProps {
  title: string;
  callback?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        color: theme.palette.primary.light,
      },
      cursor: "pointer",
      transition: "0.3s ease-in-out",
      fontWeight: 400,
      marginTop: 45,
      marginBottom: 45,
    },
  })
);

export const Head: React.FC<HeadProps> = ({ title, callback }) => {
  const classes = useStyles();

  return (
    <Typography
      color="textSecondary"
      variant="h4"
      className={classes.root}
      onClick={callback}
    >
      {title}
    </Typography>
  );
};
