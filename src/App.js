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
    justifyContent: 'center',
    padding: 0,
    margin: 5,
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
class Showcase extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <h2>{this.props.title}</h2>
    }
}
class Release extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showMessage: false }
    }

    _showMessage = () => {
        if(this.state.showMessage === false){
            this.setState({
                showMessage: true
              });
        } else if (this.state.showMessage === true){
            this.setState({
                showMessage: false
              });
        }
      }

    componentDidMount() {
        localStorage.clear();
    }

    render() {
        const item = [];
        return (
            <div>
                    <Grid item xs alignItems='center' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={defaultCover} alt="Default Cover" width="300" height="300" onClick={this._showMessage.bind(null)}></img>
                    <h8>{this.props.date}</h8>
                    <h4>{this.props.title}</h4>
                    {this.props.artist}
                    </Grid>
                {this.state.showMessage && (<Showcase title={this.props.title}/>)}
            </div>
        )
    }
}

function App() {
    const releaseData = JSON.parse(localStorage.getItem("release_data"));
    const releases = releaseData.releases.map((d) =><Release id={d.id} date={d.date} title={d.title} artist={d.artist}/>
    );
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
                <Box mb={9}>
                    <Typography variant="h6" component="h2" alignLeft>Releases</Typography>
                </Box>
                <Grid container spacing={3} direction="row-reverse">
                    {releases}
                </Grid>
            </Container>
        </div >
    )
}

export default App;
