import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import './App.css';
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <About />
            {/* Other components */}
        </div>
    );
}

export default App;
