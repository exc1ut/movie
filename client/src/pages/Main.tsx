import { Box, Card, Container, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { CardUpdated } from "../components/CardUpdated/CardUpdated";
import { CatalogNav } from "../components/CatalogNav";
import { FlatButton } from "../components/FlatButton";
import { Head } from "../components/Head";
import { HomeCarousel } from "../components/HomeCarousel";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPopular, fetchTeasers } from "../utilities/queries";
import usePopular from "../utilities/usePopular";
import { Link } from "react-router-dom"
import React from "react";


interface Props { }

const useStyles = makeStyles({
  Container: {
    width: "95%",
  },
});
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const Main: React.FC<Props> = () => {
  const classes = useStyles()

  const { data: teaser, isLoading } = useQuery("teaser", fetchTeasers);
  const page = useRef(0);
  console.log(page);

  const popular = useInfiniteQuery("popular", fetchPopular, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup.data?.length === 18;
      if (!morePagesExist) return false;
      return allGroups.length + 1;
    },
  });

  console.log(popular)



  if (popular.isLoading) return null;


  return (
    <>
      <Container maxWidth="lg">

        <Head title="Best Movies of this season" />
      </Container>
      <HomeCarousel>
        {teaser ? teaser.data.map((val, index) => (
          <div key={index}>
            <Box px={1} width="100%" display="flex" justifyContent="center">
              <CardUpdated
                mainImage={val.poster}
                title={val.title}
                details={{
                  cost: 0,

                  genre: val.keywords.length > 0 ? val.keywords[0].title : "",

                  rating: val.rating_imdb,
                  year: parseInt(val.release_time),
                }}
                type="large"
              />
            </Box>
          </div>
        )) : null}
      </HomeCarousel>
      <Container maxWidth="lg" className={classes.Container}>
        <Head title="Popular" />
        <Box pb={3}>
          <CatalogNav />
        </Box>
        <Grid
          variants={container}
          initial="hidden"
          animate="visible"
          component={motion.div}
          container
          spacing={5}
        >
          {popular.data?.pages.map((group, i) => (
            <>
              {group.data.map((val) => (
                <Grid
                  variants={item}
                  component={motion.div}
                  item
                  lg={2}
                  md={3}
                  sm={4}
                  xs={12}
                  key={val.id}
                >
                  <CardUpdated
                    mainImage={val.poster}
                    title={val.title}
                    details={{
                      cost: 0,
                      genre: val.keywords.length > 0 ? val.keywords[0].title : "",

                      rating: val.rating_imdb,
                      year: parseInt(val.release_time),
                    }}
                    type="small"
                  />
                </Grid>
              ))}
            </>
          ))}
        </Grid>

        <Box width="100%" display="flex" justifyContent="center" my={5}>
          <FlatButton
            onClick={() => popular.fetchNextPage()}
            title="Load More"
          />

        </Box>
      </Container>
    </>
  );
};

export const MainC = React.memo(Main);