import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Intro />
            <About />
            <Footer />
        </div>
    );
}

export default App;
