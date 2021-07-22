import React from 'react';
import { Grid } from '@material-ui/core';
import ReleaseShowcase from './ReleaseShowcase';

const Release = (props) => {
    return (
        <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
             <ReleaseShowcase date={props.date} title={props.title} artist={props.artist} cover={props.cover} sc={props.sc_link} />
        </Grid>
    )
}

export default Release;