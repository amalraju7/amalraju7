import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fullscreen, github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { professional_projects, projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  websiteLink,
  sourceCodeLink,
}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  
  return (
    <>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[440px]">
          <div className="relative h-[230px] w-full"   onClick={openModal}>
            
            <video
              src={image}
                autoPlay
  loop
  muted

              className="h-full w-full rounded-2xl object-cover"
            />

<div className="card-img_hover absolute bottom-1 right-2  m-3 flex justify-end">
              <div
                onClick={closeModal}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={fullscreen}
                  alt="fullscreen"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
    
            </div>
            {sourceCodeLink != "" ? ( <div className="card-img_hover absolute inset-0 top-1 right-2 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
    
            </div>): null}
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name} </h3>
            <div  onClick={() => window.open(websiteLink, "_blank")} className="flex cursor-pointer"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="currentColor" className="mr-1 mt-1">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
</svg> <span>View Website</span></div>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative bg-white p-4 max-w-full max-h-full">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center z-50"
          >
            X
          </button>
          <video
            src={image}
            controls
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Modal>
    </>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 mb-20 justify-center flex flex-wrap gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <Header useMotion={true} {...config.sections.professional_works} />

<div className="flex w-full">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
  >
    {config.sections.professional_works.content}
  </motion.p>
</div>

<div className="mt-20 justify-center flex flex-wrap gap-14">
  {professional_projects.map((project, index) => (
    <ProjectCard key={`project-${index}`} index={index} {...project} />
  ))}
</div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
