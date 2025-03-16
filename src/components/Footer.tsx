import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <Box
      className={`shadow-[0px_0px_7px_3px_#d9d9d9] rounded-3xs bg-lightsteelblue border-gainsboro border-solid border-[5px] box-border overflow-hidden flex flex-row items-center justify-start p-6 gap-2.5 min-w-[850px] text-right text-5xl text-tomato font-vcr-osd-mono ${className}`}
    >
      <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
        <Box className="h-[49px] w-[49px] relative">
          <Box className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[49px] h-[49px] hidden" />
          <img
            className="absolute top-[6.5px] left-[7.5px] w-[35px] h-[35px] z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </Box>
      </Box>
      <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
        <Box className="h-[49px] w-[49px] relative">
          <Box className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[49px] h-[49px] hidden" />
          <img
            className="absolute top-[7px] left-[7px] w-[35px] h-[35px] z-[1]"
            alt=""
            src="/vector-1.svg"
          />
        </Box>
      </Box>
      <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
        <Box className="h-[49px] w-[49px] relative">
          <Box className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[49px] h-[49px] hidden" />
          <img
            className="absolute top-[8px] left-[7px] w-[35px] h-[34px] z-[1]"
            alt=""
            src="/vector-2.svg"
          />
        </Box>
      </Box>
      <Box className="h-[65px] w-[65px] rounded-3xs bg-gray-300 flex flex-row items-center justify-center p-3xs box-border">
        <Box className="h-[49px] w-[49px] relative">
          <Box className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-[49px] h-[49px] hidden" />
          <img
            className="absolute top-[7px] left-[7px] w-[35px] h-[35px] z-[1]"
            alt=""
            src="/vector-3.svg"
          />
        </Box>
      </Box>
      <Box className="w-[480px] relative leading-[32px] flex items-center">
        moore-ux.com
      </Box>
    </Box>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
