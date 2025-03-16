import { Box } from "@mui/material";
import PropTypes from "prop-types";

const ProjectCardSporg = ({ className = "" }) => {
  return (
    <Box
      className={`h-[620px] w-[390px] rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center flex-wrap content-center p-6 box-border gap-6 bg-[url('/public/projectcardsporg@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-11xl text-orange-200 font-vcr-osd-mono ${className}`}
    >
      <Box className="flex-1 flex flex-col items-center justify-start gap-6">
        <Box className="rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs">
          <Box className="w-[264px] relative leading-[32px] flex items-center justify-center shrink-0">
            SPOrg PSA Video for SXSW
          </Box>
        </Box>
        <Box className="self-stretch h-[250px] rounded-8xs bg-darkslategray overflow-hidden shrink-0 flex flex-col items-start justify-start p-3xs box-border relative gap-2.5">
          <Box className="w-80 relative rounded-8xs bg-gray-200 h-[220px] z-[0]" />
          <Box className="w-[300px] absolute !m-[0] top-[30px] left-[20px] rounded-8xs bg-darkgray h-[180px] z-[1]" />
          <img
            className="w-[300px] h-[180px] absolute !m-[0] top-[30px] left-[20px] rounded-12xs overflow-hidden shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/scanlines.svg"
          />
          <Box className="w-20 absolute !m-[0] top-[235px] left-[130px] rounded-8xs bg-gray-100 h-2.5 z-[3]" />
          <Box className="w-2 absolute !m-[0] top-[236px] left-[166px] rounded-3xs bg-tomato h-2 z-[4]" />
        </Box>
      </Box>
      <Box className="h-[100px] w-[340px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border gap-2.5 text-5xl text-orange-300">
        <Box className="self-stretch rounded-8xs [background:linear-gradient(rgba(22,_26,_29,_0.85),_rgba(22,_26,_29,_0.85)),_#599f4b] border-tomato border-solid border-[2px] flex flex-row items-center justify-start p-3xs">
          <img
            className="h-[33.5px] w-[45.1px] relative"
            alt=""
            src="/plantgroup-1.svg"
          />
        </Box>
        <Box className="w-60 relative leading-[32px] flex items-center justify-center">{`Lead Designer & Video Producer`}</Box>
      </Box>
      <Box className="flex flex-row items-center justify-start gap-5">
        <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
          <img
            className="h-[49px] w-[49px] relative rounded-3xs object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </Box>
        <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
          <img
            className="h-[49px] w-[49px] relative rounded-3xs object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-11-1@2x.png"
          />
        </Box>
        <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
          <img
            className="h-[49px] w-[49px] relative rounded-3xs object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-11-2@2x.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

ProjectCardSporg.propTypes = {
  className: PropTypes.string,
};

export default ProjectCardSporg;
