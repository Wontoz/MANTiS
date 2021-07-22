import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

const ToggleShowcase = (props) => {

    let [currentDisplay, setDisplay] = useState('releases');

    function handleArtistClick() {
        setDisplay('artists');
    }

    function handleReleaseClick() {
        setDisplay('releases');
    };

    let itemsOnDisplay;
    if (currentDisplay === 'releases') {
        itemsOnDisplay =
            <div>
                <Box mb={9}>
                    <Typography variant="h6" component="h2" align="center">Releases</Typography>
                </Box>
                <Grid container spacing={2} direction="row-reverse">
                    {props.releases}
                </Grid>
            </div>
    } else if (currentDisplay === 'artists') {
        itemsOnDisplay =
            <div>
                <Box mb={9}>
                    <Typography variant="h6" component="h2" align="center">Artists</Typography>
                </Box>
                <Grid container spacing={2} direction="row-reverse">
                    {props.artists}
                </Grid>
            </div>
    }
    return (
        <div>
            <Grid container>
                <Grid item xs alignItems='center' onClick={handleReleaseClick} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    Music
                </Grid>
                <Grid item xs alignItems='center' onClick={handleArtistClick} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    Artists
                </Grid>
            </Grid>
            {itemsOnDisplay}
        </div>
    )
}

export default ToggleShowcase;