import { Box, Button } from "@mui/material";
import { CustomizedTypography } from "../styles/styles";

export const Footer = () => {
  return (
    <footer>
      <Box display="flex" flexDirection="column">
        <CustomizedTypography
          fontWeight="bold"
          fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
          variant="h3"
          paddingTop={10}
          textAlign="center"
        >
          Ready For Any Team Size
        </CustomizedTypography>
        <CustomizedTypography
          fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
          textAlign="center"
          padding={4}
        >
          Optimized For Any Team Size
        </CustomizedTypography>
        <Box display="flex" margin="auto" justifyContent="center" padding={5}>
          <Button
            sx={{ mr: 2, fontSize: { lg: 18, md: 17, sm: 12 } }}
            variant="contained"
          >
            Try CodeEnv For Free
          </Button>
          <Button
            sx={{ ml: 2, fontSize: { lg: 18, md: 17, sm: 12 } }}
            variant="outlined"
          >
            Talk to Sales
          </Button>
        </Box>
      </Box>
    </footer>
  );
};
