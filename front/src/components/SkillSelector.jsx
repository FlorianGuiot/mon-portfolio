import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
    { title: 'Développement web', description: 'Framework PHP moderne et robuste.' },
    { title: 'Développement mobile', description: 'Bibliothèque JS pour créer des interfaces dynamiques.' },
    { title: 'Conception de base de données', description: 'Environnement serveur basé sur JavaScript.' },
    { title: 'Webdesign', description: 'Framework CSS utilitaire rapide et flexible.' },
    { title: 'Réseau', description: 'Base de données relationnelle puissante.' },
];

const SkillSelector = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const centerCardCount = Math.floor(skills.length / 2);

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = (e) => {
            e.preventDefault();
            if (isAnimating) return; // Si l'animation est en cours, on bloque le défilement

            setIsAnimating(true); // Démarre l'animation
            if (e.deltaY > 0) {
                setActiveIndex((prev) => (prev + 1) % skills.length); // On passe à l'élément suivant
            } else {
                setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length); // On revient en arrière
            }

            setTimeout(() => setIsAnimating(false), 400); // On attend la fin de l'animation pour permettre un nouveau scroll
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, [isAnimating]);

    const getOffsetIndex = (index) => {
        const diff = index - activeIndex;
        if (diff > centerCardCount) return diff - skills.length;
        if (diff < -centerCardCount) return diff + skills.length;
        return diff;
    };

    return (
        <div
        ref={containerRef}
        className="relative h-[600px] overflow-hidden flex flex-col items-center"
        >
            {skills.map((skill, index) => {
            const offset = getOffsetIndex(index);
            const isActive = offset === 0;

            const y = offset * 100; // Décalage vertical
            const scale = isActive ? 1 : 0.85;
            const opacity = isActive ? 1 : 0.5;
            const zIndex = skills.length - Math.abs(offset); // Placer les cartes plus proches en avant
            const rotateX = offset * 20;

            // Masquer les cartes quand elles sont au-delà de leur position active
            const isVisible = Math.abs(offset) <= centerCardCount;

            // Ici, on applique un masque pour cacher le mouvement des cartes quand elles se déplacent
            const transitionConfig = {
                duration: 0.1,
                ease: 'easeInOut',
            };

            return (
                <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    animate={{
                    y: isVisible ? `${y}%` : 0,  // Si visible, on applique la position Y, sinon on cache
                    scale,
                    opacity: isVisible ? opacity : 0,  // Opacité ajustée
                    rotateX,
                    zIndex,
                    }}
                    transition={transitionConfig}
                    className={`absolute w-4/5 lg:w-3/4 p-4 rounded-xl cursor-pointer shadow-xl transition-transform ease-in-out duration-300 ${{
                    true: 'bg-primary text-white',
                    false: 'bg-secondary/20 text-text_dark',
                    }[isActive]}`}
                    style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    transformStyle: 'preserve-3d',
                    visibility: isVisible ? 'visible' : 'hidden',  // Cacher les cartes non visibles
                    }}
                >
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-sm mt-1">{skill.description}</p>
                </motion.div>
                );
            })}
        </div>
    );
};

export default SkillSelector;
