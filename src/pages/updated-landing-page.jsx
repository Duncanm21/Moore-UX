import React, { useState } from 'react';
import { Box } from "@mui/material";
import MooreLogo from "../components/MooreLogo";
import AnimationBar from "../components/AnimationBar";
import MenuBar1 from "../components/MenuBar1";
import ProjectCardSporg from "../components/ProjectCardSporg";
import ProjectCardGlide from "../components/ProjectCardGlide";
import ProjectCardSobd from "../components/ProjectCardSobd";
import ProjectCardDreammap from "../components/ProjectCardDreammap";
import ProjectCardGoogleFoodTruck from "../components/ProjectCardGoogleFoodTruck";
import ProjectCardBack from "../components/ProjectCardBack";
import FlippableCard from "../components/FlippableCard";
import InteractiveCanvas from "../components/InteractiveCanvas";
import Footer from "../components/Footer";

// Import image assets
import trophyIcon from '../assets/trophy-icon.png';
import screenSporg from '../assets/screen-sporg.png';
import screenGlide from '../assets/screen-glide.png';
import screenEdl from '../assets/screen-edl.png';
import screenSobd from '../assets/screen-sobd.png';
import screenDreammap from '../assets/screen-dreammap.png';
import screenGoogleFoodTruck from '../assets/screen-googlefoodtruck.png';
import screenHulu from '../assets/screen-hulu.png';
import screenMeowwolf from '../assets/screen-meowwolf.png';

// Import the card interaction styles
import "../styles/cardInteractions.css";

