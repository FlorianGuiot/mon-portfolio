// src/pages/Home.jsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from './sections/hero';
import AboutMe from './sections/aboutMe';
import Projects from './sections/projects';

const Home = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        </div>
    );
};

export default Home;
