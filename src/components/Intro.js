import React, { useState, useEffect } from 'react';
import './Intro.css';
import astronaut from './astronaut.png';

function Intro() {
    const [jobTitle, setJobTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [letterIndex, setLetterIndex] = useState(0);
    const jobTitles = ['Software Developer', 'AI Engineer', 'Robotic Engineer'];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [delay, setDelay] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentJobTitle = jobTitles[currentTitleIndex];
            if (!isDeleting) {
                // Typing logic
                if (letterIndex < currentJobTitle.length) {
                    setJobTitle(currentJobTitle.substring(0, letterIndex + 1));
                    setLetterIndex(letterIndex + 1);
                } else {
                    // Start deleting after a delay
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // Deleting logic
                if (letterIndex > 0) {
                    setJobTitle(currentJobTitle.substring(0, letterIndex - 1));
                    setLetterIndex(letterIndex - 1);
                } else {
                    // Move to the next job title
                    setIsDeleting(false);
                    setCurrentTitleIndex((currentTitleIndex + 1) % jobTitles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);

        return () => clearTimeout(timer);
    }, [letterIndex, isDeleting, currentTitleIndex, jobTitles]);

    return (
        <section className="intro">
            <div className="intro-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">NEEL DHOLIYA</span></h1>
                <p>{jobTitle}<span className="cursor">|</span></p>
            </div>
            <div className="intro-image">
                <img src={astronaut} alt="Astronaut" />
            </div>
        </section>
    );
}

export default Intro;
