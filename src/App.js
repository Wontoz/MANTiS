import React from 'react';
import data from './data.js';
import defaultCover from './img/defaultCover.png';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

class Header extends React.Component {
    render() {
        return (
            <span>
                <Typography variant="h2" component="h1" align="center">TBA Records</Typography>
                <Typography variant="h6" component="h2" align="center">Home of Wontoz.</Typography>
            </span>
        )
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <List style={flexContainer}>
                <ListItem>Music</ListItem>
                <ListItem>Artists</ListItem>
            </List>
        )
    }
}
function Release(props) {
    return (
    <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img src={defaultCover} alt="Default Cover"></img>
        <h8>{props.date}</h8>
        <h4>{props.title}</h4>
        {props.artist}
    </Grid>
    )
}
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.releaseData = JSON.parse(localStorage.getItem("release_data"));
    }

    componentDidMount() {
        localStorage.clear();
    }

    render() {
        const items = [];
        for (var item in this.releaseData.releases) {
            items.push(
                    <Release id={this.releaseData.releases[item].id} date={this.releaseData.releases[item].date} title={this.releaseData.releases[item].title} artist={this.releaseData.releases[item].artist} cover={this.releaseData.releases[item].cover} />
            )
        }

        return (
            <Grid container spacing={3} direction="row-reverse">
                {items}
            </Grid>
        )
    }
}

function App() {
    return (
        <div>
            <Container>
                <Box m="auto" display="flex"
                    width={800} height={180}
                    border={1}
                    borderColor="grey.500"
                    alignItems="center"
                    justifyContent="center">
                    <Header />    
                </Box>
                <Navbar />
                <Gallery />
            </Container>
        </div >
    )
}

export default App;
