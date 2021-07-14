import React from 'react';
import data from './data.js';
import defaultCover from './img/defaultCover.png';
import './App.css';

class Header extends React.Component {
    render() {
        return (
            <h1> TBA Records </h1>
        )
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li>Music</li>
                <li>News</li>
                <li>Artists</li>
            </ul>
        )
    }
}
function Release(props) {
    return <li id={props.id}>
        <img src={defaultCover} alt="Default Cover"></img>
        <h4>{props.title}</h4>
        {props.artist}
    </li>
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
                <Release id={this.releaseData.releases[item].id} title={this.releaseData.releases[item].title} artist={this.releaseData.releases[item].artist} cover={this.releaseData.releases[item].cover}/>
            )
        }

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Navbar />
            <Gallery />
        </div>
    )
}

export default App;
