import React from 'react';
import data from './data.js';
import defaultCover from './img/defaultCover.png';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { Button, List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    margin: 5,
};

function getModalPosition() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'fixed',
        top: 'left: 50%',
        width: 400,
        backgroundColor: "black",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: 15,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    scbutton: {
        background: 'linear-gradient(45deg, #FF5836 40%, #FF7F34 60%)',
        color: 'white'
    }
}));

function ReleaseShowcase(props) {

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

function ArtistShowcase(props) {

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
            <img src={props.img} alt="Artist Image" width="200" height="200"></img>
            <Typography variant="h5" component="string">Name: {props.name}</Typography>
            <Typography variant="h5" component="string">Location: {props.location}</Typography>
            <Typography variant="h5" component="string">Description: {props.desc}</Typography>
        </Box>
    );

    return (
        <div>
            <img src={props.img} alt="Artist Image" width="250" height="250" onClick={openShowcase}></img>
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

class ToggleShowcase extends React.Component{
    constructor(props){
        super(props);
        this.handleArtistClick = this.handleArtistClick.bind(this);
        this.handleReleaseClick = this.handleReleaseClick.bind(this);
        this.state = {displayReleases: true};
    }

    handleArtistClick() {
        this.setState({displayReleases: false});
    }

    handleReleaseClick() {
        this.setState({displayReleases: true});
    }

    render() {
        const displayReleases = this.state.displayReleases;
        let itemsOnDisplay;
        if(displayReleases){
            itemsOnDisplay = 
                <div>
                    <Box mb={9}>
                        <Typography variant="h6" component="h2" align="center">Releases</Typography>
                    </Box>
                <Grid container spacing={2} direction="row-reverse">
                    {this.props.releases}
                </Grid>
                </div>
        } else {
            itemsOnDisplay = 
                <div>
                    <Box mb={9}>
                        <Typography variant="h6" component="h2" align="center">Artists</Typography>
                    </Box>
                    <Grid container spacing={2} direction="row-reverse">
                        {this.props.artists}
                    </Grid>
                </div>
        }
        return (
            <div>
            <Grid container>
                <Grid item xs alignItems='center' onClick={this.handleReleaseClick} style={{ display: "flex", flexDirection: "column", alignItems: "center" } }>
                    Music
                </Grid>
                <Grid item xs alignItems='center' onClick={this.handleArtistClick} style={{ display: "flex", flexDirection: "column", alignItems: "center" } }>
                    Artists
                </Grid>
            </Grid>
            {itemsOnDisplay}
            </div>
        )
    }

    /*return (
        <div>
            <List>
                <ListItem onClick={toggleReleases}>Music</ListItem>
                <ListItem onClick={toggleArtists}>Artists</ListItem>
            </List>
            <Grid 
                container spacing={2} 
                direction="row-reverse" 
            >
                {props.releases}
            </Grid>
            {switchShowcase &&
                <Grid 
                container spacing={2} 
                direction="row-reverse"
            >
                {props.artists}
            </Grid>}
        </div>
    ); */
}


class Header extends React.Component {
    render() {
        return (
            <span>
                <Typography variant="h2" component="h1" align="center">M4NTiS</Typography>
                <Typography variant="h6" component="h2" align="center">Important Records Since 2019.</Typography>
            </span>
        )
    }
}

class Release extends React.Component {
    componentDidMount() {
        localStorage.clear()
    }

    render() {
        return (
            <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <ReleaseShowcase date={this.props.date} title={this.props.title} artist={this.props.artist} cover={this.props.cover} sc={this.props.sc_link} />
            </Grid>
        )
    }
}

class Artist extends React.Component {
    componentDidMount() {
        localStorage.clear()
    }

    render() {
        return (
            <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <ArtistShowcase name={this.props.name} location={this.props.location} desc={this.props.desc} img={this.props.img}/>
            </Grid>
        )
    }
}

function App() {
    document.title = "M4NTiS - Important Records Since 2019"
    const releaseData = JSON.parse(localStorage.getItem("release_data"));
    const releases = releaseData.releases.map((d) => <Release id={d.id} date={d.date} title={d.title} artist={d.artist} cover={d.cover} sc_link={d.sc_link} />);
    const artists = releaseData.artists.map((d) => <Artist id = {d.id} name = {d.name} location = {d.location} desc = {d.desc} img= {d.img} />);
    return (
        <div>
            <Container>
                <Box m="auto" display="flex"
                    width={800} height={180}
                    alignItems="center"
                    justifyContent="center">
                    <Header />
                </Box>
                <ToggleShowcase releases = {releases} artists ={artists}></ToggleShowcase>
            </Container>
        </div >
    )
}

export default App;
