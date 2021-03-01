import {
  Box,
  Container,
  createStyles,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Logo from "../images/logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import RedditIcon from "@material-ui/icons/Reddit";
import YouTubeIcon from "@material-ui/icons/YouTube";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    text: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    item: {
      padding: 0,
    },
    listLink: {
      transition: "0.25s ease-in-out",
      "&:hover": {
        color: theme.palette.primary.light,
        textDecoration: "none",
      },
    },
    divider: {
      backgroundColor: theme.palette.primary.light,
      marginTop: 50,
      marginBottom: 50,
      opacity: 0.15,
    },
  })
);

export const Footer: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid alignContent="center" container spacing={6}>
          <Grid item xs={12} sm={8} lg={4}>
            <Box width="70%">
              <img src={Logo} />
              <Typography
                className={classes.text}
                variant="caption"
                component="p"
                color="textSecondary"
              >
                Movies & TV Shows, Online cinema, Movie database HTML Template.
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <FacebookIcon fontSize="large" htmlColor="#0A80EC" />
                <TwitterIcon fontSize="large" htmlColor="#1DA1F2" />
                <InstagramIcon fontSize="large" htmlColor="#71757B" />
                <RedditIcon fontSize="large" htmlColor="#FF4500" />
                <YouTubeIcon fontSize="large" htmlColor="#FF0000" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <div>
                <Box
                  style={{ color: "#fff" }}
                  mb={2}
                  fontSize={18}
                  fontWeight="fontWeightBold"
                >
                  FlixTV
                </Box>
                <List disablePadding dense>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="My profile" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Pricing plans" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Contacts" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="About us" />
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <div>
                <Box
                  style={{ color: "#fff" }}
                  mb={2}
                  fontSize={18}
                  fontWeight="fontWeightBold"
                >
                  Browse
                </Box>
                <List disablePadding dense>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Live TV" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Live News" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Live Sports" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Streaming Library" />
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <div>
                <Box
                  style={{ color: "#fff" }}
                  mb={2}
                  fontSize={18}
                  fontWeight="fontWeightBold"
                >
                  FlixTV
                </Box>
                <List disablePadding dense>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Tv Shows" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Movies" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Kids" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Collection" />
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <div>
                <Box
                  style={{ color: "#fff" }}
                  mb={2}
                  fontSize={18}
                  fontWeight="fontWeightBold"
                >
                  Help
                </Box>
                <List disablePadding dense>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Account & Billing" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Plans & Pricing" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Supported Devices" />
                    </Link>
                  </ListItem>
                  <ListItem className={classes.item}>
                    <Link
                      color="textPrimary"
                      className={classes.listLink}
                      href="#"
                    >
                      <ListItemText primary="Accessibility" />
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Divider className={classes.divider} light />
        <Grid container spacing={1}>
          <Grid item sm={12} md={8}>
            <Typography variant="body2">
              © FlixTV.template, 2021. Created by{" "}
              <Link href="#" color="textPrimary" className={classes.listLink}>
                Dream Team
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box width="100%" display="flex" justifyContent="space-around">
              <Link href="#" color="textPrimary" className={classes.listLink}>
                Privacy policy
              </Link>
              <Link href="#" color="textPrimary" className={classes.listLink}>
                Terms and conditions
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
