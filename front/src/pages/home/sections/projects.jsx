import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {

    return (
        <section id="projects" className="py-12 flex flex-col justify-center items-center text-text_dark">
            <div className="container mx-auto px-6 mb-24 lg:flex lg:items-center lg:justify-between h-full">

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 'once' pour ne l'animer qu'une seule fois
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 px-4 flex justify-center lg:justify-start mb-8 lg:mb-0"
            >
                <img
                src="/assets/setup.jpg"
                alt="Florian en train de coder"
                className="rounded w-full h-auto object-cover shadow-lg"
                />
            </motion.div>

            {/* Texte à propos */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }} // 'once' pour ne l'animer qu'une seule fois
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 px-4 text-center lg:text-left"
            >
                <h2 >À propos</h2>
                <p className="text-l md:text-lg text-text_secondary">Passionné par l’informatique et la création depuis mon plus jeune âge, j’ai toujours été animé par l’envie d’entreprendre et de donner vie à de nouveaux projets. Aujourd’hui, à 23 ans, je m’appuie sur une solide formation en conception et développement d’applications (Bachelor CDA et BTS SIO), enrichie par des expériences concrètes sur des projets de toutes tailles.</p>
                <p className="text-l md:text-lg text-text_secondary mt-2">Par goût pour le <strong>code propre, structuré et sécurisé</strong>, je me suis spécialisé en PHP avec le <strong>framework Symfony</strong>, que j’utilise pour développer des solutions robustes et bien pensées. Curieux et polyvalent, je m’ouvre également à d’autres technologies comme <strong>React et NodeJs</strong> pour le web, ou <strong>React Native</strong> pour le mobile.</p>
                <p className="text-l md:text-lg text-text_secondary mt-2">Fortement sensibilisé à <strong>l’expérience utilisateur</strong>, je conçois chaque application en me plaçant du point de vue de l’usager. À l’écoute, empathique et attentif aux retours terrain, je m’efforce de proposer des interfaces intuitives, adaptées aux usages réels et à la logique métier de chaque projet.</p>
                <div className='mt-4 flex justify-center lg:justify-start'>
                    <p className='badge-secondary mr-2'>Autonome</p>
                    <p className='badge-secondary mr-2'>Créatif</p>
                    <p className='badge-secondary'>Empathique</p>
                </div>
            </motion.div>
            </div>

        </section>
    );
};

export default Projects;