const InteractiveLandingPage = () => {
  // Project details for card backs
  const projectDetails = {
    sporg: {
      title: "SPOrg PSA Video",
      description: "Created a promotional PSA video for SPOrg to showcase at SXSW, highlighting their community initiatives.",
      technologies: ["After Effects", "Premiere Pro", "Figma"],
      link: "#sporg-project"
    },
    glidance: {
      title: "Glidance Documentary",
      description: "Produced a documentary about Glidance, focusing on accessibility and inclusive design solutions.",
      technologies: ["Video Production", "UX Design", "Prototyping"],
      link: "#glidance-project"
    },
    educationLab: {
      title: "Education Design Lab",
      description: "Designed innovative educational tools and platforms to enhance learning experiences.",
      technologies: ["Design Thinking", "Prototyping", "User Research"],
      link: "#education-lab-project"
    },
    sobd: {
      title: "State of Black Design",
      description: "Conducted research and developed insights on the state of Black design practitioners in the industry.",
      technologies: ["Research", "Data Analysis", "Visualization"],
      link: "#sobd-project"
    },
    dreamMap: {
      title: "DreamMap",
      description: "Created a conversational design platform that helps users map their dreams to achievable goals.",
      technologies: ["Conversation Design", "AI", "UX Design"],
      link: "#dreammap-project"
    },
    googleFoodTrucks: {
      title: "Google Map Food Trucks",
      description: "Designed an interface to help users find and explore food trucks in their area using Google Maps.",
      technologies: ["Google Maps API", "UX Design", "Prototyping"],
      link: "#google-food-trucks-project"
    },
    huluLiveNation: {
      title: "Hulu & Live-Nation",
      description: "Created an integrated experience design for Hulu and Live-Nation collaboration on virtual concerts.",
      technologies: ["Experience Design", "Video Streaming", "UI Design"],
      link: "#hulu-livenation-project"
    },
    meowWolf: {
      title: "MeowWolf Security",
      description: "Developed security protocols and systems for MeowWolf immersive art installations.",
      technologies: ["Security Design", "Installation Art", "System Planning"],
      link: "#meowwolf-security-project"
    }
  };

  return (
    <Box className="w-full h-screen relative bg-lightsteelblue overflow-hidden">
      {/* Header Content */}
      <Box className="w-full flex flex-row items-start justify-center flex-wrap content-start py-3.5 px-6 box-border gap-12 z-10 relative">
        <Box className="h-[109px] w-[216px] flex flex-row items-start justify-start p-3xs box-border min-w-[216px] max-w-[1140px]">
          <MooreLogo
            leftEyeWhite="/lefteyewhite.svg"
            rightEyeWhite="/lefteyewhite.svg"
          />
        </Box>
        <Box className="h-[109px] flex-1 flex flex-row items-center justify-center flex-wrap content-center p-3xs box-border min-w-[240px] max-w-[738px]">
          <AnimationBar />
        </Box>
        <Box className="h-[109px] w-[586px] [filter:drop-shadow(0px_2px_4px_rgba(22,_26,_29,_0.25))] flex flex-row items-center justify-start flex-wrap content-center p-3xs box-border gap-2.5 max-w-[1140px]">
          <MenuBar1 property1="menu-bar-open" />
          <img
            className="h-[39.9px] w-[26.3px] relative"
            loading="lazy"
            alt=""
            src={trophyIcon}
          />
        </Box>
      </Box>

      {/* Interactive Canvas with Cards */}
      <InteractiveCanvas>
        {/* SPOrg Card */}
        <FlippableCard
          frontContent={<ProjectCardSporg />}
          backContent={<ProjectCardBack projectDetails={projectDetails.sporg} />}
          className="absolute top-[250px] left-[100px]"
        />

        {/* Glidance Card */}
        <FlippableCard
          frontContent={
            <ProjectCardGlide
              glidanceDocumentary="Glidance Documentary"
              screenArea={screenGlide}
              scanLines="/scanlines.svg"
              plantGroup={trophyIcon}
              videoProducerUXDesigner={`Video Producer & UX Designer`}
              rectangle11="/rectangle-11-3@2x.png"
              rectangle111="/rectangle-11-4@2x.png"
              rectangle112="/rectangle-11-5@2x.png"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.glidance} />}
          className="absolute top-[250px] left-[550px]"
        />

        {/* Education Design Lab Card */}
        <FlippableCard
          frontContent={
            <ProjectCardGlide
              projectCardGlideBackgroundImage="url('/projectcardsporg@3x.png')"
              glidanceDocumentary="Education Design Lab"
              screenArea={screenEdl}
              scanLines="/scanlines-1.svg"
              frameBoxBackground="linear-gradient(rgba(22, 26, 29, 0.85), rgba(22, 26, 29, 0.85)), #161a1d"
              frameBoxBorder="2px solid #1d8697"
              plantGroup={trophyIcon}
              videoProducerUXDesigner="Innovation Designer"
              rectangle11="/rectangle-11-6@2x.png"
              rectangle111="/rectangle-11-7@2x.png"
              rectangle112="/rectangle-11-8@2x.png"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.educationLab} />}
          className="absolute top-[250px] left-[1000px]"
        />

        {/* SOBD Card */}
        <FlippableCard
          frontContent={<ProjectCardSobd />}
          backContent={<ProjectCardBack projectDetails={projectDetails.sobd} />}
          className="absolute top-[650px] left-[100px]"
        />

        {/* DreamMap Card */}
        <FlippableCard
          frontContent={
            <ProjectCardDreammap
              dreamMap="DreamMap"
              screenArea={screenDreammap}
              scanLines="/scanlines-1.svg"
              plantGroup={trophyIcon}
              conversationalDesigner="Conversational Designer"
              rectangle11="/rectangle-11-6@2x.png"
              toolBackgroundD="/rectangle-11-7@2x.png"
              toolBackgroundE="/rectangle-11-5@2x.png"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.dreamMap} />}
          className="absolute top-[650px] left-[550px]"
        />

        {/* Google Food Trucks Card */}
        <FlippableCard
          frontContent={
            <ProjectCardGoogleFoodTruck
              googleMap="Google Map "
              foodTrucks="Food Trucks"
              screenArea={screenGoogleFoodTruck}
              scanLines="/scanlines-1.svg"
              plantGroup={trophyIcon}
              uXDesigner="UX Designer"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.googleFoodTrucks} />}
          className="absolute top-[650px] left-[1000px]"
        />

        {/* Hulu & Live-Nation Card */}
        <FlippableCard
          frontContent={
            <ProjectCardGoogleFoodTruck
              projectCardGoogleFoodTruckBackgroundImage="url('/projectcardsporg@3x.png')"
              googleMap={`Hulu & `}
              foodTrucks="Live-Nation"
              screenArea={screenHulu}
              scanLines="/scanlines.svg"
              frameBoxBorder="2px solid #3ae56b"
              plantGroup={trophyIcon}
              uXDesigner="Experience Designer"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.huluLiveNation} />}
          className="absolute top-[1050px] left-[100px]"
        />

        {/* MeowWolf Card */}
        <FlippableCard
          frontContent={
            <ProjectCardDreammap
              projectCardDreammapBackgroundImage="url('/projectcardsporg@3x.png')"
              dreamMap="MeowWolf Security"
              screenArea={screenMeowwolf}
              scanLines="/scanlines-1.svg"
              frameBoxBorder="2px solid #eb0d77"
              plantGroup={trophyIcon}
              conversationalDesigner="Security Officer"
              rectangle11="/rectangle-11-21@2x.png"
              toolBackgroundD="/rectangle-11-22@2x.png"
              toolBackgroundE="/rectangle-11-23@2x.png"
            />
          }
          backContent={<ProjectCardBack projectDetails={projectDetails.meowWolf} />}
          className="absolute top-[1050px] left-[550px]"
        />
      </InteractiveCanvas>

      {/* Footer */}
      <Box className="w-full fixed bottom-0 left-0 z-20">
        <Footer />
      </Box>
    </Box>
  );
};

export default InteractiveLandingPage;
