import { Box, Grid } from "@material-ui/core";
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

export const Main: React.FC<Props> = () => {
  return (
    <>
      <Head title="Best Movies of this season" />
      <HomeCarousel>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <Box px={4} width="100%" display="flex" justifyContent="center">
              <Card mainImage={generatePhoto()} type="large" {...data} />
            </Box>
          </div>
        ))}
      </HomeCarousel>
      <Head title="Popular" />

      <Grid container spacing={5}>
        {[...new Array(18)].map((val, index) => (
          <Grid item lg={2} key={index}>
            <Card mainImage={generatePhoto()} type="small" {...data} />
          </Grid>
        ))}
      </Grid>
      <Box width="100%" display="flex" justifyContent="center" my={5}>
        <FlatButton title="Load More" />
      </Box>
    </>
  );
};
