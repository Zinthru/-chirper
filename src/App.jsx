import React, { Component } from 'react';
import ChirpPanels from './ChirpPanels/ChirpPanels';
import Navbar from './nav/Navbar';
import Chirp from './ChirpPanels/Chirp';

class App extends Component {
    state = {
        hasLoaded: false
    }

    componentDidMount() {
        this.setState({hasLoaded:true})
    }

    render() {
        return (
            <div className="container">
                <Navbar /> 
                <ChirpPanels />
                <Chirp/>
            </div>
        )
    }
}

export default App;


