import React from 'react';
import { Button, Modal, Box, Typography } from '@material-ui/core';
import useStyles from '../styles/useStyles';
import getModalPosition from './getModalPosition';

const ReleaseShowcase = (props) => {
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
            <img src={props.cover} alt="Default Cover" width="200" height="200"></img>
            <Box mt={4}></Box><Typography variant="body1" component="caption" mt={5}>{props.date}</Typography>
            <Typography variant="h5" component="string">Title: {props.title}</Typography>
            <Typography variant="h5" component="string">Artist: {props.artist}</Typography>
            <Button variant="contained" width="40px" color="white" href={props.sc} target="_blank" className={classes.scbutton}>Soundcloud</Button>
        </Box>
    );

    return (
        <div>
            <img src={props.cover} alt="Default Cover" width="250" height="250" onClick={openShowcase}></img>
            <Modal
                open={open}
                onClose={closeShowcase}
                aria-labelledby="mantis-release-showcase"
                aria-describedby="showcase of a particular release at mantis"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ReleaseShowcase;