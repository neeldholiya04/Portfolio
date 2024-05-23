import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            {/* Other components */}
        </div>
    );
}

export default App;
