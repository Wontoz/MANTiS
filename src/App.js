import React from 'react';
import data from './data.js';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from './components/header.js';
import Artist from './components/Artist.js';
import Release from './components/Release.js';
import ToggleShowcase from './components/ToggleShowcase.js';

function App() {
    const releaseData = JSON.parse(localStorage.getItem("release_data"));
    const releases = releaseData.releases.map((d) => <Release id={d.id} date={d.date} title={d.title} artist={d.artist} cover={d.cover} sc_link={d.sc_link} />);
    const artists = releaseData.artists.map((d) => <Artist id = {d.id} name = {d.name} location = {d.location} desc = {d.desc} img= {d.img} />);
    localStorage.clear();
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
