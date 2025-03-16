import { Box } from "@mui/material";
import MooreLogo from "../components/MooreLogo";
import AnimationBar from "../components/AnimationBar";
import MenuBar1 from "../components/MenuBar1";
import ProjectCardSporg from "../components/ProjectCardSporg";
import ProjectCardGlide from "../components/ProjectCardGlide";
import ProjectCardSobd from "../components/ProjectCardSobd";
import ProjectCardDreammap from "../components/ProjectCardDreammap";
import ProjectCardGoogleFoodTruck from "../components/ProjectCardGoogleFoodTruck";
import Footer from "../components/Footer";

const LandingPageDesktopSporg = () => {
  return (
    <Box className="w-full relative bg-lightsteelblue overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-3.5 px-6 box-border gap-12">
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
          src="/plantgroup.svg"
        />
      </Box>
      <ProjectCardSporg />
      <ProjectCardGlide
        glidanceDocumentary="Glidance Documentary"
        screenArea="/screenarea@2x.png"
        scanLines="/scanlines-1.svg"
        plantGroup="/plantgroup-1.svg"
        videoProducerUXDesigner={`Video Producer & UX Designer`}
        rectangle11="/rectangle-11@2x.png"
        rectangle111="/rectangle-11-4@2x.png"
        rectangle112="/rectangle-11-5@2x.png"
      />
      <ProjectCardGlide
        projectCardGlideBackgroundImage="url('/projectcardsporg@3x.png')"
        glidanceDocumentary="Education Design Lab"
        screenArea="/screenarea-1@2x.png"
        scanLines="/scanlines-1.svg"
        frameBoxBackground="linear-gradient(rgba(22, 26, 29, 0.85), rgba(22, 26, 29, 0.85)), #161a1d"
        frameBoxBorder="2px solid #1d8697"
        plantGroup="/plantgroup-3.svg"
        videoProducerUXDesigner="Innovation Designer"
        rectangle11="/rectangle-11-6@2x.png"
        rectangle111="/rectangle-11-7@2x.png"
        rectangle112="/rectangle-11-8@2x.png"
      />
      <ProjectCardSobd />
      <ProjectCardDreammap
        dreamMap="DreamMap"
        screenArea="/screenarea-3@2x.png"
        scanLines="/scanlines-1.svg"
        plantGroup="/plantgroup-1.svg"
        conversationalDesigner="Conversational Designer"
        rectangle11="/rectangle-11-6@2x.png"
        toolBackgroundD="/rectangle-11-7@2x.png"
        toolBackgroundE="/rectangle-11-5@2x.png"
      />
      <ProjectCardGoogleFoodTruck
        googleMap="Google Map "
        foodTrucks="Food Trucks"
        screenArea="/screenarea-4@2x.png"
        scanLines="/scanlines-1.svg"
        plantGroup="/plantgroup-3.svg"
        uXDesigner="UX Designer"
      />
      <ProjectCardGoogleFoodTruck
        projectCardGoogleFoodTruckBackgroundImage="url('/projectcardsporg@3x.png')"
        googleMap={`Hulu & `}
        foodTrucks="Live-Nation"
        screenArea="/screenarea-5@2x.png"
        scanLines="/scanlines.svg"
        frameBoxBorder="2px solid #3ae56b"
        plantGroup="/plantgroup-7.svg"
        uXDesigner="Experience Designer"
      />
      <ProjectCardDreammap
        projectCardDreammapBackgroundImage="url('/projectcardsporg@3x.png')"
        dreamMap="MeowWolf Security"
        screenArea="/screenarea-6@2x.png"
        scanLines="/scanlines-1.svg"
        frameBoxBorder="2px solid #eb0d77"
        plantGroup="/plantgroup-7.svg"
        conversationalDesigner="Security Officer"
        rectangle11="/rectangle-11-21@2x.png"
        toolBackgroundD="/rectangle-11-22@2x.png"
        toolBackgroundE="/rectangle-11-23@2x.png"
      />
      <Box className="h-[620px] w-[390px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 box-border bg-[url('/public/cardback@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <Box className="h-[353px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gainsboro flex flex-col items-center justify-start p-6 box-border gap-6">
          <MooreLogo
            mooreLogoWidth="206px"
            leftEyeWhite="/lefteyewhite-1.svg"
            rightEyeWhite="/lefteyewhite-1.svg"
          />
          <img
            className="w-[200px] h-[199px] relative object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-13@2x.png"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPageDesktopSporg;
