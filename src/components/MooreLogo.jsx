import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const MooreLogo = ({
  className = "",
  sproutDitherColor,
  leftEyeWhite,
  rightEyeWhite,
  mooreLogoWidth,
}) => {
  const mooreLogoStyle = useMemo(() => {
    return {
      width: mooreLogoWidth,
    };
  }, [mooreLogoWidth]);

  return (
    <Box
      className={`w-[407px] flex flex-col items-start justify-start text-left text-21xl text-tomato font-vcr-osd-mono ${className}`}
      style={mooreLogoStyle}
    >
      <Box className="w-48 h-[84px] relative">
        <img
          className="absolute h-[68.57%] w-[50.68%] top-[0%] right-[45.68%] bottom-[31.43%] left-[3.65%] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={sproutDitherColor}
        />
        <img
          className="absolute top-[60px] left-[27.5px] w-4 h-[17px]"
          loading="lazy"
          alt=""
          src={leftEyeWhite}
        />
        <img
          className="absolute top-[60px] left-[50.5px] w-4 h-[17px]"
          loading="lazy"
          alt=""
          src={rightEyeWhite}
        />
        <Box className="absolute top-[51.19%] left-[0%] flex items-center">
          Moore-UX
        </Box>
        <Box className="absolute h-[4.76%] w-[1.56%] top-[78.57%] right-[81.77%] bottom-[16.67%] left-[16.67%] bg-tomato" />
        <Box className="absolute h-[4.76%] w-[1.56%] top-[78.57%] right-[69.79%] bottom-[16.67%] left-[28.65%] bg-tomato" />
      </Box>
    </Box>
  );
};

MooreLogo.propTypes = {
  className: PropTypes.string,
  sproutDitherColor: PropTypes.string,
  leftEyeWhite: PropTypes.string,
  rightEyeWhite: PropTypes.string,

  /** Style props */
  mooreLogoWidth: PropTypes.string,
};

export default MooreLogo;
