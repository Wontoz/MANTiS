import React from 'react';
import { Box, Modal, Typography } from '@material-ui/core';
import useStyles from '../styles/useStyles';
import getModalPosition from './getModalPosition';

const ArtistShowcase = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalPosition);
    const [open, setOpen] = React.useState(false);


    const openShowcase = () => {
        setOpen(true);
    };

    const closeShowcase = () => {
        setOpen(false);
    };

    const body = (
        <Box style={modalStyle} className={classes.paper} display="flex" alignItems="center">
            <img src={props.img} alt="Artist Cover" width="200" height="200"></img>
            <Typography variant="h5" component="string">Name: {props.name}</Typography>
            <Typography variant="h5" component="string">Location: {props.location}</Typography>
            <Typography variant="h5" component="string">Description: {props.desc}</Typography>
        </Box>
    );

    return (
        <div>
            <img src={props.img} alt="Artist Cover" width="250" height="250" onClick={openShowcase}></img>
            <Modal
                open={open}
                onClose={closeShowcase}
                aria-labelledby="mantis-artist-showcase"
                aria-describedby="showcase of a particular release at mantis"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ArtistShowcase;