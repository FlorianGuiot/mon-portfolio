import { useState, useEffect } from "react";
import Modal from "./Modal";
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, ServerStackIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Skills() {
  const skillsData = [
    {
      title: "Développement web",
      icon: <CodeBracketIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du développement mobile</div>,
    },
    {
      title: "Développement mobile",
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du développement mobile</div>,
    },
    {
      title: "WebDesign",
      icon: <PaintBrushIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu du WebDesign</div>,
    },
    {
      title: "Bases de données",
      icon: <ServerStackIcon className="h-10 w-10 text-text_dark" />,
      descriptionComponent: <div>Contenu sur les bases de données</div>,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [animateBounce, setAnimateBounce] = useState(false);
  const [hasClicked, setHasClicked] = useState(false); // Permet de savoir si l'utilisateur à cliqué sur au moins une carte

  useEffect(() => {
    if (hasClicked) return; //Désactive l'animation si l'utilisateur à déjà cliqué sur une carte
    const interval = setInterval(() => {
      setAnimateBounce(true);
      setTimeout(() => setAnimateBounce(false), 700); // temps de l'animation
    }, 3000);

    return () => clearInterval(interval);
  }, [hasClicked]);

  const showPrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : skillsData.length - 1));
  const showNext = () => setActiveIndex((prev) => (prev + 1) % skillsData.length);
  const closeModal = () => setActiveIndex(null);

  /**
   * Wrapper du clic sur une carte
   * @param {Number} index 
   */
  const handleCardClick = (index) => {
    setHasClicked(true);
    setActiveIndex(index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {skillsData.map((skill, index) => (
        <div
        key={index}
        className={`bg-gradient-to-b w-full from-secondary to-secondary/60 text-text_dark p-6 rounded-lg shadow-lg shadow-secondary/50 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ${
          index === 0 && animateBounce ? "bounce-every-3s" : ""
        }`}
        onClick={() => handleCardClick(index)}
      >
          <div className="flex justify-center lg:justify-start">  
            {skill.icon}
          </div>
          <h3 className="text-xl font-semibold mt-2 text-center lg:text-left">{skill.title}</h3>
        </div>
      ))}

      <Modal isOpen={activeIndex !== null} onClose={closeModal}>
        {activeIndex !== null && (
          <div>
            <div className="flex justify-between mt-6 mb-4">
              <a onClick={showPrev} className="btn-secondary flex items-center mr-2"><ChevronLeftIcon className="h-6 w-6 pr-2" /><span className='text-nowrap'>Précédent</span></a>
              
              <h3>{skillsData[activeIndex].title}</h3>

              <a onClick={showNext} className="btn-secondary flex items-center mr-2"><span className='text-nowrap'>Suivant</span><ChevronRightIcon className="h-6 w-6 pl-2" /></a>
            </div>
            {skillsData[activeIndex].descriptionComponent}
          </div>
        )}
      </Modal>
    </div>
  );
}
