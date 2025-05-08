import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDoubleDownIcon, ArrowDownTrayIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Hero = () => {

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="h-screen pt-48 lg:pt-0 flex flex-col justify-center items-center bg-gradient-to-b from-background to-secondary/40 text-text_dark">
            <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-center lg:gap-12 h-full">

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 'once' pour ne l'animer qu'une seule fois
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start mb-8 lg:mb-0"
            >
                <img
                src="/assets/me.jpg" // remplace par ton chemin réel
                alt="Florian Guiot"
                className="rounded-full w-48 h-48 object-cover shadow-lg"
                />
            </motion.div>

            {/* Texte */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 'once' pour ne l'animer qu'une seule fois
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left lg:max-w-xl"
            >
                <h1>Développeur fullstack junior</h1>
                <p className="text-lg md:text-xl text-text_secondary mb-4">
                Spécialisé en PHP/Symfony, j'explore également d'autres technologies comme React ou C#, afin de m'adapter à tous vos projets. Mon objectif : créer des applications solides, intuitives et utiles.
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <a href="#about" className="btn-border-dark flex items-center mr-2"><span className='text-nowrap'>En savoir plus</span></a>
                    <a href="#contact" className="btn-primary flex items-center"><PaperAirplaneIcon className="h-6 w-6 pr-2" /> <span className='text-nowrap'> Me contacter</span></a>
                </div>
            </motion.div>
            </div>

            {/* Animation scroll */}
            <motion.div
            className="absolute bottom-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            >
            {isAtTop && (
            <ChevronDoubleDownIcon className="h-8 w-8 text-text_dark animate-bounce mx-auto mt-4" />
            )}
            </motion.div>
        </section>
    );
};

export default Hero;
