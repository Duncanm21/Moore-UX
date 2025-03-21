import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

const AnimationBar = ({ className = "" }) => {
  return (
    <Box
      className={`h-[109px] flex-1 flex flex-col items-start justify-start p-3xs box-border max-w-[718px] ${className}`}
    >
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-[89px] relative shadow-[0px_0px_7px_3px_#d9d9d9]"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#d9d9d9" },
          "& .MuiInputBase-root": {
            height: "89px",
            backgroundColor: "#8eb1c7",
            borderRadius: "10px",
          },
        }}
      />
    </Box>
  );
};

AnimationBar.propTypes = {
  className: PropTypes.string,
};

export default AnimationBar;
