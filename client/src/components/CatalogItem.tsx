import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

interface Props {
  title: string;
  count: number;
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
      overflow: "hidden",

      "& h5": {
        transition: "0.5s ease-in-out",
      },

      "&:hover img": {
        transform: "scale(1.2)",
      },
      "&:hover $layer": {
        opacity: 1,
      },
      "&:hover h5": {
        color: theme.palette.primary.light,
      },
    },
    img: {
      width: "100%",
      position: "absolute",
      zIndex: -2,
      filter: "brightness(0.8)",
      transition: "0.5s ease-in-out",
      transform: "scale(1.1)",
    },
    count: {
      backgroundColor: "rgba(21,31,48,0.85)",
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 7,
      "& h6": {
        fontWeight: 500,
        color: "#fff",
      },
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
  })
);

export const CatalogItem: React.FC<Props> = ({ title, count, img }) => {
  console.log(title);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.layer} />
      <img className={classes.img} src={img} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        height="100%"
        px={4}
        pb={4}
      >
        <Typography variant="h5">{title}</Typography>
        <div className={classes.count}>
          <Typography variant="subtitle1">{count}</Typography>
        </div>
      </Box>
    </div>
  );
};
