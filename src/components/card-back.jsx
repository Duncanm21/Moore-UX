import React from 'react';
import { Box } from '@mui/material';
import MooreLogo from './MooreLogo';
import PropTypes from 'prop-types';

const ProjectCardBack = ({ projectDetails, className = "" }) => {
  return (
    <Box
      className={`h-[620px] w-[390px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 box-border bg-[url('/public/cardback@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <Box className="h-[353px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gainsboro flex flex-col items-center justify-start p-6 box-border gap-6">
        <MooreLogo
          mooreLogoWidth="206px"
          leftEyeWhite="/lefteyewhite-1.svg"
          rightEyeWhite="/lefteyewhite-1.svg"
        />
        
        {/* Project details section */}
        <Box className="w-full flex flex-col items-center justify-start gap-4 text-center text-11xl text-tomato font-vcr-osd-mono">
          <Box className="text-11xl font-bold">{projectDetails.title}</Box>
          
          <Box className="text-5xl">{projectDetails.description}</Box>
          
          {projectDetails.technologies && (
            <Box className="flex flex-row flex-wrap gap-2 justify-center mt-2">
              {projectDetails.technologies.map((tech, index) => (
                <Box 
                  key={index}
                  className="bg-gray-300 rounded-3xs px-2 py-1 text-5xl"
                >
                  {tech}
                </Box>
              ))}
            </Box>
          )}
          
          {projectDetails.link && (
            <a 
              href={projectDetails.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-5xl underline mt-4 text-tomato"
            >
              View Project
            </a>
          )}
        </Box>
      </Box>
    </Box>
  );
};

ProjectCardBack.propTypes = {
  projectDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string
  }).isRequired,
  className: PropTypes.string
};

export default ProjectCardBack;
