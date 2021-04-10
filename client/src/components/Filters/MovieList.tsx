import React from 'react';
import { Grid, Container } from "@material-ui/core"
import { IContent } from '../../interfaces/IContent';
import { CardUpdated } from '../CardUpdated/CardUpdated';

interface Props {
    movies: IContent[]
}

const MovieList: React.FC<Props> = ({ movies }) => {
    return (
        <Container style={{ width: "95%" }}>
            <Grid container spacing={2}>
                {movies ? movies.map((val: IContent, index) => {
                    return (<Grid item lg={2} md={3} sm={4}><CardUpdated
                        type='small'
                        mainImage={val.poster}
                        title={val.title}
                        details={{
                            cost: "Free",
                            genre: val.keywords.length > 0 ? val.keywords[0].title : "",
                            rating: val.rating_imdb,
                            year: parseInt(val.release_time)
                        }} /></Grid>)
                }) : null}
            </Grid>

        </Container>
    );
}

export default MovieList;
