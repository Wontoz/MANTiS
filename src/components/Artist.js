import React from 'react';
import { Grid } from '@material-ui/core';
import ArtistShowcase from './ArtistShowcase';

const Artist = (props) => {
    return (
        <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
             <ArtistShowcase name={props.name} location={props.location} desc={props.desc} img={props.img}/>
        </Grid>
    )
}
export default Artist;
