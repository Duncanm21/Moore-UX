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

const LandingPageDesktopSporg = () => {
  return (
    <Box className="w-full relative bg-lightsteelblue overflow-hidden flex flex-row items-start justify-center flex-wrap content-start py-3.5 px-6 box-border gap-12">
      <Box className="h-[109px] w-[216px] flex flex-row items-start justify-start p-3xs box-border min-w-[216px] max-w-[1140px]">
        <MooreLogo
          sproutDitherColor="/sproutdithercolor@2x.png"
          leftEyeWhite="/lefteyewhite.svg"
          rightEyeWhite="/righteyewhite.svg"
        />
      </Box>
      <Box className="h-[109px] flex-1 flex flex-row items-center justify-center flex-wrap content-center p-3xs box-border min-w-[240px] max-w-[738px]">
        <AnimationBar />
      </Box>
      <Box className="h-[109px] w-[586px] [filter:drop-shadow(0px_2px_4px_rgba(22,_26,_29,_0.25))] flex flex-row items-center justify-start flex-wrap content-center p-3xs box-border gap-2.5 max-w-[1140px]">
        <MenuBar1 property1={0} /> {/* or another appropriate number */}        
        <img
          className="h-[39.9px] w-[26.3px] relative"
          loading="lazy"
          alt=""
          src={trophyIcon}
        />
      </Box>
      <ProjectCardSporg />
      <ProjectCardGlide
        glidanceDocumentary="Glidance Documentary"
        screenArea={screenGlide}
        scanLines="/scanlines-1.svg"
        plantGroup={trophyIcon}
        videoProducerUXDesigner={`Video Producer & UX Designer`}
        rectangle11="/rectangle-11-3@2x.png"
        rectangle111="/rectangle-11-4@2x.png"
        rectangle112="/rectangle-11-5@2x.png"
      />
      <ProjectCardGlide
        glidanceDocumentary="Education Design Lab"
        screenArea={screenEdl}
        scanLines="/scanlines-2.svg"
        plantGroup={trophyIcon}
        videoProducerUXDesigner="Innovation Designer"
        rectangle11="/rectangle-11-6@2x.png"
        rectangle111="/rectangle-11-7@2x.png"
        rectangle112="/rectangle-11-8@2x.png"
        projectCardGlideBackgroundImage="url('/projectcardedl@3x.png')"
        frameBoxBackground="linear-gradient(rgba(22, 26, 29, 0.85), rgba(22, 26, 29, 0.85)), #161a1d"
        frameBoxBorder="2px solid #1d8697"
      />
      <ProjectCardSobd />
      <ProjectCardDreammap
        dreamMap="DreamMap"
        screenArea={screenDreammap}
        scanLines="/scanlines-4.svg"
        plantGroup={trophyIcon}
        conversationalDesigner="Conversational Designer"
        rectangle11="/rectangle-11-12@2x.png"
        toolBackgroundD="/rectangle-11-13@2x.png"
        toolBackgroundE="/rectangle-11-14@2x.png"
      />
      <ProjectCardGoogleFoodTruck
        googleMap="Google Map "
        foodTrucks="Food Trucks"
        screenArea={screenGoogleFoodTruck}
        scanLines="/scanlines-5.svg"
        plantGroup={trophyIcon}
        uXDesigner="UX Designer"
        rectangle11="/rectangle-11-15@2x.png"
        rectangle111="/rectangle-11-16@2x.png"
        rectangle112="/rectangle-11-17@2x.png"
      />
      <ProjectCardGoogleFoodTruck
        googleMap={`Hulu & `}
        foodTrucks="Live-Nation"
        screenArea={screenHulu}
        scanLines="/scanlines-6.svg"
        plantGroup={trophyIcon}
        uXDesigner="Experience Designer"
        rectangle11="/rectangle-11-18@2x.png"
        rectangle111="/rectangle-11-19@2x.png"
        rectangle112="/rectangle-11-20@2x.png"
        projectCardGoogleFoodTruckBackgroundImage="url('/projectcardgooglefoodtrucks1@3x.png')"
        frameBoxBorder="2px solid #3ae56b"
      />
      <ProjectCardDreammap
        dreamMap="MeowWolf Security"
        screenArea={screenMeowwolf}
        scanLines="/scanlines-7.svg"
        plantGroup={trophyIcon}
        conversationalDesigner="Security Officer"
        rectangle11="/rectangle-11-21@2x.png"
        toolBackgroundD="/rectangle-11-22@2x.png"
        toolBackgroundE="/rectangle-11-23@2x.png"
        projectCardDreammapBackgroundImage="url('/projectcardmeowwolf@3x.png')"
        frameBoxBorder="2px solid #eb0d77"
      />
      <Box className="h-[620px] w-[390px] rounded-3xs overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 box-border bg-[url('/public/cardback@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <Box className="h-[353px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gainsboro flex flex-col items-center justify-start p-6 box-border gap-6">
          <MooreLogo
            sproutDitherColor="/sproutdithercolor-1@2x.png"
            leftEyeWhite="/lefteyewhite-1.svg"
            rightEyeWhite="/righteyewhite-1.svg"
            mooreLogoWidth="206px"
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
