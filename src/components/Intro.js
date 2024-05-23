import React, { useState, useEffect } from 'react';
import './Intro.css';
import astronaut from './astronaut.png'; // Ensure you have the image in the correct path

function Intro() {
    const [jobTitle, setJobTitle] = useState('Software Developer');
    const [letterIndex, setLetterIndex] = useState(0);
    const jobTitles = ['Software Developer', 'AI Engineer', 'Robotic Engineer'];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [delay, setDelay] = useState(150); // Initial delay is 150ms

    useEffect(() => {
        const timer = setInterval(() => {
            setLetterIndex((prevIndex) => {
                if (prevIndex < jobTitles[currentTitleIndex].length) {
                    setDelay(150); // Set delay to 150ms for letter change
                    return prevIndex + 1;
                } else {
                    setCurrentTitleIndex((prevTitleIndex) => (prevTitleIndex + 1) % jobTitles.length);
                    setDelay(1000); // Set delay to 1000ms for word change
                    return 0;
                }
            });
            setJobTitle(jobTitles[currentTitleIndex].substring(0, letterIndex));
        }, delay); // Use delay state variable

        return () => clearInterval(timer); // Clean up on component unmount
    }, [letterIndex, jobTitles, currentTitleIndex, delay]);

    return (
        <section className="intro">
            <div className="intro-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">NEEL DHOLIYA</span></h1>
                <p>{jobTitle}</p>
            </div>
            <div className="intro-image">
                <img src={astronaut} alt="Astronaut" />
            </div>
        </section>
    );
}

export default Intro;