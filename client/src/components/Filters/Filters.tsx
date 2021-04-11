import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid, Select, Container, FormControl, MenuItem, FormHelperText, InputLabel } from '@material-ui/core'

interface Props { }
interface State {
    genre: {
        type: string,
        value: string
    }
    country: {
        type: string,
        value: string
    }
    quality: {
        type: string,
        value: string
    }
    sort: {
        type: string,
        value: string
    }
}
const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }),
)
const Filters: React.FC<Props> = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState<State>({
        genre: {
            type: 'genre',
            value: ''
        },
        country: {
            type: 'country',
            value: ''
        },
        quality: {
            type: 'quality',
            value: 'HD'
        },
        sort: {
            type: 'sort',
            value: ''
        }

    });
    return (
        <Container>
            <Grid container md={12} direction='row'>
                {Object.keys(filter).map((item) => {
                    return (<Grid lg={3} spacing={4} direction='row'>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                {filter[item].type}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={filter[item].value}
                                onChange={e => {
                                    let filterNew = JSON.parse(JSON.stringify(filter));
                                    filterNew[item].value = e.target.value;
                                    setFilter({ ...filterNew });
                                }}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>{filter[item].value ? filter[item].vaule : 'None'}</em>
                                </MenuItem>
                                <MenuItem value={'10'}>Ten</MenuItem>
                                <MenuItem value={'20'}>Twenty</MenuItem>
                                <MenuItem value={'30'}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </Grid>)
                })}
            </Grid>
        </Container>
    );
}

export default Filters;
