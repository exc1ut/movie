import { Box, Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { Card } from "../components/Card/Card";
import { FlatButton } from "../components/FlatButton";
import { Head } from "../components/Head";
import { HomeCarousel } from "../components/HomeCarousel";

interface Props {}

const data = {
  title: "Fast and Furious9",
  details: { genre: "Genre", year: 2021, cost: 0, rating: 9.1 },
};

function generatePhoto() {
  const digit = Math.floor(Math.random() * 90000) + 10000;
  return `https://picsum.photos/200/300?random=${digit}`;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Main: React.FC<Props> = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Head title="Best Movies of this season" />
      </Container>
      <HomeCarousel>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <Box px={2} width="100%" display="flex" justifyContent="center">
              <Card mainImage={generatePhoto()} type="large" {...data} />
            </Box>
          </div>
        ))}
      </HomeCarousel>
      <Container maxWidth="lg">
        <Head title="Popular" />

        <motion.div variants={container} initial="hidden" animate="visible">
          <Grid container spacing={5}>
            {[...new Array(18)].map((val, index) => (
              <Grid item lg={2} key={index}>
                <motion.div variants={item}>
                  <Card mainImage={generatePhoto()} type="small" {...data} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box width="100%" display="flex" justifyContent="center" my={5}>
          <FlatButton title="Load More" />
        </Box>
      </Container>
    </>
  );
};
