import { Box } from "@mui/material";
import PropTypes from "prop-types";

const MenuBar1 = ({ className = "", property1 = "menu-bar-closed" }) => {
  return (
    <nav
      className={`m-0 flex-1 flex flex-row items-center justify-start py-3.5 px-3 gap-10 text-left text-11xl text-tomato font-ibm-plex-mono ${className}`}
      data-property1={property1}
    >
      <Box className="flex flex-row items-center justify-center">
        <Box className="w-36 relative font-semibold flex items-center">
          projects
        </Box>
      </Box>
      <Box className="flex flex-row items-center justify-center">
        <Box className="w-[108px] relative font-semibold flex items-center">
          resume
        </Box>
      </Box>
      <Box className="flex flex-row items-center justify-center">
        <Box className="w-36 relative font-semibold flex items-center">
          about-me
        </Box>
      </Box>
      <img
        className="w-10 relative h-[50px] overflow-hidden shrink-0 hidden"
        alt=""
      />
    </nav>
  );
};

MenuBar1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default MenuBar1;
